import React from 'react';
import { StyleSheet, ScrollView, View, ToastAndroid, TouchableOpacity, StatusBar, KeyboardAvoidingView, Dimensions, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
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
              marginTop: '2%'

            },
            amountField: {
                height: 50,
            },
            inputFields: {
                flex: 2,
             
                width: '96%',
                left: '2%',
                borderRadius: 15,
                backgroundColor: '#7C7D8D'
            },
            buttonField: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: '3%',
                marginRight: '3%',
                
                flex: 1,
             
                marginTop: 20,
             
             
            
         
            },
            buttonStyle: {
            flex: 1,
              left: 200,
              
            }
        });

        return (

            <KeyboardAwareScrollView
            
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}

            >

                <View style={{ flex: 1 }}>

                <StatusBar style="default" />
                    <View style={styles.inputFields}>

                        <TransactionInputFieldNumber fieldName={'Amount'} />
                        <TransactionInputFieldText fieldName={'Payee'} />
                        <TransactionInputFieldDate fieldName={'Date'} />
                        <TransactionInputFieldText fieldName={'Note'} />
                        <TransactionInputFieldCategory fieldName={'Category'} />

                    </View >
                    <View style={styles.buttonField}>
                    
                        <View styles={styles.buttonStyle}>
                          
                            <MaterialIcons.Button
                                backgroundColor='#7C7D8D'
                                color='black'
                                name="clear"
                                size={40}
                                iconStyle={{
                                    
                                    marginRight: 0,
                                    paddingRight: '10%',
                                    paddingLeft: '10%',
                            
                                }} 
                                />
                                
                        </View>
                    
                        <View styles={styles.buttonStyle}>
                          
                            <MaterialIcons.Button
                                backgroundColor='#7C7D8D'
                                color='black'
                                name="check"
                                size={40}
                                iconStyle={{
                                    
                                    marginRight: 0,
                                    paddingRight: '10%',
                                    paddingLeft: '10%',
                            
                                }} 
                                />
                                
                        </View>
                    </View>

                </View>

            </KeyboardAwareScrollView>

        );
    }
}
export default TransactionInput

