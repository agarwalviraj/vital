import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, FlatList, ListHeader, TouchableOpacity, ScrollView, TextInput, ItemSeparatorComponent, LogBox } from 'react-native';
import LottieView from 'lottie-react-native';
import { windowWidth, windowHeight } from '../utils/Dimensions';
import { SearchBar } from 'react-native-elements';
import PostCard from '../components/PostCard';
import { currentPatients } from '../patients/CurrentPatients';
import Axios from 'axios'
import axios from 'axios';
import { Globalstyles } from '../styles/globalStyles';
import AsyncStorage from '@react-native-community/async-storage'



const HomeScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [state, setState] = useState();
    const [filteredArray, setFilteredArray] = useState([]);

    const arrayfilter = (letters) => {
        if(letters== ''){
            return state;
        }
        else{
            return state.filter(item1 => item1.name.indexOf(letters) > -1);

        }

    }

    useEffect(() => {
        LogBox.ignoreLogs(['Warning: ...']);

        const getEmail=(async()=>{

        // const token =await AsyncStorage.getItem("token")
        // const jwtOBJ = {jwt:token}
        // const res= await Axios.get(`https://hackvital.herokuapp.com/authorize`,jwtOBJ)
        // console.log(res);
        const email =await AsyncStorage.getItem("email");
        const patients = await Axios.get(`https://hackvital.herokuapp.com/patient/?DrMail=${email}`);
            setState(patients.data);
            setFilteredArray(currentPatients);
        })
        getEmail()
        console.log(state);
       
    }, [])


    return (
        <View style={Globalstyles.container}>
            <View>
                {/* <LottieView
                    style={styles.lottie}
                    source={require('../assets/lottie/hospital-patient-clinical.json')}
                    autoPlay
                /> */}
            </View>
            {/* <TextInput style={{ width: windowWidth * 0.8, borderRadius: 15, marginTop: 30, padding: 8, elevation: 6, height: 50, backgroundColor: '#fff', color: 'black' }}
                placeholder="Search here..."
                placeholderTextColor='black'

                onChangeText={(searchText) => {
                    setSearchText(searchText)
                    //console.log(arrayfilter(searchText));
                    setFilteredArray(arrayfilter(searchText));
                }}
                value={searchText}
            /> */}
            {/* <SearchBar
                placeholder="Search here..."
                onChangeText={(searchText) => {
                    setSearchText(searchText)
                    console.log(arrayfilter(searchText))
                }}
                value={searchText}
                round
                containerStyle={{ width: windowWidth * 0.8, backgroundColor: '#fff', borderRadius: 15, marginTop: 30, padding: 2, elevation: 6 }}
                inputContainerStyle={{ backgroundColor: '#fff' }}


            /> */}


            <Text style={{ fontFamily: 'Poppins-Normal', fontSize: 26, color: '#28527A', paddingTop: 16 }}>Current Patients</Text>

            <FlatList style={{ItemSeparatorComponent:null}}
                data={state}

                renderItem={({ item }) => (


                    <PostCard
                        item={item}
                        onPress={() => navigation.navigate('PatientProfile', { data: item })}
                    />



                )}
                keyExtractor={(item) => item._id}
                //ListHeaderComponent={ListHeader}
                //ListFooterComponent={ListHeader}
                //ItemSeparatorComponent={null}
                //showsVerticalScrollIndicator={false}
            />



        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

    lottie: {
        width: 0.8 * windowWidth,
        height: 200,
        margin: 15,
    }
})
