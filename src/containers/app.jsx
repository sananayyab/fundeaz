import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import HomePage from './homePage.jsx';
import GroupPage from './groupPage.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore} from 'redux'
import {Provider} from 'react-redux'
import Store from '../reducer/store'
import homepageReducer from '../reducer/homepageReducer'
class App extends React.Component
{
   
    render()
    {
        const store = createStore(homepageReducer);
        const Stack = createStackNavigator();
        return (
            
            <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="HomePage">
                    <Stack.Screen name="HomePage" component={ HomePage } />
                    <Stack.Screen name="GroupPage" component={ GroupPage} />
                </Stack.Navigator>
                </NavigationContainer>
                </Provider>
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
