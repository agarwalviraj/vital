import React, { useContext, useState, useCallback, useEffect } from 'react';
import { TouchableOpacity, Modal, View, Image, StyleSheet, Text, Avatar } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { windowWidth } from '../utils/Dimensions';
import Blood from '../assets/svg/blood.svg';
import Boilingpoint from '../assets/svg/boilingpoint.svg';
import Temp from '../assets/svg/temp.svg';
import Heartrate from '../assets/svg/heartrate.svg';
import { sendMessage } from '../components/Notifications';
import PushNotification, { Importance } from "react-native-push-notification";
import { alertpatients } from '../patients/AlertPatients';
import { Neomorph } from 'react-native-neomorph-shadows';
import { useSocket } from "../contexts/socketContext";
import AsyncStorage from '@react-native-community/async-storage'



const AlertComponent = ({ item, onPress,onPress1,onPress2,onPress3,onPress4  }) => {
    const { _id, name, hospitalName, age, sex, desc, image, vitals } = item;
    const socket = useSocket();
    const [data, setData] = useState({
      BloodPressure: 0,
      BloodO2: 0,
      Temperature: 0,
      HeartRate: 0,
    });
   const updateData = useCallback(
      (newData, vitalName) => {
        const newObj = data;
        newObj[vitalName] = newData.value;
        setData((oldData) => ({ ...oldData, ...newObj }));
      },
      [setData]
    );
      useEffect(() => {
      if (socket) {
        if (vitals.includes("BloodPressure"))
          socket.on(`${name}BloodPressure`, (newData) =>
            updateData(newData, "BloodPressure")
          );
  
        if (vitals.includes("BloodO2"))
          socket.on(`${name}BloodO2`, (newData) =>
            updateData(newData, "BloodO2")
          );
  
        if (vitals.includes("Temperature"))
          socket.on(`${name}Temperature`, (newData) =>
            updateData(newData, "Temperature")
          );
  
        if (vitals.includes("HeartRate"))
          socket.on(`${name}HeartRate`, (newData) =>
            updateData(newData, "HeartRate")
          );
  
        // socket.on("TimBloodPressure", (newData) => updateData(newData));
      }
      return () => socket.off("TimBloodPressure");
    }, [socket, updateData]);

    const [channelId, setChannelId] = useState("");
    React.useEffect(() => {
        PushNotification.createChannel(
            {
                channelId: "channel-id", // (required)
                channelName: "My channel", // (required)
                channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
                playSound: true, // (optional) default: true
                soundName: "alert_notification.mp3", // (optional) See `soundName` parameter of `localNotification` function
                importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
                vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
            },
            (created) => {
                PushNotification.getChannels(function (channel_ids) {
                    

                    setChannelId(channel_ids)// ['channel_id_1']
                    console.log(channel_ids);
                    //AsyncStorage.setItem("channel_id",channel_ids);

                });
            } // (optional) callback returns whether the channel was created, false means it already existed.
        );
    }, [])



    // const sendMessage = () => {
    //     console.log("hi");
    //     try {
    //         PushNotification.localNotification({
    //             /* Android Only Properties */
    //             channelId: channelId[0], // (required) channelId, if the channel doesn't exist, notification will not trigger.

    //             title: "My Notification Title", // (optional)
    //             message: "My Notification Message", // (required)
    //             date: new Date(Date.now() + 1 * 1000),
    //             playSound: false, // (optional) default: true
    //             soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)

    //         })
    //         PushNotification.configure({
    //             // (optional) Called when Token is generated (iOS and Android)
    //             onRegister: function (token) {
    //                 console.log("TOKEN:", token);
    //             },
    //             onNotification: function (notification) {
    //                 console.log("NOTIFICATION:", notification);
    //                 // notification.finish(PushNotificationIOS.FetchResult.NoData);
    //             },
    //             permissions: {
    //                 alert: true,
    //                 badge: true,
    //                 sound: true,
    //             },
    //             popInitialNotification: true,
    //             requestPermissions: true,
    //         });
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };


    return (
        <View style={{ alignItems: 'center' }}>
            <View style={{ height: 50, width: windowWidth }}>

            </View>
            <TouchableOpacity onPress={onPress}>
            <Neomorph
                darkShadowColor="#afe4" // <- set this
                lightShadowColor="#044e61" // <- this
                style={styles.mainNeomorph}
            >
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.patientInfoWrapper}>
                        <View style={{ width: 80, height: 80, borderRadius: 40, marginRight: 10, flex: 1 }}>
                            <Image style={{ width: 80, height: 80, borderRadius: 40 }}
                                source={{uri:`https://hackvital.herokuapp.com/${item.name}.jpg`}}
                                
                                
                            />
                        </View>
                        <View style={{ flexDirection: 'column', flex: 4, marginLeft: 30 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 19,color:'#28527A',fontFamily:'Poppins-SemiBold' }}>{item.name}</Text>
                                <Text style={styles.text}>Age: {item.age}</Text>
                                <Text style={styles.text}>Sex: {item.sex}</Text>
                                <Text style={styles.text}>Hospital: {item.hospitalName}</Text>



                            </View>
                    </View>

                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginLeft:35 }}>
                    <View style={{ flexDirection: 'row', alignItems:'center', }}>
                        <View style={styles.cardBtn}>
                        <TouchableOpacity onPress={onPress1}>

                            <View style={{ flexDirection: 'column', padding: 15, alignItems: 'center' }}>

                                {/* <Boilingpoint size={30} /> */}
                                <Image style={{ height: 75, width: 80 }}
                                    source={require('../assets/images/bloodpressure.png')}
                                />
                                <View style={{ flexDirection: 'column', marginTop: 15,alignItems:'center' }}>
                                    <Text style={styles.text}>BP: </Text>
                                    <View style={{alignItems:'center'}}>
                                    <Text style={styles.subText}>{data.BloodPressure}</Text>
                                    </View>
                                </View>
                            </View>
                            </TouchableOpacity>
                        </View>
                   
                        <View style={styles.cardBtn}>
                        <TouchableOpacity onPress={ onPress2}>
                            <View style={{ flexDirection: 'column', padding: 15, alignItems: 'center' }}>
                                {/* <Blood size={30} /> */}
                                <Image style={{ height: 75, width: 85 }}
                                    source={require('../assets/images/blood.png')}
                                />
                                <View style={{ flexDirection: 'column', marginTop: 15 }}>
                                    <Text style={styles.text}>Blood O2: </Text>
                                    <View style={{alignItems:'center'}}>
                                    <Text style={styles.subText}>{data.BloodO2}</Text>
                                    </View>
                                </View>
                            </View>
                            </TouchableOpacity>

                        </View>
                    
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 35, }}>
                    
                        <View style={styles.cardBtn}>
                        <TouchableOpacity onPress={onPress3}>
                            <View style={{ flexDirection: 'column', padding: 15, alignItems: 'center' }}>

                                {/* <Temp size={30} /> */}
                                <Image style={{ height: 75, width: 90 }}
                                    source={require('../assets/images/temp.png')}
                                />
                                <View style={{ flexDirection: 'column', marginTop: 15 }}>
                                    <Text style={styles.text}>Temperature: </Text>
                                    <View style={{alignItems:'center'}}>
                                        <Text style={styles.subText}>{data.Temperature}</Text>
                                    </View>
                                </View>
                            </View>
                            </TouchableOpacity>
                        </View>
                    
                    
                        <View style={styles.cardBtn}>
                        <TouchableOpacity onPress={onPress4}>
                            <View style={{ flexDirection: 'column', padding: 15, alignItems: 'center' }}>
                                {/* <Heartrate size={30} /> */}
                                <Image style={{ height: 75, width: 80 }}
                                    source={require('../assets/images/heartrate.png')}
                                />
                                <View style={{ flexDirection: 'column', marginTop: 15 }}>
                                    <Text style={styles.text}>Heart Rate: </Text>
                                    <View style={{alignItems:'center'}}>
                                    <Text style={styles.subText}>{data.HeartRate}</Text>
                                    </View>
                                </View>
                            </View>
                            </TouchableOpacity>
                        </View>
                   

                    </View>
                </View>
                
            </Neomorph>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => sendMessage(channelId, item.name, item.bloodPress)}>
                    <Text>send message</Text>
                </TouchableOpacity> */}
            <View style={{ height: 50, width: windowWidth }}>

            </View>
        </View>
        
    )
}

