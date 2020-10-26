import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import TopBar from '../components/topBarHome';
import CategorySection from '../components/categorySection';
class HomePage extends React.Component
{
    render()
    {
        return (
            <View style={ styles.container }>
                <TopBar />
                <CategorySection/>


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

export default HomePage;
