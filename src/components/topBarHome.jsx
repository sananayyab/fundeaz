import { StatusBar } from 'expo-status-bar';
import React from 'react';
import TopBarItem from './topBarItem.jsx'
import { StyleSheet, Text, View } from 'react-native';

class TopBar extends React.Component
{

    render()
    {
        const styles = StyleSheet.create({
            container: {
                flex: 1,


                marginTop: '2%',
                marginLeft: '3%',
                marginRight: '3%',
            
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                
                backgroundColor: 'rgba(128,128,128,0.4)',



            },
     


        })


        return (
            <View style={ styles.container }>
               
                    <TopBarItem />
                    <TopBarItem />
              

            </View>
        );
    }
}



export default TopBar
