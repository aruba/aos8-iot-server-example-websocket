#!/usr/bin/env python3

#import packages ("requests" needs to be installed in advance)
import os
import json
import time
import requests
import base64
import codecs


def menu_options():
    
    # print Option-Screen
    print(
        "\n\nWelcome to the Hue Control Program \n===============================\n\n===============================\nThis program controls a phillips hue bulb. Choose whatever you want to do:"
    )
    print('\n "On"  - to turn on  the connected bulb.')
    print(' "Off" - to turn off the connected bulb.')
    print("-----------")
    print(' "Bright" - to make the bulb shine brightly')
    print(' "Medium" - to make the bulb shine at a mid level of brightness')
    print(' "Dark" - to make the bulb darker')
    print("-----------")
    print(' "White" - to change the color to white')
    print(' "Orange" - to change the color to orange')
    print(' "Pink" - to change the color to pink')
    print(' "Red" - to change the color to red')
    print(' "Blue" - to change the color to blue')
    print(' "Green" - to change the color to green')
    print("-----------")
    print(' "Exit" - to leave this amazing program.')
    print("===============================")


# function sends jsons-Files
def send_sb_zb_msg(json_file):
    
    print(
        "\n\nTrying to sent "
        + json_file
        + " from actions-folder now. Checking the path ...\n"
    )

    # proof file-path of the json-file
    if os.path.isfile(json_file):  
        print("File exists! Starting to load the message ... \n")
    else:
        print(
            "File:"
            + json_file
            + " does not exist at the standard path .... please check the file at the given path.\n"
        )
        return

    # load content of json-message
    json_msg = json.load(open(json_file, "r"))  
    print(
        "The message which will be sent to the AP is ...: \n\n",
        json_msg,
        "\n\n Now starting to format the message ...",
    )

    # Format Receiver MAC
    json_msg["receiver"]["apMac"] = json_msg["receiver"]["apMac"].replace(":", "")
    json_msg["receiver"]["apMac"] = json_msg["receiver"]["apMac"].lower()
    json_msg["receiver"]["apMac"] = base64.b64encode(
        codecs.decode(json_msg["receiver"]["apMac"], "hex")
    ).decode("ascii")
    print("\n Formatted AP-Mac!")

    # Format Radio MAC
    json_msg["zigbee"]["radio_mac"] = json_msg["zigbee"]["radio_mac"].replace(":", "")
    json_msg["zigbee"]["radio_mac"] = json_msg["zigbee"]["radio_mac"].lower()
    json_msg["zigbee"]["radio_mac"] = base64.b64encode(
        codecs.decode(json_msg["zigbee"]["radio_mac"], "hex")
    ).decode("ascii")
    print("\n Formatted Radio-Mac!")

    # Format Device MAC
    json_msg["zigbee"]["send"]["mac"] = json_msg["zigbee"]["send"]["mac"].replace(
        ":", ""
    )
    json_msg["zigbee"]["send"]["mac"] = json_msg["zigbee"]["send"]["mac"].lower()
    json_msg["zigbee"]["send"]["mac"] = base64.b64encode(
        codecs.decode(json_msg["zigbee"]["send"]["mac"], "hex")
    ).decode("ascii")
    
    print("\n Formatted Device-Mac!")

    print(
        "\n\nThis is how the formated message looks like: \n\n",
        json_msg
    )
    
    #Send the Message to the SB_API
    r = requests.post("http://127.0.0.1:7443/sb_api", json=json_msg, verify=False)

    #Print Status-Message of the
    print("\n\nStatus Code: " + str(r.status_code))

    print("\nRestarting Programm ...")

    return


def main():

    #Call the related json-file dependend on the chosen option
    while 1:
        menu_options()
        user_input = input("\n Choose option: ")
        if "on" == str.lower(user_input):
            print("\nThe bulb will turn on!")
            send_sb_zb_msg("action_examples/zigbee/switch/sb_hue_turn_on.json")
        elif "off" == str.lower(user_input):
            print("\nThe bulb will turn off!")
            send_sb_zb_msg("action_examples/zigbee/switch/sb_hue_turn_off.json")
        elif "bright" == str.lower(user_input):
            print("\nThe bulb will go to its maximum brightness!")
            send_sb_zb_msg("action_examples/zigbee/brightness/sb_hue_bright.json")
        elif "medium" == str.lower(user_input):
            print("\nThe bulb will go to a medium level of brightness!")
            send_sb_zb_msg("action_examples/zigbee/brightness/sb_hue_medium_level.json")
        elif "dark" == str.lower(user_input):
            print("\nThe bulb will get darker!")
            send_sb_zb_msg("action_examples/zigbee/brightness/sb_hue_dark.json")
        elif "white" == str.lower(user_input):
            print("\nThe bulb will change to white!")
            send_sb_zb_msg("action_examples/zigbee/color/sb_hue_white.json")
        elif "pink" == str.lower(user_input):
            print("\nThe bulb will change to pink!")
            send_sb_zb_msg("action_examples/zigbee/color/sb_hue_pink.json")
        elif "blue" == str.lower(user_input):
            print("\nThe bulb will change to blue!")
            send_sb_zb_msg("action_examples/zigbee/color/sb_hue_blue.json")
        elif "orange" == str.lower(user_input):
            print("\nThe bulb will change to orange!")
            send_sb_zb_msg("action_examples/zigbee/color/sb_hue_orange.json")
        elif "green" == str.lower(user_input):
            print("\nThe bulb will change to green!")
            send_sb_zb_msg("action_examples/zigbee/color/sb_hue_green.json")
        elif "red" == str.lower(user_input):
            print("\nThe bulb will change to red!")
            send_sb_zb_msg("action_examples/zigbee/color/sb_hue_red.json")
        elif "exit" == str.lower(user_input):
            print("\n Sad that you want to leave. See you soon! \n")
            time.sleep(0.8)
            print("\n Exiting ....\n")
            exit(0)
        else:
            print(
                "\nInvalid Option "
                + str.lower(user_input)
                + ". Please choose options 1 or 2 or option 3 to exit the programm. \n"
            )


if __name__ == "__main__":
    main()
