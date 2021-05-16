import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Circle, Svg} from 'react-native-svg';
import BarGraph from '../components/barGraph';
import PieChart from '../components/pieChart';
import StatisticsRanking from '../components/statisticsRanking';
function StatisticsPageGroup(props)
{

    const styles = StyleSheet.create({
        container: {
            flex: 1,

        },



    });


    return (
        <View style={{flex: 1}}>
            <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
                <BarGraph data={[{x: "25 - 1", y: 500}, {x: "2 - 8", y: 10}, {x: "9 - 15", y: 234} ,{x: "16 - 22", y: 500}]}/>
                <PieChart data={[{name: "last", value: 10},{name: "last", value: 1},{ name: "beforelast", value: 2 }]}/>
                <StatisticsRanking/>

            </ScrollView>
        </View>
    );

}

export default StatisticsPageGroup;
