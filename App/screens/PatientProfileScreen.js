import React, { useContext, useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { windowWidth } from '../utils/Dimensions';
import Blood from '../assets/svg/blood.svg';
import Boilingpoint from '../assets/svg/boilingpoint.svg';
import BPlogo from '../assets/svg/boilingpoint.svg';
import Temp from '../assets/svg/temp.svg';
import Heartrate from '../assets/svg/heartrate.svg';
import { Globalstyles } from '../styles/globalStyles';
import { useSocket } from "../contexts/socketContext";


const PatientProfileScreen = ({ route, navigation }) => {
    const { _id, name, hospitalName, age, sex, desc, image, vitals } = route.params.data;
 const socket = useSocket();
 const [name1, setName1] = useState('');
  const [data, setData] = useState({
    BloodPressure: 0,
    BloodO2: 0,
    Temperature: 0,
    HeartRate: 0,
  });

function bptext(data){
    var textcolor;
    
    if(180>120){
        textcolor='white';
    }
    else{
        textcolor ='black';
    }
    return textcolor;
}
  
  
  

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
        setName1(name);
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
    return () => socket.off(`${name}BloodPressure`);
  }, [socket, updateData]);
    return (
        <ScrollView>
            <View style={Globalstyles.container}>
                <View style={{ height: 120, width: 120, borderRadius: 60, marginTop: 45 }}>
                    <Image style={{ width: 120, height: 120, borderRadius: 60 }}
                                    source={{uri:`https://hackvital.herokuapp.com/${route.params.data.name}.jpg`}}
                                    />
                </View>
                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 35 }}>{route.params.data.name}</Text>

                <View style={styles.card}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontFamily: 'Poppins-MediumItalic', fontSize: 15 }}>Age: {route.params.data.age}</Text>
                            <Text style={{ fontFamily: 'Poppins-MediumItalic', marginLeft: 0.45 * windowWidth, fontSize: 15 }}>Sex: {route.params.data.sex}</Text>

                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBoldItalic', fontSize: 16, margin: 15, marginRight: 0, marginBottom: 0 }}>Hospital Name:  </Text>
                            <Text style={{ fontFamily: 'Poppins-Normal', fontSize: 16, flexWrap: 'wrap', flexShrink: 1, margin: 15, marginLeft: 0, marginBottom: 0 }}>{route.params.data.hospitalName}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBoldItalic', fontSize: 16, margin: 15, marginRight: 0 }}>Description:  </Text>
                            <Text style={{ fontFamily: 'Poppins-Normal', fontSize: 16, flexWrap: 'wrap', flexShrink: 1, margin: 15, marginLeft: 0 }}>{route.params.data.description}</Text>
                        </View>

                    </View>
                </View>
                <View style={{ flexDirection: 'column', alignItems:'center',justifyContent:'center',marginLeft:20,marginTop:50 }}>
                    <View style={{ flexDirection: 'row',alignItems:'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('BpScreen',{name:name1})}>
                            {/* {data.BloodPressure>120 ?  <View style={styles.cardBtn}> :  <View style={styles.cardBtn}>} */}
                           <View style={{
                               
                                width: 0.35 * windowWidth,
                                height: 0.35 * windowWidth,
                                borderRadius: 6,
                                elevation: 6,
                                backgroundColor:data.BloodPressure>120 ? "red":"#CDE8ED",
                                // backgroundColor: '#CDE8ED',
                                shadowOffset: { height: 0, width: 2 },
                                shadowColor: 'black',
                                shadowOpacity: 0.2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 0,
                                marginTop: 10,
                                marginRight: 30,
                              
                           }}>
                                <View style={{ flexDirection: 'column', padding: 15, alignItems: 'center' }}>

                                    <BPlogo/>
                                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                        <Text style={styles.text,bptext(data.BloodPressure)}>BP: </Text>
                                        <Text style={styles.subText}>{data.BloodPressure}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('BloodScreen',{name:name1})}>
                        <View style={{
                            
                               
                                width: 0.35 * windowWidth,
                                height: 0.35 * windowWidth,
                                borderRadius: 6,
                                elevation: 6,
                                backgroundColor:!(data.BloodO2>95 && data.BloodO2<100) ? "red":"#CDE8ED",
                                // backgroundColor: '#CDE8ED',
                                shadowOffset: { height: 0, width: 2 },
                                shadowColor: 'black',
                                shadowOpacity: 0.2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 0,
                                marginTop: 10,
                                marginRight: 30,
                              
                           
                        }}>
                            <View style={{ flexDirection: 'column', padding: 15, alignItems: 'center' }}>
                                <Blood size={30} />
                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                    <Text style={styles.text}>Blood O2: </Text>
                                    <Text style={styles.subText}>{data.BloodO2}</Text>
                                </View>
                            </View>
                        </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 35, left:-22 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('TemperatureScreen',{name:name1})}>
                        <View style={{
                            width: 0.35 * windowWidth,
                            height: 0.35 * windowWidth,
                            borderRadius: 6,
                            elevation: 6,
                            backgroundColor:!(data.Temperature>97 && data.Temperature<=100) ? "red":"#CDE8ED",
                            // backgroundColor: '#CDE8ED',
                            shadowOffset: { height: 0, width: 2 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 0,
                            marginTop: 10,
                            marginRight: 20,
                            
                        }}>
                            <View style={{ flexDirection: 'column', padding: 15, alignItems: 'center' }}>

                                <Temp size={30} />
                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                    <Text style={styles.text}>Temperature: </Text>
                                    <Text style={styles.subText}>{data.Temperature}</Text>
                                </View>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('HeartrateScreen',{name:name1})}>
                        <View style={{
                             width: 0.35 * windowWidth,
                             height: 0.35 * windowWidth,
                             borderRadius: 6,
                             elevation: 6,
                             backgroundColor:!(data.HeartRate>60 && data.HeartRate<=110) ? "red":"#CDE8ED",
                             // backgroundColor: '#CDE8ED',
                             shadowOffset: { height: 0, width: 2 },
                             shadowColor: 'black',
                             shadowOpacity: 0.2,
                             justifyContent: 'center',
                             alignItems: 'center',
                             padding: 0,
                             marginTop: 10,
                            right:-12,
                        }}>
                            <View style={{ flexDirection: 'column', padding: 15, alignItems: 'center' }}>
                                <Heartrate size={30} />
                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                    <Text style={styles.text}>Heart Rate: </Text>
                                    <Text style={styles.subText}>{data.HeartRate}</Text>
                                </View>
                            </View>
                        </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default PatientProfileScreen

const styles = StyleSheet.create({

    card: {
        width: 0.97 * windowWidth,
        borderRadius: 6,
        elevation: 6,
        backgroundColor: '#CDE8ED',
        shadowOffset: { height: 0, width: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        justifyContent: 'center',
        padding: 25
    },
    cardBtn: {
       
    },
    text: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 13,
    },
    subText: {
        fontFamily: 'Poppins-Normal',
        fontSize: 13,
    }
})
