import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import SpendingItem from './spendingItem.jsx';
class SpendingSection extends React.Component
{

    render()
    {
        const styles = StyleSheet.create({
            container: {
                flex: 1,


          
                marginLeft: '2%',
            
                borderBottomLeftRadius: 15,
                borderTopLeftRadius: 15,
                borderBottomRightRadius: 15,
              
                backgroundColor: '#8D8D92',
    

            },
            innerContainer: {
                paddingRight: "5%",
                paddingLeft: "5%",
                flex: 1,
               
               
                
            },


        })


        return (
            <ScrollView style={ styles.container } showsVerticalScrollIndicator ={false}
            showsHorizontalScrollIndicator={false}>
               <SpendingItem/>
               <SpendingItem/>
               <SpendingItem/>
                 <SpendingItem/>
               <SpendingItem/>
               <SpendingItem/>
               
               
            </ScrollView>
        );
    }
}



export default SpendingSection