export default AlertComponent

const styles = StyleSheet.create({
    card: {
        width: 0.85 * windowWidth,
        borderRadius: 6,
        elevation: 6,
        backgroundColor: '#CDE8ED',
        shadowOffset: { height: 0, width: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        justifyContent: 'center',
        padding: 15
    },
    patientInfoWrapper: {
        flexDirection: 'row'
    },
    cardBtn: {
        width: 0.34 * windowWidth,
        height: 0.34 * windowWidth,
        borderRadius: 6,
        elevation: 6,
        backgroundColor: '#CDE8ED',
        shadowOffset: { height: 0, width: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        marginTop: 35,
        marginRight: 30,
    },
    cardNeomorph: {
        marginTop: 20,
        shadowOpacity: 0.35, // <- and this or yours opacity
        shadowRadius: 15,
        borderRadius: 30,
        padding: 15,
        marginHorizontal: 10,
        backgroundColor: '#CDE8ED',
        width: 0.376 * windowWidth,
        height: 0.38 * windowWidth,
        justifyContent: 'center'
    },
    mainNeomorph: {

        marginTop: 20,
        shadowOpacity: 0.35, // <- and this or yours opacity
        shadowRadius: 15,
        borderRadius: 30,
        padding: 25,
        backgroundColor: '#CDE8ED',
        width: 0.91 * windowWidth,
        height: 500,

    },
    text:{
        fontSize: 14, 
        fontWeight: '600',
        color:'#28527A',
        fontFamily:'Poppins-SemiBold',
        fontWeight:'600',
      },
      subText:{
        fontSize: 14, 
        fontWeight: '600',
        color:'#28527A',
        fontFamily:'Poppins-Normal',
        fontWeight:'600',
      }
})
