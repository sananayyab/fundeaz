import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';


function CategoryGoalBar(props)
{

    const styles = StyleSheet.create({
        container: {
            marginBottom: '4%',
            marginLeft: '2%',
            marginRight: '2%',

            borderRadius: 15,

            elevation: 5,

            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 1,
            backgroundColor: '#98B0D3',

        }, goalNumberContainer: {
            height: '50%',
            width: '40%',

            marginTop: '5%',
            marginLeft: '5%',
            alignSelf: 'flex-start',
            borderRadius: 15,
            backgroundColor: '#36537F',
        }, progressBarContainer: {
            marginTop: '10%',
            height: '35%',
            alignSelf: 'center',
            width: '90%',
        }, backgroundProgressBar: {
            borderRadius: 20,

            backgroundColor: 'white',
            height: '70%',
            width: '100%',
        }, progressBar: {
            borderRadius: 20,

            height: '70%',
            position: 'absolute',
            width: '50%',
            backgroundColor: 'black',
            alignSelf: 'flex-start',
        },
        innerContainer: {
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '60%',
            width: '100%',
        },
        goalNumberText: {
            fontSize: 20,
            textAlign: 'center',
        }

    });


    return (

            <View style={styles.innerContainer}>
                <View style={styles.goalNumberContainer}>
                    <TextInput style={styles.goalNumberText}>
                        0
                    </TextInput>
                </View>
                <View style={styles.progressBarContainer}>
                    <View style={styles.backgroundProgressBar}>

                    </View>
                    <View style={styles.progressBar}>

                    </View>

                </View>
            </View>

    );

}

export default CategoryGoalBar;
