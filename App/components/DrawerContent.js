import React from 'react'
import { StyleSheet, View, Image, DevSettings } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage'
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'; import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import VitalLogo from '../assets/svg/VitalLogo.svg';

export function DrawerContent(props) {
    const paperTheme = useTheme();

    const signOut = () => {
        AsyncStorage.setItem("token", '')
            DevSettings.reload();
    }
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>

            <DrawerContentScrollView {...props}>
                <View style={{ alignItems: 'center', marginTop: 45 }}>
                    <Image
                        source={require('../assets/svg/vitalsvg.jpeg')}
                    />
                </View>

                <View style={styles.drawerContent}>
                    <Drawer.Section style={styles.drawerSection}>

                        <DrawerItem
                            labelStyle={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', }}

                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={27}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem
                            labelStyle={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', }}
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={27}
                                />
                            )}
                            label="Profile"

                            onPress={() => { props.navigation.navigate('Profile') }}
                        />

                        <DrawerItem
                            labelStyle={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', }}

                            icon={({ color, size }) => (
                                <Icon
                                    name="account-check-outline"
                                    color={color}
                                    size={27}
                                />
                            )}
                            label="About"
                            onPress={() => { props.navigation.navigate('About') }}
                        />
                    </Drawer.Section>

                </View>


                {/* <View style={{ flexDirection: 'row', marginTop: 35 }}>
                    <MaterialCommunityIcons style={{ marginLeft: 15 }} name='home' size={25} />
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 20, marginLeft: 20 }}>Home</Text>
                </View> */}


            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => { signOut() }}
                />
            </Drawer.Section>
        </View >
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});