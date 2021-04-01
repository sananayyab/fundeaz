
import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity ,StatusBar} from 'react-native';

import TopBar from '../components/topBarHome.jsx';
import CategorySection from '../components/categorySection.jsx';
import BottomBar from '../components/bottomBar.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TransactionSection from '../components/transactionSection';
class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.loadCategoryList = this.loadCategoryList.bind(this)
 
    }

    loadCategoryList()
    {
        this.props.navigation.navigate('GroupList', {
            page: 'home'
        })
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
                paddingTop: "5%",
                paddingBottom:"5%",
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
              <StatusBar style="light"/>
                <View style={styles.topContainer}>
                    <TopBar section={'home'} navigation={this.props.navigation} />
                </View>
                <View style={styles.categoryContainer}>
                 
                    <CategorySection section={"group"} page={'home'} style={{ flex: 1 }} navigation={this.props.navigation} />
                </View>
                <View style={styles.spendingContainer}>
                
                    <TransactionSection page={'home'}navigation={this.props.navigation}/>
                </View>
                <View style={styles.bottomBar}>
                    <BottomBar data={{
                        page: 'home',
                        type: 'landing'
                    }} navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
}
export default HomePage;
