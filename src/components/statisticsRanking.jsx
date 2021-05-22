import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';


function StatisticsRanking(props)
{
    props.data.sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('screen').height;
    const styles = StyleSheet.create({
        container: {
            flex: 1,

        },


        rankingContainer: {
            height: screenHeight * 0.42,
            borderRadius: 10,
            borderTopLeftRadius: 0,
            backgroundColor: '#98B0D3',
            margin: '3%',
            marginTop: 0,
            marginBottom: '10%'
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
            width: '68%',
            left: '50%',
        }, containerTag: {
            marginTop: '5%',
            backgroundColor: '#1D2D44',
            height: '10%',
            width: '50%',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,

            marginLeft: '3%',
        }, tagText: {
            color: 'white',
            top: '15%',
            fontSize: 19,
            textAlign: 'center',
            textAlignVertical: 'center',
        },


    });
    let rankingItems = [];
    props.data.forEach(generateElements)


    function generateElements(item, index)
    {


        rankingItems.push(<View key={item + index} style={styles.rankingItemContainer}>

            <View style={styles.rankingItemTextContainer}>
                <Text style={styles.rankingItemText}>
                    {item.name}
                </Text>
            </View>
            <View style={styles.rankingItemNumberContainer}>
                <Text style={styles.rankingItemNumberText}>
                    {item.value}
                </Text>
            </View>
        </View>);

    }


    return (
        <View style={styles.container}>
            <View style={styles.containerTag}>
                <Text style={styles.tagText}>
                    Transaction Ranking
                </Text>
            </View>
            <View style={styles.rankingContainer}>
                {rankingItems}

            </View>
        </View>
    );

}

export default StatisticsRanking;
