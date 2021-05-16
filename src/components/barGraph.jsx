import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';



function BarGraph(props)
{

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('screen').height;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        barChartContainer: {
            paddingTop: '2%',
            height: screenHeight * 0.25,
            borderRadius: 10,
            backgroundColor: '#98B0D3',

            margin: '3%',
            flexDirection: 'row',
            justifyContent: 'space-around',

        }, barChartLabels: {
            top: '1%',
            width: '15%',

            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            marginBottom: '6%',
        },
        barChartData: {

            height: '97%',
            width: '15%',
            flexDirection: 'column',
            justifyContent: 'flex-end',
        },
        chartBar: {
        flexWrap: 'wrap',
            width: '60%',

            backgroundColor: '#385782',
            alignSelf: 'center',
            borderRadius: 5,
        },


    });
    let graphYAxis = [];
    let graphXitems = [];
    let graphHighestValue = 1000;
    props.data.forEach(calculateGraphRange);
    props.data.forEach(setGraphElements)
    setGraphAxis();
    graphYAxis.reverse();

    function setGraphAxis()
    {
        let currentValue = 0;
        let range = Math.ceil(graphHighestValue / 5);

        for (let i = 0; i <= 5; i++)
        {
            graphYAxis.push(
                <Text key={range + i}>
                    {range * i}
                </Text>)
        }
    }

    function setGraphElements(item, index){
        graphXitems.push(<View key={item + index} style={styles.barChartData}>
            <View style={{height: '85%',        justifyContent: 'flex-end',}}>
                <View style={[styles.chartBar, {height: Math.ceil(( item.y/ graphHighestValue) * 100 ) + '%'}]}/>
            </View>




            <Text style={{textAlign: 'center'}}>
                {item.x}
            </Text>
        </View>)
    }

    function calculateGraphRange(item, index)
    {
        if (item.y >= graphHighestValue)
        {
            graphHighestValue = Math.ceil(item.y/500)*500
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.barChartContainer}>
                <View style={styles.barChartLabels}>

                    {graphYAxis}


                </View>
                {graphXitems}
            </View>
        </View>
    );
}

export default BarGraph;
