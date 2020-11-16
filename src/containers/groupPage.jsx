import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import TopBar from '../components/topBarHome.jsx';
import InformationSection from '../components/informationSection.jsx'; 
import BottomBar from '../components/bottomBar.jsx';


class GroupPage extends React.Component
{



    constructor(props)
    {
        super(props)
        
   
    }

 
    render()
    {
        
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
        return (
            <View style={ styles.container }>
                <View style={ styles.topContainer }>
                    
                    <TopBar name={this.props.route.params.name}/>
                </View>
                <View style={ styles.lowerContainer }>
                    <InformationSection style={ { flex: 1 } }  />
                </View>
                <View style={ styles.bottomBar } >
                    <BottomBar />
                </View>
            </View>
        );
    }
}


export default GroupPage;
