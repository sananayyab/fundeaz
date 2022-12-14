import React, {useState} from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
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
    addToUnallocated,
    removeSpendCategory,
    removeSpendOnlyCategory,
    removeTotalAvailable,
    spendCategory,
    spendOnlyCategory,
    unallocatedFromGroup,
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
    const [data, setData] = useState({
        ...props.transactions[props.route.params.key],

    });


    const [originalAmount, setOriginalAmount] = useState(data.amount);
    const [originalCategory, setOriginalCategory] = useState(data.categoryID);
    const [oldType, setOriginalType] = useState(data.type);
    const [categoryAlive, setCategoryStatus] = useState(() =>
    {

        if (data.type === 'category')
        {

                return props.groupData[data.categoryID] != null;

        }
        else
        {
            return true;
        }
    });

    function getData(value)
    {


        setData({
            ...data,
            ...value,
        });

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

            let categoryAlive = null;

                categoryAlive = props.groupData[data.categoryID] != null;

            if(categoryAlive)
            {
                props.removeSpending(parseFloat(data.amount), parseInt(data.categoryID));
            }
            else {
                props.addTotalAvailable(data.amount)
            }
            navigation.goBack();


        }
        else if (data.type === 'Income')
        {


            props.removeTotalAvailable(data.amount);
            navigation.goBack();
        }


    }

    function addTransaction()
    {


        if (data.amount.trim() !== '')
        {
            if (data.type === 'category' && oldType === 'category')
            {

                if ( originalCategory === data.categoryID)
                {


                    if (parseFloat(originalAmount) < parseFloat(data.amount))
                    {


                        props.updateSpending(parseFloat(data.amount) - parseFloat(originalAmount),  parseInt(data.categoryID));

                    }
                    else if (parseFloat(originalAmount) > parseFloat(data.amount))
                    {


                        props.removeSpending(parseFloat(originalAmount) - parseFloat(data.amount), parseInt(data.categoryID));

                    }

                }
                else
                {


                        if (parseFloat(originalAmount) < parseFloat(data.amount))
                        {


                            props.updateSpending(parseFloat(data.amount) - parseFloat(originalAmount), parseInt(data.categoryID));

                        }
                        else if (parseFloat(originalAmount) > parseFloat(data.amount))
                        {


                            props.updateSpending(parseFloat(originalAmount) - parseFloat(data.amount), parseInt(data.categoryID));

                        }
                        else
                        {

                            props.updateSpending(parseFloat(originalAmount),  parseFloat(data.categoryID));


                        }
                        if (categoryAlive)
                        {
                            props.removeSpending(parseFloat(originalAmount), parseFloat(originalCategory));
                        }
                        else
                        {
                            props.addTotalAvailable(parseFloat(originalAmount));

                        }



                }

                props.updateTransaction(data, props.route.params.key);
            }
            else if (data.type === 'Income' && oldType === 'Income')
            {


                if (parseFloat(originalAmount) < parseFloat(data.amount))
                {

                    props.addTotalAvailable(parseFloat(data.amount) - parseFloat(originalAmount));

                }
                else if (parseFloat(originalAmount) > parseFloat(data.amount))
                {
                    props.removeTotalAvailable(parseFloat(originalAmount) - parseFloat(data.amount));

                }
                props.updateTransaction(data, props.route.params.key);


            }
            else if (oldType === 'category' && data.type === 'Income')
            {


                props.addTotalAvailable(parseFloat(data.amount));
                if (categoryAlive)
                {
                    props.removeSpending(parseFloat(originalAmount), parseFloat(originalCategory));
                }
                else
                {
                    props.addTotalAvailable(parseFloat(originalAmount));
                }
                setData({
                    ...data,

                    categoryID: '',
                });
                props.updateTransaction(data, props.route.params.key);
            }
            else if (oldType === 'Income' && data.type === 'category')
            {


                props.removeTotalAvailable(parseFloat(originalAmount));
                props.updateSpending(parseFloat(data.amount), parseInt(data.categoryID));
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
                dropDownKeyboardDismiss();
            }
            } activeOpacity={1}>
                <View style={{flex: 1}}>

                    <StatusBar style="default"/>
                    <View style={styles.inputFields}>

                        <TransactionInputFieldNumber dismissDropDown={() =>
                        {
                            setDropDown(false);
                        }} data={getData} fieldName={'amount'} value={data.amount}/>
                        <TransactionInputFieldText dismissDropDown={() =>
                        {
                            setDropDown(false);
                        }} data={getData} value={data.payee} fieldName={'payee'}/>
                        <TransactionInputFieldDate dismissDropDown={() =>
                        {
                            setDropDown(false);
                        }} data={getData} value={data.date} fieldName={'date'}/>
                        <TransactionInputFieldText dismissDropDown={() =>
                        {
                            setDropDown(false);
                        }} data={getData} value={data.note} fieldName={'note'}/>
                        <TransactionInputFieldCategory data={getData} page={{
                            pageName: 'home',
                        }} fieldName={data.type}
                                                       categoryName={data.categoryName}

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
        updateSpending: (amount, categoryID) => dispatch(spendCategory(amount, categoryID)),

        removeSpending: (amount, categoryID) => dispatch(removeSpendCategory(amount, categoryID)),

        addToUnallocated: (amount) => dispatch(addToUnallocated(amount)),
        addTotalAvailable: (amount) => dispatch(addTotalAvailable(amount)),
        removeTotalAvailable: (amount) => dispatch(removeTotalAvailable(amount)),
        updateTransaction: (data, id) => dispatch(updateTransaction(data, id)),


    };
};

const mapStateToProps = (state) =>
{
    const {transactions, groupData} = state;
    return {
        groupData: groupData.categories,
        transactions: transactions.transactions,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionEdit);


