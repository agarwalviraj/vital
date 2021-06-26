import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, FlatList, ListHeader, TouchableOpacity, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { windowWidth, windowHeight } from '../utils/Dimensions';
import { SearchBar } from 'react-native-elements';
import PostCard from '../components/PostCard';
import { currentPatients } from '../patients/CurrentPatients';
import Axios from 'axios'
import axios from 'axios';


const HomeScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [state, setState] = useState();

    useEffect(() => {
        Axios.get('https://hackvital.herokuapp.com/patient/?DrMail=jhondoe@gmail.com')
            .then(res => {
                setState(res.data);
            })
    }, [])


    return (
        <View style={styles.container}>
            <View>
                <LottieView
                    style={styles.lottie}
                    source={require('../assets/lottie/hospital-patient-clinical.json')}
                    autoPlay
                />
            </View>
            <SearchBar
                placeholder="Search here..."
                onChangeText={(searchText) => setSearchText(searchText)}
                value={searchText}
                round
                containerStyle={{ width: windowWidth * 0.8, backgroundColor: '#fff', borderRadius: 15, marginTop: 30, padding: 2, elevation: 6 }}
                inputContainerStyle={{ backgroundColor: '#fff' }}

            />


            <Text style={{ fontFamily: 'Poppins-Normal', fontSize: 26, color: '#28527A', paddingTop: 16 }}>Current Patients</Text>

            <FlatList
                data={state}

                renderItem={({ item }) => (


                    <PostCard
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

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#83BCCA',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lottie: {
        width: 0.8 * windowWidth,
        height: 200,
        margin: 15,
    }
})
