import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Circle, Svg} from 'react-native-svg';

function StatisticsPageGroup(props)
{
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('screen').height;


    const styles = StyleSheet.create({
        container: {
            flex: 1,

        },
        barChartContainer: {
            height: Dimensions.get('screen').height * 0.25,
            borderRadius: 10,
            backgroundColor: '#98B0D3',
            margin: '3%',
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        pieChartContainer: {
            height: Dimensions.get('screen').height * 0.35,
            borderRadius: 10,
            backgroundColor: '#98B0D3',
            margin: '3%',
            flexDirection: 'row',

        },
        rankingContainer: {
            height: Dimensions.get('screen').height * 0.75,
            borderRadius: 10,
            backgroundColor: '#98B0D3',
            margin: '3%',
        }, barChartLabels: {
            top: '1%',
            width: '15%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            marginBottom: '6%',
        },
        barChartData: {


            width: '15%',
            flexDirection: 'column',
            justifyContent: 'flex-end',
        },
        chartBar: {
            width: '60%',
            height: '50%',
            backgroundColor: '#385782',
            alignSelf: 'center',
            borderRadius: 5,
        },
        pieChart: {
            backgroundColor: 'white',
            width: '55%',
        }, pieChartLabels: {
            backgroundColor: 'black',
            width: '45%',
            flexDirection: 'row',
        },


    });


    return (
        <View style={{flex: 1}}>
            <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.barChartContainer}>
                    <View style={styles.barChartLabels}>
                        <Text>
                            1000
                        </Text>
                        <Text>
                            1000
                        </Text>
                        <Text>
                            1000
                        </Text>
                        <Text>
                            1000
                        </Text>
                        <Text>
                            1000
                        </Text>
                        <Text>
                            1000
                        </Text>


                    </View>
                    <View style={styles.barChartData}>
                        <View style={styles.chartBar}>

                        </View>


                        <Text style={{textAlign: 'center'}}>
                            25 - 1
                        </Text>
                    </View>
                    <View style={styles.barChartData}>
                        <View style={styles.chartBar}>

                        </View>


                        <Text style={{textAlign: 'center'}}>
                            2 - 8
                        </Text>
                    </View>
                    <View style={styles.barChartData}>
                        <View style={styles.chartBar}>

                        </View>


                        <Text style={{textAlign: 'center'}}>
                            9 - 15
                        </Text>
                    </View>
                    <View style={styles.barChartData}>
                        <View style={styles.chartBar}>

                        </View>


                        <Text style={{textAlign: 'center'}}>
                            16 - 22
                        </Text>
                    </View>
                </View>
     

            </ScrollView>
        </View>
    );

}

export default StatisticsPageGroup;
