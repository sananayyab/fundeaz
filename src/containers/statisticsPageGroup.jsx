import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Circle, Svg} from 'react-native-svg';
import BarGraph from '../components/barGraph';
import PieChart from '../components/pieChart';
import StatisticsRanking from '../components/statisticsRanking';
function StatisticsPageGroup(props)
{
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('screen').height;
    const radius = 50;
    const strokeW = radius * 2;
    const circumf = 2 * Math.PI * radius;

    const styles = StyleSheet.create({
        container: {
            flex: 1,

        },


        rankingContainer: {
            height: Dimensions.get('screen').height * 0.40,
            borderRadius: 10,
            backgroundColor: '#98B0D3',
            margin: '3%',
   },
        rankingItemContainer: {
            flexDirection: 'row',
            width: 'auto',
            height: '14%',
            backgroundColor: '#385782',
            margin: 10,
            borderRadius: 15,
            alignContent: 'center',
            alignItems: 'center',

        }, rankingItemNumberContainer: {

            left: 10,
            width: '33%',
            backgroundColor: '#1D2D44',
            height: '60%',
            borderRadius: 10,
        }, rankingItemNumberText: {
            top: '5%',
            color: 'white',
            fontSize: 18,
            textAlignVertical: 'center',
            textAlign: 'center',
        }, rankingItemText: {

            color: 'white',
            fontSize: 20,
            textAlignVertical: 'center',
            textAlign: 'left',
        }, rankingItemTextContainer: {
            width: '80%',
            left: '50%',
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
