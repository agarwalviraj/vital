import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PushNotification, { Importance } from "react-native-push-notification";


export function sendMessage(id, notifName, notifDesc) {

    console.log("hi", id);
    try {
        PushNotification.localNotification({
            /* Android Only Properties */
            channelId: id[0], // (required) channelId, if the channel doesn't exist, notification will not trigger.

            title: notifName, // (optional)
            message: `Blood pressure: ${notifDesc}`, // (required)
            date: new Date(Date.now() + 1 * 1000),
            playSound: false, // (optional) default: true
            soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)

        })
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {
                console.log("TOKEN:", token);
            },
            onNotification: function (notification) {
                console.log("NOTIFICATION:", notification);
                // notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },
            popInitialNotification: true,
            requestPermissions: true,
        });
    } catch (e) {
        console.log(e);
    }
};





