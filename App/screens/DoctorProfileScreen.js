import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { windowWidth } from '../utils/Dimensions';
import { Neomorph } from 'react-native-neomorph-shadows';



const DoctorProfileScreen = () => {
    return (

        <View style={styles.container}>

            <Image style={{ height: 150, width: 150, borderRadius: 75 }}
                source={require('../assets/users/doc_image.jpg')}
            />


            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 30, }}>Dr.Natasha Grey</Text>

            <Neomorph
                darkShadowColor="#afe4" // <- set this
                lightShadowColor="#044e61" // <- this
                style={{
                    marginTop: 20,
                    shadowOpacity: 0.35, // <- and this or yours opacity
                    shadowRadius: 15,
                    borderRadius: 30,
                    padding: 25,
                    backgroundColor: '#83BCCA',
                    width: 0.65 * windowWidth,
                    height: 235,
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
                    backgroundColor: '#83BCCA',
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
                    backgroundColor: '#83BCCA',
                    width: 0.6 * windowWidth,
                    height: 150,
                }}
            > */}
                <View style={{ marginLeft: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>Age: </Text>
                        <Text style={styles.subText}>29</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 8 }}>
                        <Text style={styles.text}>Qualifications: </Text>
                        <Text style={styles.subText}>MBBS</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 8 }}>
                        <Text style={styles.text}>Specialization: </Text>
                        <Text style={styles.subText}>ENT</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 8 }}>
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
    container: {
        backgroundColor: '#83BCCA',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: 0.8 * windowWidth,
        borderRadius: 6,
        elevation: 6,
        backgroundColor: '#83BCCA',
        shadowOffset: { height: 0, width: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        justifyContent: 'center',
        padding: 25
    },
    text: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
    },
    subText: {
        fontFamily: 'Poppins-Normal',
        fontSize: 16,
        flexWrap: 'wrap', flexShrink: 1,
    }
})
