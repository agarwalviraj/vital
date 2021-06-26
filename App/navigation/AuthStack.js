import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import AsyncStorage from '@react-native-community/async-storage'
import SignupScreen from '../screens/SignupScreen';
import {View} from 'react-native';

const Stack = createStackNavigator();
const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
    let routeName;


    useEffect(() => {
        let mounted = true;
        if(mounted){
            AsyncStorage.getItem('alreadyLaunched').then(value => {
                if (value == null) {
                    AsyncStorage.setItem('alreadyLaunched', 'true');
                    setIsFirstLaunch(true)
                } else {
                    setIsFirstLaunch(false);
                }
            });
          }
          return () => mounted = false;
       
    },[]);



    if (isFirstLaunch == null) {
        return null;
    }
    else if (isFirstLaunch == true) {
        routeName = 'Onboarding';
    } else {
        routeName = 'Login';
    }

    return (
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
                name='Onboarding'
                component={OnboardingScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerBackAccessibilityLabel: 'null',
                    headerTitleStyle: {


                        fontSize: 18,
                    },
                    headerStyle: {
                        backgroundColor: '#CDE8ED',
                        shadowColor: '#fff',
                        elevation: 19,
                    },
                }}
            />
            <Stack.Screen name='Signup'
                component={SignupScreen} />
             <Stack.Screen name='Home' component={HomeScreen}
            options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {


                    fontSize: 18,
                },
                headerStyle: {
                    backgroundColor: '#CDE8ED',
                    shadowColor: '#fff',
                    elevation: 10,
                },
                headerRight: () => (
                    <View style={{ marginRight: 10, backgroundColor: '#CDE8ED' }}>
                        <MaterialCommunityIcons.Button
                            name="alert"
                            size={35}
                            elevation={8}
                            backgroundColor="#CDE8ED"
                            color="#F87677"
                            onPress={() => navigation.navigate('Alert')}
                        />
                    </View>
                ),
                headerLeft: () => (
                    <View style={{ marginLeft: 10, backgroundColor: '#CDE8ED' }}>
                        <MaterialCommunityIcons.Button
                            name="menu"
                            size={35}
                            elevation={8}
                            backgroundColor="#CDE8ED"
                            color="#F87677"
                            onPress={() => navigation.toggleDrawer()}
                        />
                    </View>
                ),

            }} />

        </Stack.Navigator>
    );

}

export default AuthStack;



