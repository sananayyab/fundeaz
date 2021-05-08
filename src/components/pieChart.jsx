import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Circle, Svg} from 'react-native-svg';



function PieChart(props){

    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('screen').height;
    const radius = 50;
    const strokeW = radius * 2;
    const circumf = 2 * Math.PI * radius;

    const styles = StyleSheet.create({
        container: {
            flex: 1,

        },

        pieChartContainer: {
            height: Dimensions.get('screen').height * 0.35,
            borderRadius: 10,
            backgroundColor: '#98B0D3',
            margin: '3%',
            flexDirection: 'row',

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
        }


    });

    return(
        <View style={styles.container}>
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
        </View>
    )

}

export default PieChart
