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
class TransactionInput extends React.Component {
    constructor(props) {
        super(props)
        this.addTransaction = this.addTransaction.bind(this)
        this.getData = this.getData.bind(this)
        this.data = {
            amount: '',
            payee: '',
            date: '',
            note: '',
            groupID: '',
            categoryID: '',
            categoryName: '',

        }
        this.pageDetails = {
            pageName: this.props.route.params.page,
            groupID: this.props.route.params.groupID
            

        }
    }

    getData(value) {
        this.data = {
            ...this.data,
            ...value
        }
    }


    addTransaction() {

        if (this.data.type === 'category') {
            this.props.addTransaction(this.data)
            this.props.updateSpending(parseInt(this.data.amount), this.data.groupID, parseInt(this.data.categoryID))
            this.props.navigation.goBack()


        }
        else if (this.data.type === 'Income') {
            this.props.addTransaction(this.data)
            this.props.addTotalAvailable(parseInt(this.data.amount))
            this.props.navigation.goBack()
        }

    }

    render() {
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

                        <TransactionInputFieldNumber data={this.getData} fieldName={'amount'} value={''}/>
                        <TransactionInputFieldText data={this.getData} value={''} fieldName={'payee'} />
                        <TransactionInputFieldDate data={this.getData}  value={''} fieldName={'date'} />
                        <TransactionInputFieldText data={this.getData} value={''} fieldName={'note'} />
                        <TransactionInputFieldCategory data={this.getData} categoryID={''} groupid={''}page= {this.pageDetails}fieldName={'category'} />

                    </View >
                    <View style={styles.buttonField}>


                        <View styles={styles.buttonStyle}>

                            <Icon.Button
                                backgroundColor='#7C7D8D'
                                color='black'
                                name="check"
                                size={40}
                                onPress={this.addTransaction}
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


const mapDispatchToProps = (dispatch) => {
    return {
        addTransaction: (data) => dispatch(addTransaction(data)),
        updateSpending: (amount, groupID, categoryID) => dispatch(spendCategory(amount, groupID, categoryID)),
        addTotalAvailable: (amount) => dispatch(addTotalAvailable(amount))



    }
}

export default connect(null, mapDispatchToProps)(TransactionInput)


