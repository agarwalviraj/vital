import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { windowWidth } from '../utils/Dimensions';
import socketIO from 'socket.io-client/dist/socket.io';
const SERVER = "ws://hackvital.herokuapp.com";
const socketName = 'TimBloodPressure';


const BPScreen = () => {
    const [value1, setValue1] = useState([]);
    const [time1, setTime1] = useState([]);



    const socket = socketIO(SERVER, {
        transports: ["websocket"],
        jsonp: false,
        upgrade: false,
    });
    socket.connect();

    useEffect(() => {
        socket.on(socketName, (newData) => {
            setValue1((currentData) => [...currentData, newData.value]);
            setTime1((currentData) => [...currentData, newData.time]);
        });
    }, []);

    return (

        <View style={styles.container}>

            {value1.length == 6 ? setValue1(value1.slice(1)) : null}
            {time1.length == 6 ? setTime1(time1.slice(1)) : null}

            {value1.length == 0 || time1.length == 0 ? null :

                <LineChart
                    data={{
                        labels: time1,
                        datasets: [
                            {
                                data: value1
                            }
                        ]
                    }}
                    width={windowWidth}
                    height={220}
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "2",
                            strokeWidth: "0.5",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            }
        </View>
    );


}

export default BPScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#83BCCA',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
