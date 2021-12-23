// ###########################################################################
//  (C) Copyright [2018-2021] Hewlett Packard Enterprise Development LP
// 
//  Licensed under the Apache License, Version 2.0 (the "License"); you may
//  not use this file except in compliance with the License. You may obtain
//  a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
//  WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
//  License for the specific language governing permissions and limitations
//  under the License.
// ##########################################################################



var express = require('express');
var http = require('http');
var WebSocket = require('ws');
var bodyParser = require('body-parser');

//Basic Timestamp for console.log (shows time in millisecond)
require('log-timestamp');
// Prettier timestamp
// require('log-timestamp')(function() { return new Date().toLocaleString('en-US',) });

var aruba_telemetry_proto = require("./aruba_iot_proto_MODIFIED.js").aruba_telemetry;

const aruba_ws_clients = {};    // stores connected ws clients info 
const port = 7443;
const MAX_CONNECTIONS = 100;
var msg_counter = 0;
var jsonParser = bodyParser.json();
const app = express()
const httpServer = http.createServer(app)
httpServer.maxConnections = MAX_CONNECTIONS
var ws = new WebSocket.Server({server:httpServer, clientTracking:true});

httpServer.listen(port, function(){
  console.log(`server started on port ${httpServer.address().port}` );
});


/*******************************************
 ************* REST ENDPOINTS **************
 *******************************************/

// Endpoint allows user to send a properly formatted SB api message back to
// the IAP/controller based on the receiver MAC value. 
// Notes: 
// 1. Since we lookup the connection ID in the aruba_ws_clients object, which is 
//    created from NB messages containing the reporter topic, users cannot send a 
//    SB msg until the AP MAC is populated alongwith the connection ID. 
//    Users can call the ap_topo endpoint to check if the receiver AP of interest 
//    is present in the aruba_ws_clients object.
// 2. The receiver->all option (set to true) is not supported in this function.
app.post('/sb_api', jsonParser,function(req,res){
  // handle API from GUI and send mesg to WSS.
  var conn_id = null;
  var reqBody = req.body;
  var recv_apmac = null;
  
  console.log("Inside /sb_api");

  // When using aruba_iot_proto_MODIFIED.js, AP mac is converted to string when the msg
  // is decoded and its contents are store in arub_ws_clients. However, in the sb_api 
  // endpoint, the AP MAC is expected to be base64 encoded. That is why, we re-format 
  // the SB api receiver AP MAC in order to do a lookup for the ws client
  recv_apmac = Buffer.from(reqBody.receiver.apMac, 'base64').toString("hex");
  console.log(`Receiver AP MAC BASE64 val:${reqBody.receiver.apMac} convertedValue:${recv_apmac}`)

  try {
    console.log(`LOOKUP Connection ID for AP mac:${recv_apmac}`)
    if (recv_apmac in aruba_ws_clients) {
      conn_id = aruba_ws_clients[recv_apmac].aruba_ws_conn_id
    } else {
      throw `FAIL: AP MAC ${recv_apmac} not found`
    }

    if (conn_id === null) {
      throw `FAIL: Connection ID not found for AP MAC ${recv_apmac}`
    } else {
      console.log(`For AP:${recv_apmac} Connection ID:${conn_id}`)
      var reply = aruba_telemetry_proto.IotSbMessage.fromObject(reqBody);
      aruba_telemetry_proto.IotSbMessage.verify(reply);
      var payload = aruba_telemetry_proto.IotSbMessage.encode(reply).finish();
      //console.log("Constructed Reply: ", reply);
      //console.log("Constructed PBF: ", payload);
      //console.log("Buffer Len: ", payload.length);
  
      ws.clients.forEach(function each(client) {
        if (client.aruba_conn_id == conn_id) {
          console.log("Match found: " + client.aruba_conn_id)
          client.send(payload)
        }
      });
      // Send status string back to caller of REST api
      res.send(JSON.stringify({"status": "SUCCESS: AP MAC found"}, null, 2))
    }
  } catch (e) {
    console.log(e+"\n");
    res.status(500)
    res.send(JSON.stringify({"status": e}, null, 2))
  }
})

// Endpoint returns the list of APs that sent NB messages 
// to this websocker server instance. 'aruba_ws_clients' object 
// contains the AP MAC and the associated WS client id
// alongwith other info from the NB messages.
app.post('/ap_info', jsonParser,function(req,res){
  console.log("Enter /ap_info");
  console.log("Number of connected APs: " + Object.keys(aruba_ws_clients).length)
  res.send(JSON.stringify(aruba_ws_clients,null,2))
  console.log("Exit /ap_info\n\n");
});

// Endpoint returns an array of objects, each containing the websocket 
// connection id, the peer/client IP address and a list of APs for which 
// we received an apHeathUpdate over that client connection.
app.post('/ap_topo', jsonParser,function(req,res){
  console.log("Enter /ap_topo");
  var tmp = [];
  ws.clients.forEach(function each(client) {
    console.log("found: " + client.aruba_conn_id+"  ipaddress: "+client._socket._peername.address)

    let ap_arr = [];
    for (var apmac in aruba_ws_clients){
      if (aruba_ws_clients[apmac].aruba_ws_conn_id === client.aruba_conn_id) {
        ap_arr.push(apmac);
      }
    }

    tmp.push({"aruba_ws_connection_id": client.aruba_conn_id, 
              "aruba_ws_peer_address": client._socket._peername.address, 
              "aruba_aps": ap_arr})
  });
  console.log("Total number of Websocket connections: "+tmp.length)
  res.send(JSON.stringify(tmp,null,2))
  console.log("Exit /ap_topo\n\n");
});


