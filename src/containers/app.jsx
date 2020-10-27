import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import GroupPage from './groupPage.jsx';
class App extends React.Component
{
    render()
    {
        return (
            <View style={ styles.container }>
                <GroupPage />
               
           
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
