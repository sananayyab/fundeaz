
import React from 'react';
import { StyleSheet, Text, ToastAndroid, View, TouchableOpacity } from 'react-native';
function SpentItem (props) {


   
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                marginLeft: '4%',
                marginRight: '4%',
                marginBottom: '5%',
                borderRadius: 10,
                backgroundColor: '#385782',
                justifyContent: 'center',
             
            },
            nameContainer: {
                marginLeft: '8%',
                marginRight: '8%',
                height: '28%',
                borderRadius: 5,
                justifyContent: 'center',
                marginBottom: '15%',
                backgroundColor: '#1D2D44'
            },

            amountContainerPositive: {
                marginLeft: '8%',
                marginRight: '8%',
                height: '28%',
                borderRadius: 5,


                justifyContent: 'center',
                backgroundColor: '#05845D',
            },
            amountContainerNegative: {
                marginLeft: '8%',
                marginRight: '8%',
                height: '28%',
                borderRadius: 5,


                justifyContent: 'center',
                backgroundColor: '#85041C',
            },
            amountContainer: {

                marginLeft: '8%',
                marginRight: '8%',
                height: '28%',
                borderRadius: 5,


                justifyContent: 'center',
                backgroundColor: '#C1D0E4'
            },
            textView: {
                color: 'white',
                fontSize: 21,
                textAlign: 'center',

            },
            Nametext: {
                color: 'white',
                fontSize: 15,
                textAlign: 'center',


            }
        })
        return (
            <View style={styles.container}>
                <View style={styles.nameContainer}>
                    <Text style={styles.Nametext}>
                        {props.name}
                    </Text>

                </View>
                <View style={styles.amountContainer}>

                    <Text style={styles.textView} >
                        {props.amount}
                        </Text>
                </View>
            </View>
        );
    }

export default SpentItem
