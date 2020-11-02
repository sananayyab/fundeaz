import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import HomePage from './homePage.jsx';
import GroupPage from './groupPage.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
class App extends React.Component
{
   
    render()
    {
        const Stack = createStackNavigator();
        return (
            
            <NavigationContainer>
                <Stack.Navigator initialRouteName="HomePage">
                    <Stack.Screen name="HomePage" component={ HomePage } />
                    <Stack.Screen name="Groupage" component={ GroupPage} />
                </Stack.Navigator>
                </NavigationContainer>
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
