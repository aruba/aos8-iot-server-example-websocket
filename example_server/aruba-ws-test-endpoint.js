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

var g_wsoc = null;
const port = 7443;
const MAX_CONNECTIONS = 100;
var msg_counter = 0;
var jsonParser = bodyParser.json();
const app = express()
const httpServer = http.createServer(app)
httpServer.maxConnections = MAX_CONNECTIONS
var ws = new WebSocket.Server({server:httpServer});

/*
 * Change the following value to True, to disable logging of all messages, except Soutbound API related messages
 */
var print_SBAPI_only = false;

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

ws.on('connection',function(wsoc, req)
{
  try {
    g_wsoc = wsoc;
    console.log("WebSocket connection Established!! From: " + req.connection.remoteAddress);
    
    wsoc.on('error', function(e)
    {
      console.log(e);
    });

    wsoc.on('close', function(e)
    {
        console.log("WebSocket connection Closed!! From: " + req.connection.remoteAddress);
        console.log("Error: " + e);
    });

    wsoc.on('message', function message(mesg){
      try {
        handle_aruba_telemetry_proto_mesg(mesg);
        // wsoc.send(mesg);
      } catch (e) {
        console.log("Error: " + e);
      }
    });

  } catch (e) {
    console.log(e);
  }
});

function handle_aruba_telemetry_proto_mesg(mesg){
    let ts = Date.now();
    // timestamp in milliseconds
    let date_ob = new Date(ts);
    // current hours
    let hours = date_ob.getHours();
    // current minutes
    let minutes = date_ob.getMinutes();
    // current seconds
    let seconds = date_ob.getSeconds();
    let mili = ts % 1000;
    
    // Verify Message
    try{
        var err = aruba_telemetry_proto.Telemetry.verify(mesg);
    if (err){
        //console.log(err);
    }
    
    // Decode Message
    var reqBody = aruba_telemetry_proto.Telemetry.decode(mesg);

    // Keep track of message count while running
    msg_counter++;
    
    reqBody = reqBody.toJSON()

    // SB API TRACKING
    if (print_SBAPI_only) {
        if((reqBody.meta.nbTopic == "actionResults") || (reqBody.meta.nbTopic == "characteristics") || (reqBody.meta.nbTopic == "status")) {
            console.log(JSON.stringify(reqBody,null,2));
            console.log("MSG COUNT: " + msg_counter + " Timestamp: " + hours + ":" + minutes + ":" + seconds + ":" + mili);
            process.stdout.write("\n");
        }
        else {
            process.stdout.write("Message Counter: " + msg_counter + "\r");
        }
    }
    else {
        console.log(JSON.stringify(reqBody,null,2));
        console.log("MSG COUNT: " + msg_counter + " Timestamp: " + hours + ":" + minutes + ":" + seconds + ":" + mili);
        process.stdout.write("\n");
    }
    

  }catch (e){
    console.log(e);
  }
}

function toHexString(byteArray) {
  return Array.from(byteArray, function(byte) {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join('')
}
