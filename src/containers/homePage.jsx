import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ToastAndroid} from 'react-native';
import { registerRootComponent } from 'expo';
import TopBar from '../components/topBarHome.jsx';
import CategorySection from '../components/categorySection.jsx';
import BottomBar from '../components/bottomBar.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
class HomePage extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'white',
            },
            topContainer: {
                flex: 3
            },
            lowerContainer: {
                flex: 10,
            },
            bottomBar:
            {
                flex: 0.8
            }
        });
        return (
            <View style={ styles.container }>
                <View style={ styles.topContainer }>
                    <TopBar navigation={this.props.navigation}/>
                </View>
                <View style={ styles.lowerContainer}>
                    <CategorySection section={"group"}style={ {flex: 1}} navigation={this.props.navigation}/>
                </View>
                <View style={ styles.bottomBar }>
                    <BottomBar />
                </View>
            </View>
        );
    }
}
export default HomePage;
