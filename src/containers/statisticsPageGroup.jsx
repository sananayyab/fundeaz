import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Circle, Svg} from 'react-native-svg';
import BarGraph from '../components/barGraph';
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
            height: Dimensions.get('screen').height * 0.40,
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
            width: '55%',

        }, pieChartLabels: {
            width: '45%',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',


        }, pieChartLabelItem: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        }, rankingItemContainer: {
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
                <View style={styles.pieChartContainer}>
                    <View style={styles.pieChart}>
                        <Svg height={'100%'} width={'100%'}>


                            <Circle cx={'50%'} cy={'50%'} fill={'none'} r={radius} strokeWidth={strokeW}
                                    strokeDasharray={(25 * circumf) / 100 + ',' + circumf}
                                    strokeDashoffset={circumf / 2} stroke="black"/>
                            <Circle cx={'50%'} cy={'50%'} fill={'none'} r={radius} strokeWidth={strokeW}
                                    strokeDasharray={(10 * circumf) / 100 + ',' + circumf} strokeDashoffset={'0'}
                                    stroke="blue"/>
                            <Circle cx={'50%'} cy={'50%'} fill={'none'} r={radius} strokeWidth={strokeW}
                                    strokeDasharray={(5 * circumf) / 100 + ',' + circumf}
                                    strokeDashoffset={-(10 * circumf) / 100} stroke="red"/>
                            <Circle cx={'50%'} cy={'50%'} fill={'none'} r={radius} strokeWidth={strokeW}
                                    strokeDasharray={(50 * circumf) / 100 + ',' + circumf}
                                    strokeDashoffset={-(15 * circumf) / 100} stroke="purple"/>
                            <Circle cx={'50%'} cy={'50%'} fill={'none'} r={radius} strokeWidth={strokeW}
                                    strokeDasharray={(10 * circumf) / 100 + ',' + circumf}
                                    strokeDashoffset={-(65 * circumf) / 100} stroke="green"/>


                        </Svg>
                    </View>
                    <View style={styles.pieChartLabels}>
                        <View style={styles.pieChartLabelItem}>
                            <View style={{
                                height: 20,
                                width: 20,
                                backgroundColor: 'black',

                            }}/>
                            <Text>
                                1000
                            </Text>
                        </View>
                        <View style={styles.pieChartLabelItem}>
                            <View style={{
                                height: 20,
                                width: 20,
                                backgroundColor: 'blue',

                            }}/>
                            <Text>
                                1000
                            </Text>
                        </View>
                        <View style={styles.pieChartLabelItem}>
                            <View style={{
                                height: 20,
                                width: 20,
                                backgroundColor: 'red',

                            }}/>
                            <Text>
                                1000
                            </Text>
                        </View>
                        <View style={styles.pieChartLabelItem}>
                            <View style={{
                                height: 20,
                                width: 20,
                                backgroundColor: 'purple',

                            }}/>
                            <Text>
                                1000
                            </Text>
                        </View>
                        <View style={styles.pieChartLabelItem}>
                            <View style={{
                                height: 20,
                                width: 20,
                                backgroundColor: 'green',

                            }}/>
                            <Text>
                                1000
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.rankingContainer}>
                    <View style={styles.rankingItemContainer}>
                        <View style={styles.rankingItemNumberContainer}>
                            <Text style={styles.rankingItemNumberText}>
                                500000
                            </Text>
                        </View>
                        <View style={styles.rankingItemTextContainer}>
                            <Text style={styles.rankingItemText}>
                                test
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rankingItemContainer}>
                        <View style={styles.rankingItemNumberContainer}>
                            <Text style={styles.rankingItemNumberText}>
                                259
                            </Text>

                        </View>
                        <View style={styles.rankingItemTextContainer}>
                            <Text style={styles.rankingItemText}>
                                test
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rankingItemContainer}>
                        <View style={styles.rankingItemNumberContainer}>
                            <Text style={styles.rankingItemNumberText}>
                                100
                            </Text>
                        </View>
                        <View style={styles.rankingItemTextContainer}>
                            <Text style={styles.rankingItemText}>
                                test
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rankingItemContainer}>
                        <View style={styles.rankingItemNumberContainer}>
                            <Text style={styles.rankingItemNumberText}>
                                50
                            </Text>
                        </View>
                        <View style={styles.rankingItemTextContainer}>
                            <Text style={styles.rankingItemText}>
                                test
                            </Text>
                        </View>
                    </View>
                    <View style={styles.rankingItemContainer}>
                        <View style={styles.rankingItemNumberContainer}>
                            <Text style={styles.rankingItemNumberText}>
                                5
                            </Text>
                        </View>
                        <View style={styles.rankingItemTextContainer}>
                            <Text style={styles.rankingItemText}>
                                test
                            </Text>
                        </View>
                    </View>

                </View>

            </ScrollView>
        </View>
    );

}

export default StatisticsPageGroup;
