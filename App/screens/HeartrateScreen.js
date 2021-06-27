import React, { useState, useEffect,useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { windowWidth } from '../utils/Dimensions';1
import { Globalstyles } from '../styles/globalStyles';
import { useSocket } from "../contexts/socketContext";

const HeartrateScreen = ({route}) => {
    const [value1, setValue1] = useState([]);
    const [time1, setTime1] = useState([]);
    const [state, setState] = useState();


const updateData = useCallback(
    (newData) => {
      const newTimeObj = newData.time;
      const newValueObj = newData.value;
      setTime1((oldData) => [...oldData, newTimeObj]);
      setValue1((oldData) => [...oldData, newValueObj]);

    },
    [setValue1, setTime1]
  );


    const socket = useSocket();

    useEffect(() => {
        if (socket) {
            console.log(`${route.params.name}HeartRate`);
            socket.on(`${route.params.name}HeartRate`, (newData) => updateData(newData));
            console.log(`${route.params.name}HeartRate`);
           // socket.on("TimBloodPressure", (newData) => updateData(newData));
    }

       
    }, [socket, updateData]);

    return (

        <View style={Globalstyles.container}>

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
                    width={0.8*windowWidth}
                    height={220}
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#5288BC",
                        backgroundGradientTo: "#5288BC",
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

export default HeartrateScreen

const styles = StyleSheet.create({})
