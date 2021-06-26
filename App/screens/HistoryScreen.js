import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const HistoryScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>HistoryScreen</Text>
            <Button
                onPress={() => navigation.navigate('PatientProfile1')}
                title='Patient Profile'
            />
            <Button
                onPress={() => navigation.navigate('Alert1')}
                title='AlertScreen'
            />
        </View>
    )
}

export default HistoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
