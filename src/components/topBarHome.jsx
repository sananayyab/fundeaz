import { StatusBar } from 'expo-status-bar';
import React from 'react';
import TopBarItem from './topBarItem.jsx'
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
class TopBar extends React.Component
{
    constructor(props)
    {
        super(props)
        this.navigationToDetails = this.navigationToDetails.bind(this);
    }
    navigationToDetails( )
    {
        this.props.navigation.navigate('GroupPage')
        ToastAndroid.show("test",ToastAndroid.SHORT)
    }
    render()
    {
        const styles = StyleSheet.create({
            container: {
                flex: 0.8,
                marginTop: '3%',
                marginLeft: '3%',
                marginRight: '3%',
                borderRadius: 10,
                flexDirection: 'column',
                alignItems: 'center',
                
            },
        })
        return (
            <TouchableOpacity
                style={ styles.container }
                onPress={ this.navigationToDetails }
                activeOpacity={ 1 }>
                <TopBarItem style={ { flex: 1 } } name={this.props.name}/>
                <TopBarItem style={ { flex: 1 } } name={this.props.name}/>
            </TouchableOpacity>
        );
    }
}
export default TopBar
