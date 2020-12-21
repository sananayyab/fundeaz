import React from 'react';
import { StyleSheet,Keyboard, Text, ScrollView, View, ToastAndroid, TouchableOpacity, StatusBar, KeyboardAvoidingView, SafeAreaView,TouchableWithoutFeedback } from 'react-native';
import TransactionInputFieldText from '../components/transactionInputFieldText.jsx'
import TransactionInputFieldNumber from '../components/transactionInputFieldNumber.jsx'
import TransactionInputFieldDate from '../components/transactionInputFieldDate.jsx'
import TransactionInputFieldCategory from '../components/transactionInputFieldCategory.jsx'

class TransactionInput extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: 'white',
            
            },
            amountField: {
                height: 50,
            },
            inputFields: {
                flex: 2,
                top: '5%',
                width: '96%',
                left: '2%',
                borderRadius: 15,
                backgroundColor: '#7C7D8D'
            },
            buttonField: {
                flex: 1,
                backgroundColor: 'blue'
            },
        });

        return (
       
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }} >

                    <View style={styles.inputFields}>

                        <TransactionInputFieldNumber fieldName={'Amount'} />
                        <TransactionInputFieldText fieldName={'Payee'} />
                        <TransactionInputFieldDate fieldName={'Date'} />
                        <TransactionInputFieldText fieldName={'Note'} />
                        <TransactionInputFieldCategory fieldName={'Category'} />

                    </View >
                    <View style={styles.buttonField}>

                    </View>
            
           
            </KeyboardAvoidingView>
         
        );
    }
}
export default TransactionInput

