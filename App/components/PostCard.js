import React, { useContext, useState } from 'react';
import { TouchableOpacity, Modal, View, Image, StyleSheet, Text, Avatar } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { windowWidth } from '../utils/Dimensions';
import { Neomorph } from 'react-native-neomorph-shadows';



const PostCard = ({ item, onPress }) => {


    return (
        <View style={styles.card}>

            <Neomorph
                darkShadowColor="#afe4" // <- set this
                lightShadowColor="#044e61" // <- this
                style={{
                    marginTop: 20,
                    shadowOpacity: 0.35, // <- and this or yours opacity
                    shadowRadius: 15,
                    borderRadius: 30,
                    backgroundColor: '#83BCCA',
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
                                    source={item.imageUrl}
                                />
                            </View>
                            <View style={{ flexDirection: 'column', flex: 4, marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.name}</Text>
                                <Text style={{ fontSize: 12 }}>Age: {item.age}</Text>
                                <Text style={{ fontSize: 12 }}>Sex: {item.sex}</Text>
                                <Text style={{ fontSize: 12 }}>Hospital: {item.hospitalName}</Text>



                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', margin: 10 }}>
                            <View style={{ flexDirection: 'column', marginTop: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '600' }}>BP:</Text>
                                <Text style={{ fontSize: 12 }}>{item.bloodPress}</Text>
                            </View>
                            <View style={{ flexDirection: 'column', margin: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '600' }}>Blood O2:</Text>
                                <Text style={{ fontSize: 12 }}>{item.bloodO2}</Text>
                            </View>
                            <View style={{ flexDirection: 'column', margin: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '600' }}>Temperature:</Text>
                                <Text style={{ fontSize: 12 }}>{item.temp}</Text>
                            </View>
                            <View style={{ flexDirection: 'column', margin: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '600' }}>Heart rate: </Text>
                                <Text style={{ fontSize: 12 }}>{item.heartRate}</Text>
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
        backgroundColor: '#83BCCA',
        shadowOffset: { height: 0, width: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        justifyContent: 'center',
        padding: 15
    },
    patientInfoWrapper: {
        flexDirection: 'row'
    }
})
