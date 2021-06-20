import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, TextInput, View} from 'react-native';
import {setGoalAmount} from '../action/fundActions';
import {connect} from 'react-redux';


function CategoryGoalBar(props)
{





    let initialPercent = 0;
    let border  = 0;
    if(props.available > props.goalAmount)
    {
        initialPercent = 100
        border = 20
    }
    else {
        initialPercent = (props.available/props.goalAmount) * 100
    }

    const percentage = useRef(new Animated.Value(initialPercent)).current;

    const borderRadius = useRef(new Animated.Value(border)).current;

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
            height: 50,
            width: 150,

            marginTop: 20,
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
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 20,

            left: 0,
            height: '70%',
            position: 'absolute',

            backgroundColor: '#98D4B0',
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
        },

    });


    return (

        <View style={styles.innerContainer}>
            <View style={styles.goalNumberContainer}>
                <TextInput style={styles.goalNumberText}
                           selectTextOnFocus={true}
                           keyboardType={'numeric'}
                           onChangeText={(text) =>
                           {
                               props.setGoalAmount(text.trim())


                           }}
                            onEndEditing={(event)  => {
                              Animated.parallel( [ Animated.timing(percentage, {
                                    toValue:   ((props.available/parseInt(event.nativeEvent.text.trim())) * 100 > 100 ? 100: (props.available/parseInt(event.nativeEvent.text.trim())) * 100),
                                    duration: 150,
                                    useNativeDriver: false,
                                }), Animated.timing(borderRadius, {
                                  toValue:   ((props.available/parseInt(event.nativeEvent.text.trim())) * 100 >= 100 ?  20 : 0),
                                  duration: 150,
                                  useNativeDriver: false})]).start();
                            }}>
                    {props.goalAmount}
                </TextInput>
            </View>
            <View style={styles.progressBarContainer}>
                <View style={styles.backgroundProgressBar}>

                </View>
                <Animated.View style={[styles.progressBar, {
                    width: percentage.interpolate({
                        inputRange: [0, 100],
                        outputRange: ['0%', '100%'],
                    }),
                    borderBottomRightRadius: borderRadius,
                    borderTopRightRadius: borderRadius

                }]}/>



            </View>
        </View>


    );

}

const mapStateToProps = (state, ownProps) =>
{
    const {fund} = state;
    const { categoryID} = ownProps;
    return {
        goalAmount: fund.categories[categoryID].goal,
        available: fund.categories[categoryID].available,
    };
};
const mapDispatchToProps = (dispatch, ownProps) =>
{
    const { categoryID} = ownProps;
    return {
        setGoalAmount: (amount) => dispatch(setGoalAmount(categoryID, amount)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryGoalBar);

