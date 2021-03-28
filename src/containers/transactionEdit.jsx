import React from 'react';
import { StyleSheet, ScrollView, View, ToastAndroid, TouchableOpacity, StatusBar, KeyboardAvoidingView, Dimensions, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import { spendCategory, addTotalAvailable, removeSpendCategory, removeTotalAvailable, spendOnlyCategory, removeSpendOnlyCategory } from '../action/fundActions.jsx'
import { addTransaction, removeTransaction, updateTransaction } from '../action/transactionActions.jsx'
import TransactionInputFieldText from '../components/transactionInputFieldText.jsx'
import TransactionInputFieldNumber from '../components/transactionInputFieldNumber.jsx'
import TransactionInputFieldDate from '../components/transactionInputFieldDate.jsx'
import TransactionInputFieldCategory from '../components/transactionInputFieldCategory.jsx'

class TransactionEdit extends React.Component {
    constructor(props) {
        super(props)
        this.addTransaction = this.addTransaction.bind(this)
        this.deleteTransaction = this.deleteTransaction.bind(this)
        this.getData = this.getData.bind(this)
        this.data = {
            ...this.props.transactions[this.props.route.params.key]

        }
        this.orignalAmount = this.data.amount
        this.originalGroup = this.data.groupID
        this.originalCategory = this.data.categoryID



    }

    getData(value) {
        this.data = {
            ...this.data,
            ...value
        }
    }

    deleteTransaction() {
        this.props.removeTransaction(this.props.route.params.key);
        if (this.data.type === 'category') {

            this.props.removeSpending(parseInt(this.data.amount), this.data.groupID, parseInt(this.data.categoryID));
            this.props.navigation.goBack()


        }
        else if (this.data.type === 'Income') {


            this.props.removeTotalAvailable(parseInt(this.data.amount))
            this.props.navigation.goBack()
        }


    }

    addTransaction() {

        this.props.updateTransaction(this.data, this.props.route.params.key)
        if (this.data.type === 'category') {

            if (this.originalGroup === this.data.groupID && this.originalCategory === this.data.categoryID) {
                if (parseInt(this.orignalAmount) < parseInt(this.data.amount)) {

                    this.props.updateSpending(parseInt(this.data.amount) - parseInt(this.orignalAmount), this.data.groupID, parseInt(this.data.categoryID))

                }
                else if (parseInt(this.orignalAmount) > parseInt(this.data.amount)) {
                    this.props.removeSpending(parseInt(this.orignalAmount) - parseInt(this.data.amount), this.data.groupID, parseInt(this.data.categoryID));

                }

            }
            else {
                if (this.originalGroup === this.data.groupID && this.originalCategory !== this.data.categoryID) {
                    if (parseInt(this.orignalAmount) < parseInt(this.data.amount)) {

                        this.props.spendOnlyCategory(parseInt(this.data.amount) - parseInt(this.orignalAmount), this.data.groupID, parseInt(this.data.categoryID))
                        this.props.removeSpendOnlyCategory(parseInt(this.orignalAmount), this.originalGroup, parseInt(this.originalCategory));

                    }
                    else if (parseInt(this.orignalAmount) > parseInt(this.data.amount)) {
                        this.props.spendOnlyCategory(parseInt(this.orignalAmount) - parseInt(this.data.amount), this.data.groupID, parseInt(this.data.categoryID));
                        this.props.removeSpendOnlyCategory(parseInt(this.orignalAmount), this.originalGroup, parseInt(this.originalCategory));
                    }
                    else{

                        this.props.spendOnlyCategory(parseInt(this.orignalAmount), this.data.groupID, parseInt(this.data.categoryID))
                        this.props.removeSpendOnlyCategory(parseInt(this.orignalAmount), this.originalGroup, parseInt(this.originalCategory));
                    }
                }else{
                    if (parseInt(this.orignalAmount) < parseInt(this.data.amount)) {

                        this.props.updateSpending(parseInt(this.data.amount) - parseInt(this.orignalAmount), this.data.groupID, parseInt(this.data.categoryID))
                        this.props.removeSpending(parseInt(this.orignalAmount), this.originalGroup, parseInt(this.originalCategory));

                    }
                    else if (parseInt(this.orignalAmount) > parseInt(this.data.amount)) {
                        this.props.updateSpending(parseInt(this.orignalAmount) - parseInt(this.data.amount), this.data.groupID, parseInt(this.data.categoryID));
                        this.props.removeSpending(parseInt(this.orignalAmount), this.originalGroup, parseInt(this.originalCategory));
                    }
                    else{

                        this.props.updateSpending(parseInt(this.orignalAmount), this.data.groupID, parseInt(this.data.categoryID))
                        this.props.removeSpending(parseInt(this.orignalAmount), this.originalGroup, parseInt(this.originalCategory));
                    }
                }


            }
        }
        else if (this.data.type === 'Income') {

            if (parseInt(this.orignalAmount) < parseInt(this.data.amount)) {
                this.props.addTotalAvailable(parseInt(this.data.amount) - parseInt(this.orignalAmount))

            }
            else if (parseInt(this.orignalAmount) > parseInt(this.data.amount)) {
                this.props.removeTotalAvailable(parseInt(this.orignalAmount) - parseInt(this.data.amount))

            }


        }

        this.props.navigation.goBack()
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
                flex: 1.8,

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

                        <TransactionInputFieldNumber data={this.getData} fieldName={'amount'} value={this.data.amount} />
                        <TransactionInputFieldText data={this.getData} value={this.data.payee} fieldName={'payee'} />
                        <TransactionInputFieldDate data={this.getData} value={this.data.date} fieldName={'date'} />
                        <TransactionInputFieldText data={this.getData} value={this.data.note} fieldName={'note'} />
                        <TransactionInputFieldCategory data={this.getData} page={{
                            pageName: 'home'
                        }} fieldName={this.data.type}
                            groupID={this.data.groupID}
                            categoryID={this.data.categoryID} />

                    </View >
                    <View style={styles.buttonField}>

                        <View styles={styles.buttonStyle}>

                            <MaterialIcons.Button
                                backgroundColor='#7C7D8D'
                                color='black'
                                name="delete"
                                size={40}
                                onPress={this.deleteTransaction}
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
        removeTransaction: (id) => dispatch(removeTransaction(id)),
        updateSpending: (amount, groupID, categoryID) => dispatch(spendCategory(amount, groupID, categoryID)),
        spendOnlyCategory: (amount, groupID, categoryID) => dispatch(spendOnlyCategory(amount, groupID, categoryID)),
        removeSpending: (amount, groupID, categoryID) => dispatch(removeSpendCategory(amount, groupID, categoryID)),
        removeSpendOnlyCategory: (amount, groupID, categoryID) => dispatch(removeSpendOnlyCategory(amount, groupID, categoryID)),

        addTotalAvailable: (amount) => dispatch(addTotalAvailable(amount)),
        removeTotalAvailable: (amount) => dispatch(removeTotalAvailable(amount)),
        updateTransaction: (data, id) => dispatch(updateTransaction(data, id))



    }
}

const mapStateToProps = (state) => {
    const { transactions } = state
    return {
        transactions: transactions.transactions
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionEdit)

