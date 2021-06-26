import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, ListHeader, TouchableOpacity, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { windowWidth, windowHeight } from '../utils/Dimensions';
import { SearchBar } from 'react-native-elements';
import PostCard from '../components/PostCard';
import AlertComponent from '../components/AlertComponent';
import { alertpatients } from '../patients/AlertPatients';

const AlertScreen = () => {

    // const alertpatients = [
    //     {
    //         id: 1,
    //         name: 'Jenny Doe',
    //         hospitalName: 'ABC Hospital, Mumbai',
    //         age: '56yrs',
    //         sex: 'Female',
    //         bloodPress: '180/20mmHg',
    //         bloodO2: '98%',
    //         temp: '94 degC',
    //         heartRate: '60 bps',
    //         imageUrl: require('../assets/users/user-3.jpg'),
    //         description: 'Heart attack survivor, diabetes (type 2) & arthritis '


    //     },
    //     {
    //         id: 2,
    //         name: 'John Doe',
    //         hospitalName: 'ABC Hospital, Mumbai',
    //         age: '38yrs',
    //         sex: 'Male',
    //         bloodPress: '180/20mmHg',
    //         bloodO2: '95%',
    //         temp: '90 degC',
    //         heartRate: '65 bps',
    //         imageUrl: require('../assets/users/user-2.jpg'),
    //         description: 'Heart attack survivor, diabetes (type 2) & arthritis '


    //     },

    //     {
    //         id: 4,
    //         name: 'Linda Jones',
    //         hospitalName: 'ABC Hospital, Mumbai',
    //         age: '28yrs',
    //         sex: 'Female',
    //         bloodPress: '180/20mmHg',
    //         bloodO2: '98%',
    //         temp: '94 degC',
    //         heartRate: '60 bps',
    //         imageUrl: require('../assets/users/user-8.jpg'),
    //         description: 'Heart attack survivor, diabetes (type 2) & arthritis '


    //     },
    //     {
    //         id: 5,
    //         name: 'Polly Copper',
    //         hospitalName: 'ABC Hospital, Mumbai',
    //         age: '22yrs',
    //         sex: 'Female',
    //         bloodPress: '190/20mmHg',
    //         bloodO2: '95%',
    //         temp: '90 degC',
    //         heartRate: '55 bps',
    //         imageUrl: require('../assets/users/user-7.jpg'),
    //         description: 'Heart attack survivor, diabetes (type 2) & arthritis '


    //     },
    //     {
    //         id: 6,
    //         name: 'Christopher Columbus',
    //         hospitalName: 'ABC Hospital, Mumbai',
    //         age: '35yrs',
    //         sex: 'Male',
    //         bloodPress: '160/20mmHg',
    //         bloodO2: '91%',
    //         temp: '96 degC',
    //         heartRate: '63 bps',
    //         imageUrl: require('../assets/users/user-4.jpg'),
    //         description: 'Heart attack survivor, diabetes (type 2) & arthritis '


    //     },


    // ];

    return (

        <View style={styles.container}>
            <FlatList
                data={alertpatients}

                renderItem={({ item }) => (


                    <AlertComponent
                        item={item}
                        onPress={() => navigation.navigate('PatientProfile', { data: item })}
                    />



                )}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={ListHeader}
                ListFooterComponent={ListHeader}
                showsVerticalScrollIndicator={false}
            />

        </View>

    )
}

export default AlertScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#83BCCA',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
