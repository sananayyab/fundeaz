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
               <BarGraph/>
                <PieChart/>
              <StatisticsRanking/>

            </ScrollView>
        </View>
    );

}

export default StatisticsPageGroup;
