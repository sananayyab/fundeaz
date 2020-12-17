
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
        this.loadCategoryList = this.loadCategoryList.bind(this)
    }

    loadCategoryList()
    {
        this.props.navigation.navigate('CategoryList', {
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
              <StatusBar style="default"/>
                <View style={styles.topContainer}>
                    <TopBar section={'home'} navigation={this.props.navigation} />
                </View>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity style={styles.categoryButton}
                    onPress={this.loadCategoryList}>
                        <View style={styles.lines} />
                    </TouchableOpacity>
                    <CategorySection section={"group"} style={{ flex: 1 }} navigation={this.props.navigation} />
                </View>
                <View style={styles.spendingContainer}>
                
                    <TransactionSection page={'home'}navigation={this.props.navigation}/>
                </View>
                <View style={styles.bottomBar}>
                    <BottomBar />
                </View>
            </View>
        );
    }
}
export default HomePage;
