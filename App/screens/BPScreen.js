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
           console.log(time1);
    }
    

       
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
           
            {value1.length == 6 ? setValue1(value1.slice(1)) : null}
            {time1.length == 6 ? setTime1(time1.slice(1)) : null}

            {value1.length == 0 || time1.length == 0 ? null :
                <View style ={{flex:1, flexDirection:'column'}}>
              <View style={{flex:1,flexDirection:"row"}}>
                  <YAxis
            data={value1}
            numberOfTicks={4}
            contentInset={{ top: 10, bottom: 5 }}
            svg={{
                fill: '#141B5D70',
                fontWeight: '600'
            }}
            style={{ height:200 }}
             yAccessor={yAccessor}
            max={120}
            min={0}
        />
                   <AreaChart
                    style={{ height: 200,width:windowWidth-40 }}
                        data={value1}
                        contentInset={{ top: 30, bottom: 30 }}
                        curve={shape.curveNatural}
                        svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                     
                    >
                       
                <Grid />
            </AreaChart>
            </View>
            <XAxis 
            data={time1}
            numberOfTicks={4}
            contentInset={{ left: 10, right: 10 }}
            svg={{
                fill: '#141B5D70',
                fontWeight: '600'
            }}
            style={{ height:200 }}
            xAccessor={xAccessor}
           
        />
        </View>
        }
        </View>
    );


}

export default BPScreen

const styles = StyleSheet.create({

})
