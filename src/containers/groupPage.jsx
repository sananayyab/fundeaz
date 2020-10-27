import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import TopBar from '../components/topBarHome.jsx';
import SpendingSection from '../components/spendingSection.jsx';
import CategorySection from '../components/categorySection.jsx';
import TransactionSection from '../components/transactionSection.jsx';
class GroupPage extends React.Component
{
    render()
    {
        return (
            <View style={ styles.container }>
                <View style={ styles.topContainer }>
                    <TopBar />
                </View>
                <View style={ styles.lowerContainer }>

                    <TransactionSection style={ { flex: 1 } } />
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        flexDirection: 'column',

        backgroundColor: 'white',
    },
    topContainer: {
        flex: 1

    },
    lowerContainer: {
        flex: 3,



    }
});

export default GroupPage;
