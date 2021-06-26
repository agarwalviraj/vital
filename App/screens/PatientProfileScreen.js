import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { windowWidth } from '../utils/Dimensions';
import Blood from '../assets/svg/blood.svg';
import Boilingpoint from '../assets/svg/boilingpoint.svg';
import Temp from '../assets/svg/temp.svg';
import Heartrate from '../assets/svg/heartrate.svg';
import { Globalstyles } from '../styles/globalStyles';


const PatientProfileScreen = ({ route, navigation }) => {
    return (
        <ScrollView>
            <View style={Globalstyles.container}>
                <View style={{ height: 120, width: 120, borderRadius: 60, marginTop: 45 }}>
                    <Image style={{ width: 120, height: 120, borderRadius: 60 }}
                        source={route.params.data.imageUrl}
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
                <View style={{ flexDirection: 'column', alignItems:'center',justifyContent:'center',marginLeft:20 }}>
                    <View style={{ flexDirection: 'row',alignItems:'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('BpScreen')}>
                            <View style={styles.cardBtn}>
                                <View style={{ flexDirection: 'column', padding: 15, alignItems: 'center' }}>

                                    <Boilingpoint size={30} />
                                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                        <Text style={styles.text}>BP: </Text>
                                        <Text style={styles.subText}>{route.params.data.bloodPress}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.cardBtn}>
                            <View style={{ flexDirection: 'column', padding: 15, alignItems: 'center' }}>
                                <Blood size={30} />
                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                    <Text style={styles.text}>Blood O2: </Text>
                                    <Text style={styles.subText}>{route.params.data.bloodO2}</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 35, alignItems:'center' }}>
                        <View style={styles.cardBtn}>
                            <View style={{ flexDirection: 'column', padding: 15, alignItems: 'center' }}>

                                <Temp size={30} />
                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                    <Text style={styles.text}>Temperature: </Text>
                                    <Text style={styles.subText}>{route.params.data.temp}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.cardBtn}>
                            <View style={{ flexDirection: 'column', padding: 15, alignItems: 'center' }}>
                                <Heartrate size={30} />
                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                    <Text style={styles.text}>Heart Rate: </Text>
                                    <Text style={styles.subText}>{route.params.data.heartRate}</Text>
                                </View>
                            </View>
                        </View>

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
        width: 0.4 * windowWidth,
        height: 0.4 * windowWidth,
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
    text: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 13,
    },
    subText: {
        fontFamily: 'Poppins-Normal',
        fontSize: 13,
    }
})
