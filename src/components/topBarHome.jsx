import { StatusBar } from 'expo-status-bar';
import React from 'react';
import TopBarItem from './topBarItem.jsx'
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native';

class TopBar extends React.Component
{
    test()
    {
        ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
    }

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

            <TouchableOpacity

                style={ styles.container }
                onPress={ this.test }
                activeOpacity={ 1 }>
                <TopBarItem style={ { flex: 1 } } />
                <TopBarItem style={ { flex: 1 } } />
            </TouchableOpacity>


        );
    }
}



export default TopBar
