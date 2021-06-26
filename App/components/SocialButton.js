import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({
    buttonTitle,
    btnType,
    color,
    backgroundColor,
    ...rest
}) => {
    let bgColor = backgroundColor;
    return (
        <TouchableOpacity
            style={[styles.card, { backgroundColor: bgColor }]}
            {...rest}>
            <View style={styles.iconWrapper}>
                <FontAwesome name={btnType} style={styles.icon} size={25} color={color} />
            </View>
            <View style={styles.btnTxtWrapper}>
                <Text style={[styles.buttonText, { color: color }]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SocialButton;

const styles = StyleSheet.create({
    card: {
        elevation: 7,
        shadowOffset: { height: 0, width: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.15,
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 20,
        flexDirection: 'row'
    },
    buttonContainer: {
        shadowOffset: { height: 0, width: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.15,
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 6,
    },
    iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontWeight: 'bold',
    },
    btnTxtWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#28527A',
    },
});