# Aruba IoT WebSocket Example Code

The repository contains documentation and example code to help you get started using the ArubaOS (AOS) IoT WebSocket interface. The repository contents are to demonstrate the working of the AOS IoT WebSocket interface when an IoT Transport Profile is configured on the mobility controller(s) and Instant APs. It is meant to help prove out a proof of concept, and not to be a production ready system. Please keep that in mind. The WebSocket server example is written in NodeJS, with accompaning python files for sending actions. Sample Python scripts are written in Python 2.7 and Python 3.9.

## Requirements

1. Linux Ubuntu 18.04 or higher
2. Make sure Python 2.7 or higher (3.9) is installed. This is required if you want to send BLE actions or serial data in the southbound direction from the server.

## Installation

Install NodeJS and npm

``` text
$ sudo apt install nodejs
$ sudo apt install npm
```

Download this repository, and put the two folders `example_server` and `proto_files` on your machine. Navigate to the `example server` and install the node packages

``` text
$ npm install
```

Install the required python packages

``` text
$ pip install -r requirements.txt
```

==============================

## Usage

The server runs at the following URL on your machine, on port 7443: `ws://<ip_addr>:7443/test`. At this time the access token is not validated, so you may use any random token you prefer.

##### To run the server

``` text
$ node aruba-ws-test-endpoint.js
```

##### To setup your Aruba AP/Controller

On your controller/Instant setup, configure the IoT radio profile, Zigbee Service Profile and IoT transport profile as needed to enable communication using the WebSocket interface. Please refer to the IoT Basic Setup Guide in the `Documentation` folder or the AOS/Instant User Guide for more details regarding configuration.

## AOS Version Differences

We recommend always using the latest available patch release for your specific version

### 8.9.x.y
* Added BLE company identifier information in the periodic Telemetry topic

### 8.8.x.y
* Added new NB topic called ApHealthUpdate containing info about the onboard and USB radios
* Added support for different BLE security mechanisms

### 8.7.1.x

* Added support for next generation Wi-fi 6 APs (AP-5xx) for the Southbound API
* Added serial data for serial USB devices

### 8.6.0.x

* Supports Southbound API for BLE devices on AP-3xx
* Added BLE data forwarding for specfic device classes
* Supports Telemetry messages through WebSocket

## Known Limitations

* When using this example code to send messages in the southbound direction with multiple WebSocket connections, the messages are sent out of the last WebSocket connection over which a message was received. We recommend only establishing a single WebSocket connection if you want to use the SouthBound API features.

## Using the BLE and Serial Data Southbound API

The Southbound API example code here is just included for testing and quick proof of concepts, it can and should be improved upon. Files ending with .py3 extension are Python3.9 compatible. Example SouthBound action files are located in `example_server/action_examples`

##### Usage

Call the python file, then select the file you want to send. This will trigger a message to be sent in the southbound direction from the server to Controller/AP

``` text
$ ./sbapi_send.py3

===============================
Choose one of the following SouthBound options:
 1. Exit
-----------
 2. Send SerialData CO_RD Enocean message
 3. Send custom SerialData JSON via file
-----------
 4. Send BLE Action sb_action_set_1.json
 5. Send BLE Action connect.json
 6. Send BLE Action disconnect.json
 7. Send custom BLE JSON via file
===============================
Choose option:
```

## Using the ZigBee Southbound API

The Zigbee Southbound API is described in more detail [here](./README_zigbee.md).