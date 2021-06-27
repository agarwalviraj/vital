import React, { useState, useEffect,useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AreaChart, Grid,YAxis, XAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
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


const BPScreen = ({route}) => {
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
            console.log(`${route.params.name}BloodPressure`);
            socket.on(`${route.params.name}BloodPressure`, (newData) => updateData(newData));
            console.log(`${route.params.name}BloodPressure`);
           // socket.on("TimBloodPressure", (newData) => updateData(newData));
    }
    
    console.log(time1);

       
    }, [socket, updateData]);
    const xAccessor = ({ item }) => {
        //console.log("ITEM VALUE",typeof item)
        return item;
     };
    const yAccessor = ({ item }) => {
       //console.log("ITEM VALUE",item)
       return item
    };
    const xAxisHeight = 15
    const xAxisLabelHeight = 10

    return (

        <View style={Globalstyles.container}>
             <Text style={{fontSize: 35, 
                marginBottom:30,
        fontWeight: '600',
        color:'#28527A',
        fontFamily:'Poppins-SemiBold',
        fontWeight:'600',}}>Realtime Graph</Text>

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

export default BPScreen

const styles = StyleSheet.create({

})
