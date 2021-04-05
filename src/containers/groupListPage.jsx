import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity, StatusBar } from 'react-native';
import CategoryList from '../components/categoryList.jsx'
import BottomBar from '../components/bottomBar.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useNavigation , useRoute} from '@react-navigation/native';

function GroupListPage (props) {
  
   
    const navigation = useNavigation();
            var data ={
                page: 'home',
                type: 'category'
            }
        
            
    



 

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'white',
            },
            bottomBar:
            {
                paddingTop: '4%',
                paddingBottom: '3%',
                flex: 2
            },
            list: {
                margin: '2%',
                borderRadius: 15,
                backgroundColor: '#7C7D8D',
                flex: 20,
            }
        });

    
        return (
            <View style={styles.container}>
                <StatusBar style="default" />
                <View style={styles.list}>
                    <CategoryList navigation={navigation}data={data} />
                </View>
                <View style={styles.bottomBar}>
                    <BottomBar data={data} />
                </View>
            </View>
        );
    }

export default GroupListPage 
  

