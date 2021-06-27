import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Card, TextInput, Image, DevSettings, Platform } from 'react-native';
import { windowWidth, windowHeight } from '../utils/Dimensions';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import Axios from 'axios'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage'
import { Globalstyles } from '../styles/globalStyles';
import {alertpatients1} from '../patients/AlertPatients1';
import messaging from '@react-native-firebase/messaging';

// I am using Device info
import firebase from '../utils/firebase';


const LoginScreen = ({ navigation }) => {
    const [state, setState] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [token, setToken] = useState();

    useEffect(() => {
        AsyncStorage.getItem('token').then(value => {
            setState(value);
            //console.log('token',value);
        });
        console.log(navigation);
        if(state!=null){
            navigation.reset({ routes: [{ name: 'Home' }] });
        }
        
       

        messaging()
        .getToken()
        .then(token => {
          console.log('fcmtoken',token);
          setToken(token);
        });
  
      // If using other push notification providers (ie Amazon SNS, etc)
      // you may need to get the APNs token instead for iOS:
      // if(Platform.OS == 'ios') { messaging().getAPNSToken().then(token => { return saveTokenToDatabase(token); }); }
  
      // Listen to whether the token changes
      
    },[])

    

    const login = async (email, password) => {
        const data = {
            emailOrUsername: email,
            password: password,
            fcmtoken: token
        }
        console.log(data);


        try {
            const response = await axios.post(
                'https://hackvital.herokuapp.com/user/login',
                data
            );
            //console.log(response)
            AsyncStorage.setItem("token", response.data.token)
            AsyncStorage.setItem("email",email);
            console.log(email);
            
            navigation.reset({ routes: [{ name: 'Home' }] });
            // DevSettings.reload();




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

        <View style={Globalstyles.container}>


            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#CDE8ED', alignItems: 'center' }}>

                <View style={styles.card}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 22, color: '#28527a', margin: 25 }}>Login Into Vital+</Text>
                    <FormInput
                        labelValue={email}
                        onChangeText={(userEmail) => setEmail(userEmail)}
                        placeholderText="Email"
                        iconType="user-tie"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormInput
                        labelValue={password}
                        onChangeText={(userPassword) => setPassword(userPassword)}
                        placeholderText="Password"
                        iconType="key"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={{ borderRadius: 11, elevation: 6, paddingHorizontal: 9, paddingVertical: 3, backgroundColor: '#CDE8ED', marginTop: 20 }}
                        onPress={() => {
                            login(email, password)
                            //navigation.navigate('Signup')
                        }}>
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
        backgroundColor: '#CDE8ED',
        shadowOffset: { height: 0, width: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25
    }
})
