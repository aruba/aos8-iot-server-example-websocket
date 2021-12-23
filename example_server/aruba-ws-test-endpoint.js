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
var fs = require('fs');
var WebSocket = require('ws');
var bodyParser = require('body-parser');
var validator = require('validator');

const date_options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
};
require('log-timestamp')(function() { return new Date().toLocaleString('en-US',date_options) });

var aruba_telemetry_proto = require("./aruba_iot_proto_MODIFIED.js").aruba_telemetry;

const aruba_ws_clients = {};    // stores connected ws clients info 
var g_wsoc = null;
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

app.post('/sb_api', jsonParser,function(req,res){
  // handle API from GUI and send mesg to WSS.

  var reqBody = req.body
  console.log("received json body:",JSON.stringify(reqBody,null,3));

  try{
    var reply = aruba_telemetry_proto.IotSbMessage.fromObject(reqBody);
    console.log("Constructed Reply: ",reply);

    aruba_telemetry_proto.IotSbMessage.verify(reply);
    var payload = aruba_telemetry_proto.IotSbMessage.encode(reply).finish();
    console.log("Constructed PBF: ",payload);
    console.log("Buffer Len: ",payload.length);

    g_wsoc.send(payload);
    res.send('OK')
  }catch(e){
    console.log(e);
    res.status(500)
    res.send('Error')
  }

});


app.post('/test_sb_api', jsonParser,function(req,res){
  // handle API from GUI and send mesg to WSS.

  console.log("Inside /test_sb_api");
  var reqBody = req.body
  var recv_apmac = null
  var mac_isbase64 = null;
  if (validator.isBase64(reqBody.receiver.apMac)) {
    recv_apmac = Buffer.from(reqBody.receiver.apMac, 'base64').toString("hex");
    console.log(`is BASE64 val:${reqBody.receiver.apMac} convertedValue:${recv_apmac}`)
    mac_isbase64 = true;
  }
  if (reqBody.receiver.apMac && !mac_isbase64) {
    console.log("Receiver AP Mac: " +reqBody.receiver.apMac);
    recv_apmac = reqBody.receiver.apMac;
    recv_apmac = recv_apmac.replace(/:/g,'');
    console.log("Receiver AP Mac minus colon: " +recv_apmac)
  }

  var conn_id = null
  let status_str = "{ \"status\": \"ERROR: AP Mac not found\" }"
  for (var key in aruba_ws_clients) {
    if (aruba_ws_clients[key].reporter.mac === recv_apmac) {
      console.log(`Found key: ${key} for reporter MAC:${recv_apmac} with WS connection id:${aruba_ws_clients[key].aruba_ws_conn_id}\n`);
      conn_id = aruba_ws_clients[key].aruba_ws_conn_id
      status_str = "{ \"status\": \"SUCCESS: AP Mac found\" }"
      break
    }
  }  

  try {
    var reply = aruba_telemetry_proto.IotSbMessage.fromObject(reqBody);
    //console.log("Constructed Reply: ", reply);
    aruba_telemetry_proto.IotSbMessage.verify(reply);
    var payload = aruba_telemetry_proto.IotSbMessage.encode(reply).finish();
    //console.log("Constructed PBF: ", payload);
    //console.log("Buffer Len: ", payload.length);

    ws.clients.forEach(function each(client) {
      if (client.aruba_conn_id == conn_id) {
        console.log("Match found: " + client.aruba_conn_id)
        client.send(JSON.stringify(reqBody, null, 3))
      }
    });

    // Send status string back to caller of REST api
    res.send(status_str)

  } catch (e) {
    console.log(e);
    res.status(500)
    res.send('ERROR when sending msg to WS client')
    console.log("ERROR when sending msg to client")
  }


})

