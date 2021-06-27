import React,{useEffect} from 'react'
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import { Globalstyles } from '../styles/globalStyles';
import Heartbeat from '../assets/about/heartbeat.svg';
import Temperature from '../assets/about/temperature.svg';
import Heart from '../assets/about/heart.svg';
import { windowWidth } from '../utils/Dimensions';

const AboutScreen = () => {
    useEffect(() => {
        console.log(windowWidth);
    })
    return (
        <ScrollView>
        <View style={Globalstyles.container}>
            <View style={{flexDirection:'row',marginTop:50}}>
               
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 47, fontWeight:'600',color:'#28527A',textDecorationLine:'underline' }}>About </Text>
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 47, fontWeight:'600',color:'#44C4A6',textDecorationLine:'underline',marginLeft:5 }}>Us</Text>

            </View>
            <View>
                <View style={{flexDirection:'row' } }>
                    <View>
                    <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 24, fontWeight:'600',color:'#28527A',marginTop:60,marginLeft:0.073*windowWidth}}>Vital is a</Text>
                    <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 24, fontWeight:'600',color:'#28527A',marginTop:5,marginLeft:0.073*windowWidth}}>one-of-a-kind</Text>

                    </View>
                    <View style={{margin:0.073*windowWidth,marginLeft:0.0365*windowWidth,marginRight:0.073*windowWidth,marginBottom:0.0365*windowWidth}}>
                        <Heartbeat height={85} width={85} />
                    </View>
                </View>
                
                <View style={{marginRight:0.0851*windowWidth,marginLeft:0.073*windowWidth,marginTop:0}}>
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 24, fontWeight:'600',color:'#28527A',marginTop:5,lineHeight:54}}>healthcare solution to increasing efficency minus the commuincation</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{marginRight:0.0851*windowWidth,marginLeft:0.073*windowWidth,marginTop:0}}>
                    <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 24, fontWeight:'600',color:'#28527A',marginTop:5,lineHeight:54}}>hassel.</Text>
                    <View style={{marginTop:20}}>
                        <Temperature height={75} width={70} />
                    </View>
                    
                    </View>
                    <View style={{marginTop:29,marginLeft:0.0851*windowWidth,margin:0.10949*windowWidth}}>
                    <Image source={require('../assets/about/monitor.png')}
                     />
                    </View>

               
                    
                </View>
                <View style={{marginRight:0.0851*windowWidth,marginLeft:0.073*windowWidth,marginTop:0}}>
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 24, fontWeight:'600',color:'#28527A',marginTop:5,lineHeight:54}}>Get real-time updates from the paitients bedside to yours.</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',marginLeft:67,margin:40}}>
                    <View>
                        <Image source={require('../assets/about/bi_phone-vibrate.png')} />
                    </View>
                    <View style={{marginLeft:0.1338*windowWidth}}>
                        <Image source={require('../assets/about/wpf_medical-doctor.png')} />
                    </View>

                </View>
                <View style={{marginRight:0.0851*windowWidth,marginLeft:0.073*windowWidth,marginTop:0}}>
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 24, fontWeight:'600',color:'#28527A',marginTop:5,lineHeight:54}}>Experience a seamless integration of human and machine with tech that doesn’t work for you but with you.</Text>
                </View>

                <View style={{alignItems:'center',marginTop:35,marginBottom:45}}>
                    <Heart />
                </View>

            </View>
        </View>
        </ScrollView>
    )
}

export default AboutScreen

const styles = StyleSheet.create({})
