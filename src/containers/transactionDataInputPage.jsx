import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity, StatusBar } from 'react-native';

class TransactionInput extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: 'white',
            }
        });
       
        return (
            <View style={styles.container}>
               
            </View>
        );
    }
}
export default TransactionInput

