import React from 'react';
import { StyleSheet, ScrollView, View, ToastAndroid, TouchableOpacity, StatusBar, KeyboardAvoidingView, Dimensions, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { spendCategory, addTotalAvailable } from '../action/fundActions.jsx'
import { addTransaction } from '../action/transactionActions.jsx'
import TransactionInputFieldText from '../components/transactionInputFieldText.jsx'
import TransactionInputFieldNumber from '../components/transactionInputFieldNumber.jsx'
import TransactionInputFieldDate from '../components/transactionInputFieldDate.jsx'
import TransactionInputFieldCategory from '../components/transactionInputFieldCategory.jsx'
function TransactionInput (props) {
   

        var data = {
            amount: '',
            payee: '',
            date: '',
            note: '',
            groupID: '',
            categoryID: '',
            categoryName: '',

        }
        const pageDetails = {
            pageName: props.route.params.page,
            groupID: props.route.params.groupID
            

        }
    

    function getData(value) {
        data = {
            ...data,
            ...value
        }
    }


    function addTransaction() {

        if (data.type === 'category') {
            props.addTransaction(data)
            props.updateSpending(parseInt(data.amount), data.groupID, parseInt(data.categoryID))
            props.navigation.goBack()


        }
        else if (data.type === 'Income') {
            props.addTransaction(data)
            props.addTotalAvailable(parseInt(data.amount))
            props.navigation.goBack()
        }

    }

    
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: 'white',
                marginTop: '2%', 
            

            },
            amountField: {
                height: 50,
            },
            inputFields: {
                flex: 3,

                width: '96%',
                left: '2%',
                borderRadius: 15,
                backgroundColor: '#7C7D8D'
            },
            buttonField: {
            
                alignItems: 'center',
                marginLeft: '3%',
                marginRight: '3%',
           
                flex: 1,

                marginTop: '20%',




            },
            buttonStyle: {
                flex: 1,
                left: 100,
            

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

                        <TransactionInputFieldNumber data={getData} fieldName={'amount'} value={''}/>
                        <TransactionInputFieldText data={getData} value={''} fieldName={'payee'} />
                        <TransactionInputFieldDate data={getData}  value={''} fieldName={'date'} />
                        <TransactionInputFieldText data={getData} value={''} fieldName={'note'} />
                        <TransactionInputFieldCategory data={getData} categoryID={''} groupid={''}page= {pageDetails}fieldName={'category'} />

                    </View >
                    <View style={styles.buttonField}>


                        <View styles={styles.buttonStyle}>

                            <Icon.Button
                                backgroundColor='#7C7D8D'
                                color='black'
                                name="check"
                                size={40}
                                onPress={addTransaction}
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


const mapDispatchToProps = (dispatch) => {
    return {
        addTransaction: (data) => dispatch(addTransaction(data)),
        updateSpending: (amount, groupID, categoryID) => dispatch(spendCategory(amount, groupID, categoryID)),
        addTotalAvailable: (amount) => dispatch(addTotalAvailable(amount))



    }
}

export default connect(null, mapDispatchToProps)(TransactionInput)


