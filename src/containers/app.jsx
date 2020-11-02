import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import HomePage from './homePage.jsx'
class App extends React.Component
{
    render()
    {
        return (
            <View style={ styles.container }>
                <HomePage style={{flex: 1} }/>
               
           
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: Expo.Constants.statusBarHeight
    },
});

export default registerRootComponent(App);
