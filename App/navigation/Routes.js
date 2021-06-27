import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import AuthStack from './AuthStack';
import AppStack from "./AppStack";
import Axios from 'axios'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
const Routes = ({navigation}) => {
    const [state, setState] = useState();

    useEffect(() => {
        AsyncStorage.getItem('token').then(value => {
            setState(value);
            console.log(value);
        });
    });

    // const { user, setUser } = useContext(AuthContext);
    // const [initializing, setInitializing] = useState(true);

    // const onAuthStateChanged = (user) => {
    //     setUser(user);
    //     if (initializing) setInitializing(false);
    // }

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; // unsubscribe on unmount
    // }, []);

    // if (initializing) return null;

    return (
        <NavigationContainer>
            {/* <AppStack /> */}
            {/* <AuthStack /> */}
            {state ? <AppStack 
            onPresstog ={() => navigation.toggleDrawer()}
            onPressalert = {() => navigation.navigate('Alert')}
            /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default Routes;
