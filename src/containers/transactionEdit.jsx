import React, {useState} from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    StatusBar,
    StyleSheet,
    ToastAndroid,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {useHeaderHeight} from '@react-navigation/stack';
import {
    addTotalAvailable,
    removeSpendCategory,
    removeSpendOnlyCategory,
    removeTotalAvailable,
    spendCategory,
    spendOnlyCategory,
} from '../action/fundActions.jsx';
import {addTransaction, removeTransaction, updateTransaction} from '../action/transactionActions.jsx';
import TransactionInputFieldText from '../components/transactionInputFieldText.jsx';
import TransactionInputFieldNumber from '../components/transactionInputFieldNumber.jsx';
import TransactionInputFieldDate from '../components/transactionInputFieldDate.jsx';
import TransactionInputFieldCategory from '../components/transactionInputFieldCategory.jsx';
import {useNavigation} from '@react-navigation/core';


function TransactionEdit(props)
{

    const navigation = useNavigation();
    const [dropDownActive, setDropDown] = useState(false);
    const [categoryFunctionCalledChild, setChild] = useState(false);
    let data = {
        ...props.transactions[props.route.params.key],

    };

    const orignalAmount = data.amount;
    const originalGroup = data.groupID;
    const originalCategory = data.categoryID;
    const oldType = data.type;


    function getData(value)
    {
        data = {
            ...data,
            ...value,
        };
    }

    const handleDropDown = () =>
    {
        setChild(true);

        if (!dropDownActive)
        {
            setDropDown(true);
        }
        else
        {
            setDropDown(false);
        }


    };


    function setDropDownFalse()
    {
        setChild(true);
        setDropDown(false);

    }

    function dropDownKeyboardDismiss()
    {
        if (!categoryFunctionCalledChild)
        {
            setDropDown(false);
        }
        else
        {
            setChild(false);
        }
    }

    function deleteTransaction()
    {
        props.removeTransaction(props.route.params.key);
        if (data.type === 'category')
        {

            props.removeSpending(parseInt(data.amount), data.groupID, parseInt(data.categoryID));
            navigation.goBack();


        }
        else if (data.type === 'Income')
        {


            props.removeTotalAvailable(parseInt(data.amount));
            navigation.goBack();
        }


    }

    function addTransaction()
    {

        if (data.amount.trim() !== '')
        {
            if (data.type === 'category' && oldType === 'category')
            {

                if (originalGroup === data.groupID && originalCategory === data.categoryID)
                {


                    if (parseInt(orignalAmount) < parseInt(data.amount))
                    {


                        props.updateSpending(parseInt(data.amount) - parseInt(orignalAmount), data.groupID, parseInt(data.categoryID));

                    }
                    else if (parseInt(orignalAmount) > parseInt(data.amount))
                    {


                        props.removeSpending(parseInt(orignalAmount) - parseInt(data.amount), data.groupID, parseInt(data.categoryID));

                    }

                }
                else
                {
                    if (originalGroup === data.groupID && originalCategory !== data.categoryID)
                    {

                        if (parseInt(orignalAmount) < parseInt(data.amount))
                        {


                            props.spendOnlyCategory(parseInt(data.amount) - parseInt(orignalAmount), data.groupID, parseInt(data.categoryID));
                            props.removeSpendOnlyCategory(parseInt(orignalAmount), originalGroup, parseInt(originalCategory));

                        }
                        else if (parseInt(orignalAmount) > parseInt(data.amount))
                        {


                            props.spendOnlyCategory(parseInt(orignalAmount) - parseInt(data.amount), data.groupID, parseInt(data.categoryID));
                            props.removeSpendOnlyCategory(parseInt(orignalAmount), originalGroup, parseInt(originalCategory));
                        }
                        else
                        {


                            props.spendOnlyCategory(parseInt(orignalAmount), data.groupID, parseInt(data.categoryID));
                            props.removeSpendOnlyCategory(parseInt(orignalAmount), originalGroup, parseInt(originalCategory));
                        }
                    }
                    else
                    {

                        if (parseInt(orignalAmount) < parseInt(data.amount))
                        {


                            props.updateSpending(parseInt(data.amount) - parseInt(orignalAmount), data.groupID, parseInt(data.categoryID));
                            props.removeSpending(parseInt(orignalAmount), originalGroup, parseInt(originalCategory));

                        }
                        else if (parseInt(orignalAmount) > parseInt(data.amount))
                        {


                            props.updateSpending(parseInt(orignalAmount) - parseInt(data.amount), data.groupID, parseInt(data.categoryID));
                            props.removeSpending(parseInt(orignalAmount), originalGroup, parseInt(originalCategory));
                        }
                        else
                        {

                            props.updateSpending(parseInt(orignalAmount), data.groupID, parseInt(data.categoryID));
                            props.removeSpending(parseInt(orignalAmount), originalGroup, parseInt(originalCategory));
                        }
                    }


                }

                props.updateTransaction(data, props.route.params.key);
            }
            else if (data.type === 'Income' && oldType === 'Income')
            {


                if (parseInt(orignalAmount) < parseInt(data.amount))
                {

                    props.addTotalAvailable(parseInt(data.amount) - parseInt(orignalAmount));

                }
                else if (parseInt(orignalAmount) > parseInt(data.amount))
                {
                    props.removeTotalAvailable(parseInt(orignalAmount) - parseInt(data.amount));

                }
                props.updateTransaction(data, props.route.params.key);


            }
            else if (oldType === 'category' && data.type === 'Income')
            {

                props.addTotalAvailable(parseInt(data.amount));
                props.removeSpending(parseInt(orignalAmount), originalGroup, parseInt(originalCategory));
                data = {
                    ...data,
                    groupID: '',
                    categoryID: '',
                };
                props.updateTransaction(data, props.route.params.key);
            }
            else if (oldType === 'Income' && data.type === 'category')
            {


                props.removeTotalAvailable(parseInt(orignalAmount));
                props.updateSpending(parseInt(data.amount), data.groupID, parseInt(data.categoryID));
                props.updateTransaction(data, props.route.params.key);
            }

            navigation.goBack();
        }
        else
        {
            ToastAndroid.show('please enter an amount', ToastAndroid.SHORT);
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
            backgroundColor: '#98B0D3',
            marginTop: '5%',
            height: 400,
            width: '96%',
            left: '2%',
            borderRadius: 15,
            elevation: 5,
        },


        buttonField: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: '7%',
            marginRight: '7%',


            marginTop: '40%',


        },
        buttonStyle: {
            flex: 1,


        },
    });

    return (

        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={useHeaderHeight() + 27}>

            <TouchableOpacity style={{flex: 1}} onPress={() =>
            {
                Keyboard.dismiss();
                dropDownKeyboardDismiss()
            }
            } activeOpacity={1}>
            <View style={{flex: 1}}>

                <StatusBar style="default"/>
                <View style={styles.inputFields}>

                    <TransactionInputFieldNumber dismissDropDown={() => {setDropDown(false)}} data={getData} fieldName={'amount'} value={data.amount}/>
                    <TransactionInputFieldText dismissDropDown={() => {setDropDown(false)}} data={getData} value={data.payee} fieldName={'payee'}/>
                    <TransactionInputFieldDate dismissDropDown={() => {setDropDown(false)}} data={getData} value={data.date} fieldName={'date'}/>
                    <TransactionInputFieldText dismissDropDown={() => {setDropDown(false)}} data={getData} value={data.note} fieldName={'note'}/>
                    <TransactionInputFieldCategory data={getData} page={{
                        pageName: 'home',
                    }} fieldName={data.type}
                                                   groupID={data.groupID}
                                                   categoryID={data.categoryID}
                                                   dropDown={dropDownActive}
                                                   handlDropDown={handleDropDown}
                                                   setDropDown={setDropDownFalse}/>

                </View>
                <View style={styles.buttonField}>

                    <View styles={styles.buttonStyle}>

                        <Icon.Button
                            backgroundColor="#98B0D3"
                            color="black"
                            name="delete"
                            size={40}
                            onPress={deleteTransaction}
                            iconStyle={{

                                marginRight: 0,
                                paddingRight: '10%',
                                paddingLeft: '10%',

                            }}
                        />

                    </View>

                    <View styles={styles.buttonStyle}>

                        <Icon.Button
                            backgroundColor="#98B0D3"
                            color="black"
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
            </TouchableOpacity>
        </KeyboardAvoidingView>

    );
}


const mapDispatchToProps = (dispatch) =>
{
    return {
        addTransaction: (data) => dispatch(addTransaction(data)),
        removeTransaction: (id) => dispatch(removeTransaction(id)),
        updateSpending: (amount, groupID, categoryID) => dispatch(spendCategory(amount, groupID, categoryID)),
        spendOnlyCategory: (amount, groupID, categoryID) => dispatch(spendOnlyCategory(amount, groupID, categoryID)),
        removeSpending: (amount, groupID, categoryID) => dispatch(removeSpendCategory(amount, groupID, categoryID)),
        removeSpendOnlyCategory: (amount, groupID, categoryID) => dispatch(removeSpendOnlyCategory(amount, groupID, categoryID)),

        addTotalAvailable: (amount) => dispatch(addTotalAvailable(amount)),
        removeTotalAvailable: (amount) => dispatch(removeTotalAvailable(amount)),
        updateTransaction: (data, id) => dispatch(updateTransaction(data, id)),


    };
};

const mapStateToProps = (state) =>
{
    const {transactions} = state;
    return {
        transactions: transactions.transactions,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionEdit);


