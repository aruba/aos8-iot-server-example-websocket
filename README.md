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

Please follow the Documentation in the `Documentation` folder for information on how to configure your `iot-transport-profile`

## AOS Version Differences

We recommend always using the latest available patch release for your specific version

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

## Using the Southbound API Send files

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

##### Setup your Aruba AP/Controller

There are a few settings you need to change on the Aruba Access Point. You can change all of them the easiest via the Webinterface (-just open the IP of your AP in a browser-) or if you prefer via ssh. For changing them in the web interface please go to `"Services"` and scroll down to `"IoT"`.

1. First you need to set a `IoT-Radio-Profile`. This radio needs to use `ZigBee` as Radio mode and needs to act as "Coordinator". The channel can be set manually or in an automatic mode. Set the channel to 11. 
If you want to use another channel, that one can work as well but it has to be set on all instances and supported by the devices. Phillips Hue bulbs are said to support channels 11,15,20 and 25.

2. You also have to set up a `ZigBee Service profile`. Please enable "Security", set "PAN ID" on automatic and always allow new devices to join.
You don't have to always allow new devices to join but that way its the easiest to avoid connecting problems.

3. The `ZigBee-Socket-Device-Profile` configures which Endpoints, Clusters and Profiles are allowed. It is comparable to a kind of firewall and have to be set up as shown below:

```
Source Endpoint  Destination Endpoint  Cluster ID  Profile ID  Direction
---------------  --------------------  ----------  ----------  ---------
232              11                    0006        0104        outbound
11               232                   0006        0104        inbound
232              11                    0300        0104        outbound
232              11                    0008        0104        outbound
```

1. Last but not least you have to enable a `Transport Stream` and set the IP corresponding to your Server. If you use the Demo Server described in this repository use Port 7443 like that `"ws://<yourIP>:7443/test"`. In this Transport Stream Profile you have to select the Socket Device you created above.

##### Modify the .json-Files in the 'actions-examples/zigbee'-Folder

1. Set the `"access_token"` to the right Token, which is set up on the Access Point. 
2. The MAC-Address of your Access Point (ap) needs to be set as `"apMac"`. Usually you can find this information on the outside of the AP.
3. Choose which radio you want to use. Make sure the ZigBee-Device is connected to this radio. You can view your radios by connecting to the AP via ssh and enter `"show ap debug zigbee radio-table"`. Enter the right MAC-address as `"radio_mac"`.
4. After `"mac"` you need the fill in the MAC-address of the ZigBee-Device (e.g. Phillips Hue bulb). If the device is connected to your AP, you can easily use `"show ap debug zigbee client-table"` to get this information.

The payload only supports Phillips Hue bulbs!

##### Use the ZigBee-Options

1. The server needs to be running first and than you have to start the python script:

``` 
$ python3 sender.py3
```

2. Then you should see the following options and can choose what to do by entering the keyword:


```
Welcome to the Hue Control Program 
===============================

===============================
This program controls a phillips hue bulb. Choose whatever you want to do:

 "On"  - to turn on  the connected bulb.
 "Off" - to turn off the connected bulb.
-----------
 "Bright" - to make the bulb shine brigxhtly
 "Medium" - to make the bulb shine at a mid level of brightness
 "Dark" - to make the bulb darker
-----------
 "White" - to change the color to white
 "Orange" - to change the color to orange
 "Pink" - to change the color to pink
 "Red" - to change the color to red
 "Blue" - to change the color to blue
 "Green" - to change the color to green
-----------
 "Exit" - to leave this amazing program.
===============================

 Choose option:
 ```

3. If the command worked you should see two ACK packets on the server. Have fun controlling the bulb!

##### Create your own ZigBee-Payload

If you don't want to use the pre-configured payloads shown above or support other ZigBee-Devices for Southbound-Options you can create your own json-Files. The easies way to get the necessary information is to use the IoT-Sniffer and "watch" how other gateways (as the Hue-Bridge) work. Usually you will have to change the Cluster-ID - pay attention to keep the format which is shown in the other files. The payload seen on the sniffer usually will be in hex but the payload in the json has to be comma-separated integers from 0 to 255 in square brackets which later on will be calculated to hex-values.
The first value is always the Frame Control Field, while the second one is the Sequence Number. The third one is the command itself and all the values after are payload. The meaning of this payload depends on the Cluster and the Command. For On/Off (Cluster 6) for example there is just a 0 for "OFF" and a 1 for "ON". For the Level Control (Cluster 8) the payload stands for the level of brightness (0 - 255). These values are than followed by a Transition time for example, which means the time, the bulb takes to go to the new settings.
