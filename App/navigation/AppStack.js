import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AlertScreen from '../screens/AlertScreen';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import BloodScreen from '../screens/BloodScreen';
import BPScreen from '../screens/BPScreen';
import DoctorProfileScreen from '../screens/DoctorProfileScreen';
import HeartrateScreen from '../screens/HeartrateScreen';
import PatientProfileScreen from '../screens/PatientProfileScreen';
import TemperatureScreen from '../screens/TemperatureScreen';
import HistoryScreen from '../screens/HistoryScreen';
import EditDrProfileScreen from '../screens/EditDrProfileScreen';
import AboutScreen from '../screens/AboutScreen';
import { DrawerContent } from '../components/DrawerContent';
import LoginScreen from '../screens/LoginScreen';
import AsyncStorage from '@react-native-community/async-storage'
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();


const HomeStack = ({ navigation }) => (
    
    <Stack.Navigator initialRouteName='Home'>
       
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
        <Stack.Screen name='PatientProfile' component={PatientProfileScreen}
            options={{
                headerTitle: 'Detailed Report',
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
                    <View style={{ marginRight: 10, backgroundColor: '#CDE8ED'}}>
                        <MaterialCommunityIcons.Button
                            name="alert"
                            size={35}
                            backgroundColor="#CDE8ED"
                            color="#F87677"
                            onPress={() => navigation.navigate('Alert')}
                        />
                    </View>
                ),
            }} />

        <Stack.Screen name='Alert' component={AlertScreen}
            options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {


                    fontSize: 18,
                },
                headerStyle: {
                    backgroundColor: '#CDE8ED',
                    shadowColor: '#fff',
                    elevation:10
                    
                },

            }} />
        <Stack.Screen name='BpScreen' component={BPScreen}
        options={{
            headerTitle: 'Blood Pressure Report',
                headerTitleAlign: 'center',
                headerTitleStyle: {


                    fontSize: 18,
                },
                headerStyle: {
                    backgroundColor: '#CDE8ED',
                    shadowColor: '#fff',
                    elevation: 10,
                },
        }} />
        <Stack.Screen name='BloodScreen' component={BloodScreen}
        options={{
            headerTitle: 'Blood Oxyzen Report',
                headerTitleAlign: 'center',
                headerTitleStyle: {


                    fontSize: 18,
                },
                headerStyle: {
                    backgroundColor: '#CDE8ED',
                    shadowColor: '#fff',
                    elevation: 10,
                },
        }}  />
        <Stack.Screen name='TemperatureScreen' component={TemperatureScreen}
        options={{
            headerTitle: 'Temperature Report',
                headerTitleAlign: 'center',
                headerTitleStyle: {


                    fontSize: 18,
                },
                headerStyle: {
                    backgroundColor: '#CDE8ED',
                    shadowColor: '#fff',
                    elevation: 10,
                },
        }}  />

<Stack.Screen name='HeartrateScreen' component={HeartrateScreen}
        options={{
            headerTitle: 'Heartrate Report',
                headerTitleAlign: 'center',
                headerTitleStyle: {


                    fontSize: 18,
                },
                headerStyle: {
                    backgroundColor: '#CDE8ED',
                    shadowColor: '#fff',
                    elevation: 10,
                },
        }}  />

    </Stack.Navigator>
);

// const HistoryStack = ({ navigation }) => (
//     <Stack.Navigator>
//         <Stack.Screen name='History' component={HistoryScreen} />
//         <Stack.Screen name='PatientProfile1' component={PatientProfileScreen} />
//         <Stack.Screen name='Alert1' component={AlertScreen} />
//     </Stack.Navigator>
// );

const ProfileStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name='Profile' component={DoctorProfileScreen}
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
        <Stack.Screen name='EditDrProfile' component={EditDrProfileScreen} />
    </Stack.Navigator>
);

// const HomeTabNavigator = ({ navigation }) => (
//     <Tab.Navigator
//         initialRouteName="Home"

//         activeColor="#f0edf6"
//         inactiveColor="#589EE1"
//         barStyle={{ paddingBottom: 0, backgroundColor: '#498AA3' }}
//     >
//         <Tab.Screen name='Home' component={HomeStack} options={({ route }) => ({
//             tabBarLabel: 'Home',
//             // tabBarVisible: route.state && route.state.index === 0,
//             tabBarIcon: () => (
//                 <MaterialCommunityIcons
//                     name="home-outline"
//                     color='black'
//                     size={25}
//                 />
//             ),
//         })} />
//         <Tab.Screen name='History' component={HistoryStack} options={({ route }) => ({
//             tabBarLabel: 'History',
//             // tabBarVisible: route.state && route.state.index === 0,
//             tabBarIcon: () => (
//                 <MaterialCommunityIcons
//                     name="history"
//                     color='black'
//                     size={25}
//                 />
//             ),
//         })} />

//         <Tab.Screen name='Profile' component={ProfileStack} options={({ route }) => ({
//             tabBarLabel: 'Profile',
//             // tabBarVisible: route.state && route.state.index === 0,
//             tabBarIcon: () => (
//                 <FontAwesome5
//                     name="user"
//                     color='black'
//                     size={25}
//                 />
//             ),
//         })} />
//     </Tab.Navigator>

// )

const AppStack = ({ navigation }) => {
    return (
        <Drawer.Navigator initialRouteName='Splash'
        drawerContent={props => <DrawerContent
        onPresslog={() => {
            // const navigation1 = useNavigation();
            //             navigation1.reset({
            //                 index:0,
            //                 routes:[{name:'Login'}],
            //             });
            navigation.replace('Login');
        }}
        {...props} />}>
             <Drawer.Screen
                name='Splash'
                component={SplashScreen}
                options={{ header: () => null }}
            />
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="Profile" component={ProfileStack} />
            <Drawer.Screen name="About" component={AboutScreen} />
            <Drawer.Screen
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
        </Drawer.Navigator>
    );
};





export default AppStack;

