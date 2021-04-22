
import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity, StatusBar } from 'react-native';
import TopBar from '../components/topBarHome.jsx';
import SpentSection from '../components/spentSection';
import BottomBar from '../components/bottomBar.jsx';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionSection from '../components/transactionSection';


function CategoryPage (props){

    const route = useRoute();
    const navigation = useNavigation();


    const categoryID = categoryID;
    const groupID = route.params.groupID; 
    const name = route.params.name;

        const styles = StyleSheet.create({
            container: {
                
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'white',
            },
            topContainer: {
                flex: 5
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
                paddingTop: '5%',
                paddingBottom: '5%',
                flex: 2
            },
            categoryButton: {
                marginLeft: '2%',
                marginRight: '2%',
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
                height: '12%',
                backgroundColor: '#7C7D8D',
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
              <StatusBar style="default"/>
                <View style={styles.topContainer}>
                    <TopBar section={'category'} groupID={groupID} categoryID={categoryID} navigation={navigation} />
                </View>
                <View style={styles.categoryContainer}>
                  
                    <SpentSection section={"category"} page={'group'}groupName={name} groupID={groupID}  style={{ flex: 1 }} navigation={navigation} />
                </View>
                <View style={styles.spendingContainer}>
                
                    <TransactionSection page={'category'} groupID={groupID} categoryID={categoryID} navigation={navigation}/>
                </View>
                <View style={styles.bottomBar}>
                    <BottomBar data={{
                        page: 'category',
                        groupID: groupID,
                        categoryID: categoryID,
                        type: 'landing'
                    }} navigation={navigation}/>
                </View>
            </View>
        );
    }

export default CategoryPage
  
