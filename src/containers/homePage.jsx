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
                flex: 4.5
            },
            lowerContainer: {
                flex: 6.5,
                flexDirection: 'row'
            },
            spendingContainer: {
                
                flex: 14,
                flexDirection: 'row'
            },
            bottomBar:
            {
                paddingTop: '4%',
                paddingBottom: '3%',
                flex: 1.4
            },
            categoryButton:{
                width: '9%',
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
                marginBottom: '4%',
                alignSelf: 'flex-start',
         
                marginRight: '2%',
                    height:'50%',
                    backgroundColor: '#C8C8C8',
                    
            },
            TransactionButton:{
                width: '9%',
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
                marginBottom: '4%',
                alignSelf: 'flex-start',
              
                marginRight: '2%',
                    height:'40%',
                    backgroundColor: '#C8C8C8',
                    
            },
      
        });
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <TopBar navigation={this.props.navigation} />
                </View>
                <View style={styles.lowerContainer}>
                    
                  
                    <CategorySection section={"group"} style={{ flex: 1 }} navigation={this.props.navigation} />
                    <TouchableOpacity style={styles.categoryButton}>
                     
                    </TouchableOpacity>
                </View>
                <View style={styles.spendingContainer}>
                    <SpendingSection  />
                    <TouchableOpacity style={styles.TransactionButton}>
              
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomBar}>
                    <BottomBar />
                </View>
            </View>
        );
    }
}
export default HomePage;
