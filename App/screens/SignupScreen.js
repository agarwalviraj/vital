import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Card, TextInput, Image, DevSettings } from 'react-native';
import { windowWidth, windowHeight } from '../utils/Dimensions';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import Axios from 'axios'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage'
import { Globalstyles } from '../styles/globalStyles';

const SignupScreen = () => {
    const [email, setEmail] = useState();
    const [userName, setUserName] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [hospname, setHospname] = useState();
    const [specialization, setSpecialization] = useState();
    const [experience, setExperience] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    return (
        <View style={Globalstyles.container}>
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#CDE8ED', alignItems: 'center' }}>

                <View style={styles.card}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 22, color: '#28527a', margin: 25 }}>Register Into Vital+</Text>

                    <FormInput
                        labelValue={name}
                        onChangeText={(name) => setName(name)}
                        placeholderText="Name"
                        iconType="user-tie"
                        Icon="AntDesign"
                        keyboardType="default"
                        autoCapitalize='words'
                        autoCorrect={false}
                    />
                    <FormInput
                        labelValue={userName}
                        onChangeText={(userName) => setUserName(userName)}
                        placeholderText="username"
                        Icon="AntDesign"
                        iconType="user-tag"
                        keyboardType="default"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormInput
                        labelValue={email}
                        onChangeText={(userEmail) => setEmail(userEmail)}
                        placeholderText="Email"
                        Icon="AntDesign"
                        iconType="at"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormInput
                        labelValue={password}
                        onChangeText={(userPassword) => setPassword(userPassword)}
                        placeholderText="Password"
                        Icon="AntDesign"
                        iconType="key"
                        secureTextEntry={true}
                    />
                    <FormInput
                        labelValue={confirmPassword}
                        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                        placeholderText="Confirm Password"
                        Icon="AntDesign"
                        iconType="key"
                        secureTextEntry={true}
                    />
                    <FormInput
                        labelValue={hospname}
                        onChangeText={(hospname) => setHospname(hospname)}
                        placeholderText="Hospital Name"
                        iconType="first-aid"
                        Icon="AntDesign"
                        keyboardType="Default"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <FormInput
                        labelValue={specialization}
                        onChangeText={(specialization) => setSpecialization(specialization)}
                        placeholderText="Specialization"
                        iconType="briefcase"
                        Icon="AntDesign"
                        keyboardType="Default"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <FormInput
                        labelValue={experience}
                        onChangeText={(experience) => setExperience(experience)}
                        placeholderText="Experience"
                        iconType="briefcase"
                        Icon="AntDesign"
                        keyboardType="Default"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TouchableOpacity style={{ borderRadius: 11, elevation: 6, paddingHorizontal: 9, paddingVertical: 3, backgroundColor: '#CDE8ED', marginTop: 20 }}
                        onPress={() => {
                            //  login(email, password) 
                            navigation.navigate('Signup')
                        }}>
                        <Text style={{ color: '#28527A', fontWeight: '600', fontSize: 16, fontFamily: 'Poppins-SemiBold', fontWeight: '600' }}>Submit</Text>
                    </TouchableOpacity>




                </View>



            </View>
        </View>
    )
}

export default SignupScreen;

const styles = StyleSheet.create({

    card: {
        width: 0.8 * windowWidth,
        borderRadius: 6,
        elevation: 6,
        backgroundColor: '#CDE8ED',
        shadowOffset: { height: 0, width: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25
    }
})
