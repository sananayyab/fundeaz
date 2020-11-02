import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ToastAndroid} from 'react-native';
import { registerRootComponent } from 'expo';
import TopBar from '../components/topBarHome';
import CategorySection from '../components/categorySection';
import BottomBar from '../components/bottomBar.jsx';
class HomePage extends React.Component
{
    render()
    {
        return (
            <View style={ styles.container }>
                <View style={ styles.topContainer }>
                  
                        <TopBar />
                 
                </View>
                <View style={ styles.lowerContainer}>
                
                    <CategorySection style={ {flex: 1}}/>
                </View>
                <View style={ styles.bottomBar }>
                    <BottomBar />
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
        flex: 3

    },
    lowerContainer: {
        flex: 10,



    },
    bottomBar:
    {
        flex: 0.8
    }
});

export default HomePage;
