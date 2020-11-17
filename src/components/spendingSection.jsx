import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SpendingItem from './spendingItem.jsx';
class SpendingSection extends React.Component
{

    render()
    {
        const styles = StyleSheet.create({
            container: {
                flex: 1,


          
                marginLeft: '3%',
                marginRight: '3%',
                maxHeight: '90%',
                borderRadius: 10,
                flexDirection: 'column',
                backgroundColor: '#8D8D92',
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
               <SpendingItem/>
               <SpendingItem/>
               
            </View>
        );
    }
}



export default SpendingSection
