
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import HomePage from './homePage.jsx';
import GroupPage from './groupPage.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore} from 'redux'
import {Provider} from 'react-redux'
import {store, persistor} from '../reducer/store'
import homepageReducer from '../reducer/homepageReducer'
import { PersistGate } from 'redux-persist/integration/react';
class App extends React.Component
{
   

    constructor(props)
    {
        super(props)
        persistor.purge()
    }
    render()
    {
       
        const Stack = createStackNavigator();
        return (
            
            <Provider store={store}>

                <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="HomePage" 
                 screenOptions={{headerShown: false}}>
                    <Stack.Screen name="HomePage" component={ HomePage } />
                    <Stack.Screen name="GroupPage" component={ GroupPage} />
                </Stack.Navigator>
                </NavigationContainer>
                </PersistGate>
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
