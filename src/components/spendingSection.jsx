import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SpendingItem from './spendingItem.jsx';
class SpendingSection extends React.Component
{

    render()
    {
        const styles = StyleSheet.create({
            container: {
                flex: 1,


                marginTop: 20,
                marginLeft: '3%',
                marginRight: '3%',
                maxHeight: '90%',
                borderRadius: 10,
                flexDirection: 'column',
                backgroundColor: 'rgba(128,128,128,0.4)',
                justifyContent: 'space-around',
              
               
                alignItems: 'center'


            },
            innerContainer: {
                paddingRight: "5%",
                paddingLeft: "5%",
                flex: 1,
               
               
                
            },


        })


        return (
            <View style={ styles.container }>
                <SpendingItem/>
                <SpendingItem />
                <SpendingItem />
               
            </View>
        );
    }
}



export default SpendingSection