/*******************************************
 ****** WEBSOCKET CONNECTION HANDLER *******
 *******************************************/

ws.on('connection',function(wsoc, req)
{
  try {
    console.log("WebSocket connection Established!! From: " + req.socket.remoteAddress);
    console.log("req.headers['sec-websocket-key']: " + req.headers['sec-websocket-key'])
    wsoc.aruba_conn_id = req.headers['sec-websocket-key'];
    wsoc.on('error', function(e)
    {
      console.log(e);
    });

    wsoc.on('close', function(e)
    {
        console.log("WebSocket connection Closed!! From: " + req.socket.remoteAddress);
        console.log("WebSocket id: " + wsoc.aruba_conn_id);
        console.log("Error: " + e);
        clear_aruba_ws_clients(wsoc.aruba_conn_id)
    });

    wsoc.on('message', function message(mesg){
      try {
        msg_counter++;
        if (typeof(mesg) === 'string') {
          //console.log("MSG COUNT-:: " + msg_counter + " typeof(mesg): " + typeof(mesg) + " connID: " +wsoc.aruba_conn_id);
          update_aruba_ws_clients(mesg, wsoc.aruba_conn_id, false);
        } else {
          //console.log("MSG COUNT=:: " + msg_counter + " typeof(mesg): " + typeof(mesg) + " connID: " +wsoc.aruba_conn_id);
          handle_aruba_telemetry_proto_mesg(mesg, wsoc.aruba_conn_id);
        }
      } catch (e) {
        console.log("Error: " + e);
      }
    });

  } catch (e) {
    console.log(e);
  }
});


/*******************************************
 *********** HELPER FUNCTIONS **************
 *******************************************/

// Function clears the AP list when the websocket client is disconnected
function clear_aruba_ws_clients(aruba_conn_id)
{
  //console.log("Inside "+arguments.callee.name+ " conn_id: "+aruba_conn_id);
  var del_arr = []
  for (var apmac in aruba_ws_clients){
    if (aruba_ws_clients[apmac].aruba_ws_conn_id === aruba_conn_id) {
      del_arr.push(apmac);
    }
  }
  for (let i=0; i<del_arr.length;i++) {
    delete(aruba_ws_clients[del_arr[i]])
  }
  console.log(JSON.stringify(del_arr))
}


// Function populates the aruba_ws_clients object which is made up of key-value 
// pairs where the key is the AP MAC. Note that this function was used during 
// unit testing using 'wscat' which sends 
// JSON formatted strings mimicking the apHealthUpdate msgs from the AP.
function update_aruba_ws_clients(mesg, aruba_conn_id, msgIsJSON)
{
  //console.log("Inside "+arguments.callee.name);
  try {
    let json_obj;
    if (msgIsJSON) {
      json_obj = mesg;
    } else {
      // If mesg is string, try converting to JSON
      json_obj = JSON.parse(mesg);
    }

    if (json_obj.reporter) {
      if (!(json_obj.reporter.mac in aruba_ws_clients)) {
        aruba_ws_clients[json_obj.reporter.mac] = {reporter: json_obj.reporter, aruba_ws_conn_id: aruba_conn_id};
        console.log(`reporter mac ${json_obj.reporter.mac} added`)
      } else {
        console.log(`reporter mac ${json_obj.reporter.mac} already present`)
      }
    } else {
      console.log(`reporter is ABSENT`)
    }

  } catch (e) {
    console.log(e)
    console.log(`Invalid Msg: ${mesg}`)
    return false;
  }
}

// Function manipulates the incoming protobuf message 
// Message contents are decoded and printed to output 
function handle_aruba_telemetry_proto_mesg(mesg, aruba_conn_id) {
  // Verify Message
  try {
    var err = aruba_telemetry_proto.Telemetry.verify(mesg);
    if (err) {
      console.log(err);
    }

    // Decode Message
    var reqBody = aruba_telemetry_proto.Telemetry.decode(mesg);
    reqBody = reqBody.toJSON();

    // Store AP and corresponding websocket client info.
    // Notes: 
    // 1. Since we store the connection ID in the aruba_ws_clients object, which is 
    //    created from NB messages containing the reporter topic, users cannot send a 
    //    SB msg until the AP MAC is populated alongwith the connection ID. 
    //    Users can call the ap_topo endpoint to check if the receiver AP of interest 
    //    is present in the aruba_ws_clients object.
    update_aruba_ws_clients(reqBody, aruba_conn_id, true);
    console.log(JSON.stringify(reqBody, null, 2));
    console.log(`MSG COUNT: ${msg_counter}\n`);
  } catch (e) {
    console.log(e);
  }
}