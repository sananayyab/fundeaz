import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import TranscationAdding from '../components/transactionAdditionSection.jsx'
class App extends React.Component
{
    render()
    {
        return (
            <View style={ styles.container }>
                <TranscationAdding style={{flex: 1}} />
               
           
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default registerRootComponent(App);
