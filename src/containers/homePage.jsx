import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity } from 'react-native';
import { registerRootComponent } from 'expo';
import TopBar from '../components/topBarHome.jsx';
import CategorySection from '../components/categorySection.jsx';
import BottomBar from '../components/bottomBar.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SpendingSection from '../components/spendingSection.jsx';
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
                flex: 5
            },
            lowerContainer: {
                flex: 6.5,
                flexDirection: 'row'
            },
            spendingContainer: {
                flex: 14,
            },
            bottomBar:
            {
                flex: 1.4
            },
            categoryBotton:{
                width: 10000,
                    backgroundColor: 'white',
                    
            }
        });
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <TopBar navigation={this.props.navigation} />
                </View>
                <View style={styles.lowerContainer}>
                    
                    <TouchableOpacity style={styles.categoryButton}>
                        <Text>
                            test
                        </Text>
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
