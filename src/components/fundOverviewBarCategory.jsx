import React, { createRef, useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid, TextInput, Animated } from 'react-native';
import { FlingGestureHandler } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
var mode;
var oldAmount;
function FundOverviewBarCategory(props) {
   
    
    const styles = StyleSheet.create({
        container: {
            height: 45,
            width: '97%',
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            marginBottom: 5,
            borderRadius: 10,
            flexDirection: 'row',
            backgroundColor: '#385782',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
        
        },
        innerContainerText: {
            flex: 2.5,
            height: '100%',
            borderRadius: 10,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#385782',
        },
        innerContainerTextPositive: {
            flex: 1.63,
            marginRight: '3%',
            height: '70%',
            borderRadius: 6,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#05845D',
        },
        innerContainerTextNegative: {
            flex: 1.63,
            marginRight: '3%',
            height: '70%',
            borderRadius: 6,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#85041C',
        },
        innerContainerAmount: {
        },
        textText: {
            paddingLeft: 0,
            fontSize: 17,
            color: 'white',
            marginLeft: '5%',
        },
        textAmount: {
            top: '5%',
            height: '100%',
            width: '100%',
            textAlign: 'center',
            fontSize: 20,
            color: 'white',
        }
    })
 

   
    return (
        <View style={{
            height: 50,
            width: '100%'
        }}>
                <View style={styles.container}>
                    <View style={styles.innerContainerText}>
                        <Text style={styles.textText} >{props.name}</Text>
                    </View>
                    <View style={parseInt(props.available) >= 0 ? styles.innerContainerTextPositive : styles.innerContainerTextNegative}>
                        <Text
                            style={styles.textAmount} >
                            {props.available}
                        </Text>
                    </View>
                </View>
                </View>
    
    );
}
const mapStateToProps = (state, ownProps) => {
    const { groupData, fund } = state
    const { groupID, categoryID } = ownProps
    return {
        name: groupData.groups[groupID].categories[categoryID].name,
        available: fund.groups[groupID].categories[categoryID].available
    }
};

export default connect(mapStateToProps)(FundOverviewBarCategory)
