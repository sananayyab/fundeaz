import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';


function StatisticsRanking(props){
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('screen').height;

    const styles = StyleSheet.create({
        container: {
            flex: 1,

        },


        rankingContainer: {
            height: screenHeight * 0.42,
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
            width: '26%',
            backgroundColor: '#1D2D44',
            height: '70%',
            borderRadius: 10,
        }, rankingItemNumberText: {
            top: '10%',
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

    return(
        <View style={styles.container}>
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
        </View>
    );

}

export default StatisticsRanking
