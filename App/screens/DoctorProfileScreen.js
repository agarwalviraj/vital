import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { windowWidth } from '../utils/Dimensions';
import { Neomorph } from 'react-native-neomorph-shadows';
import { Globalstyles } from '../styles/globalStyles';
import Axios from 'axios'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage'


const DoctorProfileScreen = () => {
    const [name, setName] = useState('');
    useEffect(() => {
        const getEmail=(async()=>{

        // const token =await AsyncStorage.getItem("token")
        // const jwtOBJ = {jwt:token}
        // const res= await Axios.get(`https://hackvital.herokuapp.com/authorize`,jwtOBJ)
        // console.log(res);
        const email =await AsyncStorage.getItem("email");
        const name1 = await Axios.get(`https://hackvital.herokuapp.com/user/?DrMail==${email}`);
            setName(name1.data);
            console.log(name1.data);
           
        })
        getEmail();
       
    }, [])
    return (

        <View style={Globalstyles.container}>

            <Image style={{ height: 150, width: 150, borderRadius: 75 }}
                source={require('../assets/images/doctorimg.jpg')}
            />


            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 30,color:'#28527A' }}>Dr.Jhon Doe</Text>

            <Neomorph
                darkShadowColor="#afe4" // <- set this
                lightShadowColor="#044e61" // <- this
                style={{
                    marginTop: 20,
                    shadowOpacity: 0.35, // <- and this or yours opacity
                    shadowRadius: 15,
                    borderRadius: 30,
                    padding: 25,
                    backgroundColor: '#CDE8ED',
                    width: 0.65 * windowWidth,
                    height: 300,
                }}
            >
                {/* <Neomorph
                darkShadowColor="white" // <- set this
                lightShadowColor="black" // <- this
                style={{
                    marginTop: 20,
                    shadowOpacity: 0.35, // <- and this or yours opacity
                    shadowRadius: 15,
                    borderRadius: 30,
                    backgroundColor: '#CDE8ED',
                    width: 0.65 * windowWidth,
                    height: 200,
                }}
            > */}
                {/* <Neomorph
                outer // <- enable shadow inside of neomorph
                swapShadows // <- change zIndex of each shadow color
                style={{
                    shadowRadius: 10,
                    borderRadius: 25,
                    backgroundColor: '#CDE8ED',
                    width: 0.6 * windowWidth,
                    height: 150,
                }}
            > */}
                <View style={{ marginLeft: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>Age: </Text>
                        <Text style={styles.subText}>29</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop:16 }}>
                        <Text style={styles.text}>Qualifications: </Text>
                        <Text style={styles.subText}>MBBS</Text>
                    </View>

                    <View style={{ flexDirection: 'row',  marginTop:16}}>
                        <Text style={styles.text}>Specialization: </Text>
                        <Text style={styles.subText}>ENT</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop:16 }}>
                        <Text style={styles.text}>Experience: </Text>
                        <Text style={styles.subText}>5 years- ABC Hospital, Mumbai</Text>
                    </View>
                </View>
            </Neomorph>


        </View >

    );
}

export default DoctorProfileScreen

const styles = StyleSheet.create({
    card: {
        width: 0.8 * windowWidth,
        borderRadius: 6,
        elevation: 6,
        backgroundColor: '#CDE8ED',
        shadowOffset: { height: 0, width: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        justifyContent: 'center',
        padding: 25
    },
     text:{
        fontSize: 17, 
        fontWeight: '600',
        color:'#28527A',
        fontFamily:'Poppins-SemiBold',
        fontWeight:'600',
      },
      subText:{
        fontSize: 16, 
        fontWeight: '600',
        color:'#28527A',
        fontFamily:'Poppins-Normal',
        fontWeight:'600',flexWrap:'wrap',
        flex:1
      }
})
