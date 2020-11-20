import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity } from 'react-native';
import { registerRootComponent } from 'expo';
import TopBar from '../components/topBarHome.jsx';
import CategorySection from '../components/categorySection.jsx';
import BottomBar from '../components/bottomBar.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SpendingSection from '../components/transactionSection.jsx';
import { Feather } from '@expo/vector-icons';
class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'white',
            },
            topContainer: {
                flex: 4
            },
            categoryContainer: {
                flex: 8,
                flexDirection: 'column'
            },
            spendingContainer: {
                flex: 12,
                flexDirection: 'column'
            },
            bottomBar:
            {
                paddingTop: '4%',
                paddingBottom: '3%',
                flex: 1
            },
            categoryButton: {
                marginLeft: '2%',
                marginRight: '2%',
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
                height: '12%',
                backgroundColor: '#8D8D92',
            },

            lines: {
                alignSelf: 'center',
                marginTop: '1.5%',
                height: '50%',
                borderRadius: 30,
                backgroundColor: '#C8C8C8',
                width: '30%',
            }
        });
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <TopBar navigation={this.props.navigation} />
                </View>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity style={styles.categoryButton}>
                        <View style={styles.lines} />
                    </TouchableOpacity>
                    <CategorySection section={"group"} style={{ flex: 1 }} navigation={this.props.navigation} />
                </View>
                <View style={styles.spendingContainer}>
                
                    <SpendingSection />
                </View>
                <View style={styles.bottomBar}>
                    <BottomBar />
                </View>
            </View>
        );
    }
}
export default HomePage;
