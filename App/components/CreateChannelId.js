import React, { useContext, useState, useCallback, useEffect } from 'react';
import { sendMessage } from '../components/Notifications';
import PushNotification, { Importance } from "react-native-push-notification";
import { StyleSheet, Text, View } from 'react-native'

const CreateChannelId = () => {
    

    let channelId;
        PushNotification.createChannel(
            
            {
                channelId: "channel-id", // (required)
                channelName: "My channel", // (required)
                channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
                playSound: false, // (optional) default: true
                soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
                importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
                vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
            },
            (created) => {
                PushNotification.getChannels(function (channel_ids) {
                    channelId = channel_ids;
                    //console.log(channel_ids)

                    //(channel_ids)// ['channel_id_1']
                    //AsyncStorage.setItem("channel_id", channel_ids);


                });
            } // (optional) callback returns whether the channel was created, false means it already existed.
        );
        //console.log(channelId);
        return channelId;

}

export default CreateChannelId;

const styles = StyleSheet.create({})
