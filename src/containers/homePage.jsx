
import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity, StatusBar } from 'react-native';
import { registerRootComponent } from 'expo';
import TopBar from '../components/topBarHome.jsx';
import CategorySection from '../components/categorySection.jsx';
import BottomBar from '../components/bottomBar.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons'; 
import TransactionSection from '../components/transactionSection';
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
                height: 53,
                    backgroundColor: '#C8C8C8',
                    
            },
            TransactionButton:{
                width: '9%',
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
                marginBottom: '4%',
                alignSelf: 'flex-start',
                flexDirection: 'row',

                marginRight: '2%',
                    height: 53,
                    backgroundColor: '#C8C8C8',
                    
            },
            lines: {
                alignSelf: 'center',
                marginLeft:10,
                height:80,
                            backgroundColor: 'black',
                            width:3,

            }
      
        });
        return (
            <View style={styles.container}>
                 <StatusBar style="default"/>
                <View style={styles.topContainer}>
                    <TopBar navigation={this.props.navigation} />
                </View>
                <View style={styles.lowerContainer}>
                    
                  
                    <CategorySection section={"group"} style={{ flex: 1 }} navigation={this.props.navigation} />
                    <TouchableOpacity style={styles.categoryButton}>
                    <Feather name="list" size={30} color="black" style={{top: 12, left: 3}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.spendingContainer}>
                    <TransactionSection  />
                    <TouchableOpacity style={styles.TransactionButton}>
                    <Feather name="list" size={30} color="black" style={{top: 12, left: 3}}/>
              
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
