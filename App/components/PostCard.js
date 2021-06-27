import React, { useContext, useState, useCallback, useEffect } from 'react';
import { TouchableOpacity, Modal, View, Image, StyleSheet, Text, Avatar } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { windowWidth } from '../utils/Dimensions';
import { Neomorph } from 'react-native-neomorph-shadows';
import { useSocket } from "../contexts/socketContext";



const PostCard = ({ item, onPress }) => {
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
    return (
        <View style={styles.card}>

            <Neomorph
                darkShadowColor="#044e61" // <- set this
                lightShadowColor="#afe4" // <- this
                style={{
                    marginTop: 20,
                    shadowOpacity: 0.48, // <- and this or yours opacity
                    shadowRadius: 5,
                    borderRadius: 5,
                    shadowOffset:{height:5,
                    width:5,},
                    backgroundColor: '#CDE8ED',
                    width: 0.89 * windowWidth,
                    height: 200,
                    padding: 15
                }}
            >

                <TouchableOpacity onPress={onPress}>
                    <View style={{ flexDirection: 'column' }}>
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
                        <View style={{ flexDirection: 'row', margin: 10, marginLeft:10 }}>
                            <View style={{ flexDirection: 'column', marginTop: 10,alignItems:'center', }}>
                                <Text style={styles.text}>BP:</Text>
                                <Text style={styles.subText}>{data.BloodPressure}</Text>
                            </View>
                            <View style={{ flexDirection: 'column', margin: 10, marginLeft:20 }}>
                                <Text style={styles.text}>Blood O2:</Text>
                                <Text style={styles.subText}>{data.BloodO2}</Text>
                            </View>
                            <View style={{ flexDirection: 'column', margin: 10 }}>
                                <Text style={styles.text}>Temperature:</Text>
                                <Text style={styles.subText}>{data.Temperature}</Text>
                            </View>
                            <View style={{ flexDirection: 'column', margin: 10 }}>
                                <Text style={styles.text}>Heart rate: </Text>
                                <Text style={styles.subText}>{data.HeartRate}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Neomorph>

        </View>
    );
};

export default PostCard;

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
        padding: 15
    },
    patientInfoWrapper: {
        flexDirection: 'row'
    },
    text:{
      fontSize: 14, 
      fontWeight: '600',
      color:'#28527A',
      fontFamily:'Poppins-SemiBold',
      fontWeight:'600',
    },
    subText:{
      fontSize: 12, 
      fontWeight: '600',
      color:'#28527A',
      fontFamily:'Poppins-Normal',
      fontWeight:'600',
    }
})
