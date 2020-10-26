import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SpendingItem extends React.Component
{


    render()
    {
        const styles = StyleSheet.create({
            container: {
                flex: 1,



                marginLeft: '3%',
                marginRight: '3%',
                height: '40%',
                width: '48%',
                minWidth: '44%',
                minheight: '40%',
                maxWidth: '48%',
                maxheight: '40%',
                borderRadius: 10,
                backgroundColor: 'rgba(128,128,128,1)',



            },
            innerContainer: {
                paddingRight: "5%",
                paddingLeft: "5%",
                flex: 1,
                paddingTop: '12%',
                paddingBottom: '12%',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center'
            },
            text: {
                fontSize: 23,

            }


        })


        return (
            <View style={ styles.container }>
                <View style={ styles.innerContainer }>
                    <Text style={ styles.text }>Category</Text>
                    <Text style={ styles.text } >Amount</Text>
                </View>

            </View>
        );
    }
}



export default SpendingItem
