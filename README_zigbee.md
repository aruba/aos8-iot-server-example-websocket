# Using the ZigBee Southbound API

## Setup your Aruba AP/Controller

There are a few settings you need to change on the Aruba Access Point. You can change all of them the easiest via the Webinterface (-just open the IP of your AP in a browser-) or if you prefer via ssh.

<strong>Note</strong>: In the Instant WebUI, the IoT configuration can be found under `"Services"`. Scroll down to the `"IoT"` section.

<strong>Note</strong>: In ArubaOS MCR WebUI, the IoT configuration can be found under `"Configuration"`->`"IoT"`.

1. First you need to set a `IoT-Radio-Profile`. This radio needs to use `ZigBee` as Radio mode and needs to act as "Coordinator". The channel can be set manually (e.g. 11) or in auto mode. If you want to use another channel, that works as well but it has to be set on all instances and supported by the devices. Philips Hue bulbs are said to support channels 11,15,20 and 25.

2. You also have to set up a `ZigBee Service profile`. Please enable "Security", set "PAN ID" on automatic and always allow new devices to join. Users don't have to always allow new devices to join but this helps avoid connection problems when trying out the SouthBound API.

3. The `ZigBee-Socket-Device-Profile` configures which Endpoints, Clusters and Profiles are allowed. It can be configured as follows:

```
Source Endpoint  Destination Endpoint  Cluster ID  Profile ID  Direction
---------------  --------------------  ----------  ----------  ---------
232              11                    0006        0104        outbound
11               232                   0006        0104        inbound
232              11                    0300        0104        outbound
232              11                    0008        0104        outbound
```

4. Last but not least you have to enable the Zigbee Data `Transport Service` in the IoT Transport Profile. If you used the demo server described in this repository use port 7443 as follows: `"ws://<yourIP>:7443/test"`. In this Transport Profile you have to select the Socket Device you created above.

## Modify the .json-Files in the 'actions-examples/zigbee'-Folder

1. Set the `"access_token"` to the right Token, which is set up on the Access Point.
2. The MAC-Address of your Access Point (ap) needs to be set as `"apMac"`. Usually you can find this information on the outside of the AP.
3. Choose which radio you want to use. Make sure the ZigBee-Device is connected to this radio. You can view your radios by connecting to the AP via ssh and enter `"show ap debug zigbee radio-table"`. Enter the right MAC-address as `"radio_mac"`.
4. After `"mac"` you need the fill in the MAC-address of the ZigBee-Device (e.g. Philips Hue bulb). If the device is connected to your AP, you can easily use `"show ap debug zigbee client-table"` to get this information.

The payload only supports Philips Hue bulbs!

## Use the ZigBee-Options

1. The server needs to be running first and than you have to start the python script:

```
$ python3 sender.py3
```

2. Then you should see the following options and can choose what to do by entering the keyword:

```
Welcome to the Hue Control Program
===============================

===============================
This program controls a Philips hue bulb. Choose whatever you want to do:

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

## Create your own ZigBee-Payload

If you don't want to use the pre-configured payloads shown above or support other ZigBee-Devices for Southbound-Options you can create your own json-Files. The easies way to get the necessary information is to use the IoT-Sniffer and "watch" how other gateways (as the Hue-Bridge) work. Usually you will have to change the Cluster-ID - pay attention to keep the format which is shown in the other files. The payload seen on the sniffer usually will be in hex but the payload in the json has to be comma-separated integers from 0 to 255 in square brackets which later on will be calculated to hex-values.
The first value is always the Frame Control Field, while the second one is the Sequence Number. The third one is the command itself and all the values after are payload. The meaning of this payload depends on the Cluster and the Command. For On/Off (Cluster 6) for example there is just a 0 for "OFF" and a 1 for "ON". For the Level Control (Cluster 8) the payload stands for the level of brightness (0 - 255). These values are than followed by a Transition time for example, which means the time, the bulb takes to go to the new settings.
