import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Card, TextInput, Image, DevSettings } from 'react-native';
import { windowWidth, windowHeight } from '../utils/Dimensions';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import Axios from 'axios'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();



    const login = async (email, password) => {
        const data = {
            emailOrUsername: email,
            password: password
        }
        console.log(data);


        try {
            const response = await axios.post(
                'https://hackvital.herokuapp.com/user/login',
                data
            );
            console.log(response)
            AsyncStorage.setItem("token", response.data.token)
            DevSettings.reload();




        } catch (err) {
            console.log(err);
        }

    }
    // const response = await Axios.post('https://hackvital.herokuapp.com/login', { email, password });
    // const token = await AsyncStorage.getItem('token');
    // if (!token) {
    //     AsyncStorage.setItem("token", response.token);
    //     console.log(response.token);



    // const register= () => {
    //     Axios.get('https://hackvital.herokuapp.com/login')
    //         .then(res => {
    //             setState(res.data);
    //             setLoading(false)
    //         })
    // }

    return (

        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#83BCCA' }}>
            <View style={{ top: 0.015 * windowHeight, left: 0.1 * windowWidth }}>
                <Image
                    source={require('../assets/images/Appicon.png')} />
            </View>

            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#83BCCA', alignItems: 'center' }}>

                <View style={styles.card}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 22, color: '#28527a', margin: 25 }}>Login Into Vital+</Text>
                    <FormInput
                        labelValue={email}
                        onChangeText={(userEmail) => setEmail(userEmail)}
                        placeholderText="Email"
                        iconType="user"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormInput
                        labelValue={password}
                        onChangeText={(userPassword) => setPassword(userPassword)}
                        placeholderText="Password"
                        iconType="lock"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={{ borderRadius: 11, elevation: 6, paddingHorizontal: 9, paddingVertical: 3, backgroundColor: '#83BCCA', marginTop: 20 }}
                        onPress={() => { login(email, password) }}>
                        <Text style={{ color: '#28527A', fontWeight: '600', fontSize: 16, fontFamily: 'Poppins-SemiBold', fontWeight: '600' }}>Submit</Text>
                    </TouchableOpacity>




                </View>



            </View>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    card: {
        width: 0.8 * windowWidth,
        borderRadius: 6,
        elevation: 6,
        backgroundColor: '#83BCCA',
        shadowOffset: { height: 0, width: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25
    }
})
