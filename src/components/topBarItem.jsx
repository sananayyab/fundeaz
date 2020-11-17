import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
class TopBarItem extends React.Component {
    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                marginLeft: '3%',
                marginRight: '3%',
               
                borderRadius: 10,
                flexDirection: 'row',
               
            },
            innerContainerAmount: {
                flex: 0.8,
                height: '80%',
                paddingRight: "5%",
                paddingLeft: "5%",
                borderRadius: 5,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1D2D44',
            },
            innerContainerText: {
                flex: 0.5,
                
                top:8,
                height: '53%',
                paddingRight: "5%",
                paddingLeft: "5%",
                borderBottomRightRadius: 5,
                borderTopRightRadius: 5,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#05845D',
            },
            textAmount: {
                fontSize: 23,
                color: 'white',
            },
            textText: {
                fontSize: 23,
                color: 'white',
            }
        })
        return (
            <View style={styles.container}>
                <View style={styles.innerContainerAmount}>
                    
                    <Text style={styles.textAmount} >6000.50</Text>
                </View>
                <View style={styles.innerContainerText}>
                    <Text style={styles.textText}>Available</Text>
                   
                </View>
            </View>
        );
    }
}
export default TopBarItem
