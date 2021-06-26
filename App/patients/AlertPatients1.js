import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { currentPatients } from '../patients/CurrentPatients';
import Axios from 'axios';
import axios from 'axios';
import { Globalstyles } from '../styles/globalStyles';
import AsyncStorage from '@react-native-community/async-storage';
import { set } from 'react-native-reanimated';

const AlertPatients1 = () => {
    const [state, setState] = useState();
    const [alertpatients1, setAlertpatients1] = useState([]);

    const checkAlert = (patientArray) => {
        var alertpatients2 = [];
        var l= patientArray.length;
        var i;
        for(i=1;i<l;i++){
            if(!((patientArray[i].BloodPressure<120) || (patientArray[i].BloodO2>'95%' && patientArray[i].BloodO2<'100%') || (patientArray[i].Temperature>97 && patientArray[i].Temperature<99) || (patientArray[i].HeartRate>60 && patientArray[i].HeartRate<110))){
                alertpatients2.push(patientArray[i].data);
            }
        }
        setAlertpatients1(alertpatients2);
        return alertpatients1;
        console.log(alertpatients1);
    }


    useEffect(() => {
        const getEmail=(async()=>{

        // const token =await AsyncStorage.getItem("token")
        // const jwtOBJ = {jwt:token}
        // const res= await Axios.get(`https://hackvital.herokuapp.com/authorize`,jwtOBJ)
        // console.log(res);
        const email =await AsyncStorage.getItem("email");
        const patients = await Axios.get(`https://hackvital.herokuapp.com/patient/?DrMail=${email}`);
            setState(patients.data);
        })
        getEmail();
       checkAlert(state);
    }, [])
}

export const alertpatients1= {AlertPatients1}

const styles = StyleSheet.create({})