// Endpoint returns 'aruba_ws_clients' object 
// which contains the AP MAC and the associated WS client id
// alongwith other info from the apHealthUpdate message
// collected by this websocket server instance
app.post('/client_aps', jsonParser,function(req,res){

  console.log("Number of aruba_ws_clients: " + Object.keys(aruba_ws_clients).length)
  // for (var key in aruba_ws_clients) {
  //   console.log("key: "+key)
  //   console.log("value: "+JSON.stringify(aruba_ws_clients[key], null, 2)+"\n");
  // }
  res.send(JSON.stringify(aruba_ws_clients,null,2))

});


// Endpoint returns 'aruba_ws_clients' object 
// which contains the AP MAC and the associated WS client id
// alongwith other info from the apHealthUpdate message
// collected by this websocket server instance
app.post('/client_ws', jsonParser,function(req,res){

  var tmp;
  console.log("found: ipaddress: "+JSON.stringify(ws, null, 3))
  ws.clients.forEach(function each(client) {
    //console.log(JSON.stringify(client, null, 3))
    console.log("found: " + client.aruba_conn_id+"  ipaddress: "+client._socket._peername.address)
    console.log("found: " + client.aruba_conn_id+"  ipaddress: "+JSON.stringify(ws.clients, null, 3))

    // if (client.aruba_conn_id == conn_id) {
    //   console.log("Match found: " + client.aruba_conn_id)
    //   client.send(JSON.stringify(reqBody, null, 3))
    // }
  });

  // console.log("Number of aruba_ws_clients: " + Object.keys(aruba_ws_clients).length)
  // for (var key in aruba_ws_clients) {
  //   console.log("key: "+key)
  //   console.log("value: "+JSON.stringify(aruba_ws_clients[key], null, 2)+"\n");
  // }
  res.send(JSON.stringify("client_ws test 3",null,2))

});

function clear_aruba_ws_clients(aruba_conn_id)
{

}

ws.on('connection',function(wsoc, req)
{
  try {
    g_wsoc = wsoc;
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
    });

    wsoc.on('message', function message(mesg){
      try {
        if (typeof(mesg) === 'string') {
          //console.log("MSG COUNT-:: " + msg_counter + " typeof(mesg): " + typeof(mesg) + " connID: " +wsoc.aruba_conn_id);
          handle_json_test_msg(mesg, wsoc.aruba_conn_id, false);
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

// Function is used during unit testing using 'wscat' which sends 
// JSON formatted strings mimicking the apHealthUpdate msgs from the AP 
function handle_json_test_msg(mesg, aruba_conn_id, msgIsJSON)
{
  msg_counter++;
  console.log("Inside "+arguments.callee.name);
  try {
    let json_obj;
    if (msgIsJSON) {
      json_obj = mesg;
    } else {
      // msg is string, convert to JSON
      json_obj = JSON.parse(mesg);
    }

    if (json_obj.meta.nbTopic === "apHealthUpdate") {
      if (json_obj.reporter) {
        console.log("reporter is here ==> "+json_obj.reporter.name)
      } else {
        console.log("reporter is NOTT here")
      }
      json_obj.aruba_ws_conn_id = aruba_conn_id
      aruba_ws_clients[json_obj.reporter.mac] = json_obj;
    }
  } catch (e) {
    return false;
  }
}


function handle_aruba_telemetry_proto_mesg(mesg, aruba_conn_id) {
  let date_ob = new Date();

  // Verify Message
  try {
    var err = aruba_telemetry_proto.Telemetry.verify(mesg);
    if (err) {
      //console.log(err);
    }

    // Decode Message
    var reqBody = aruba_telemetry_proto.Telemetry.decode(mesg);

    // Keep track of message count while running
    msg_counter++;

    reqBody = reqBody.toJSON();
    if (reqBody.meta.nbTopic == "apHealthUpdate") {
      handle_json_test_msg(reqBody, aruba_conn_id, true);
    }

    console.log(JSON.stringify(reqBody, null, 2));
    console.log( "MSG COUNT: " + msg_counter + " Timestamp: " + date_ob.toISOString() + "\n" );
  } catch (e) {
    console.log(e);
  }
}

function toHexString(byteArray) {
  return Array.from(byteArray, function(byte) {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join('')
}

