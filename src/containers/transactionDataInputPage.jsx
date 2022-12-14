import React, {useEffect, useState} from 'react';
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
import {addLastTransactionTime, addTotalAvailable, spendCategory} from '../action/fundActions.jsx';
import {addLastTransactionTimeInGroup} from '../action/groupActions';
import {addTransaction} from '../action/transactionActions.jsx';
import TransactionInputFieldText from '../components/transactionInputFieldText.jsx';
import TransactionInputFieldNumber from '../components/transactionInputFieldNumber.jsx';
import TransactionInputFieldDate from '../components/transactionInputFieldDate.jsx';
import TransactionInputFieldCategory from '../components/transactionInputFieldCategory.jsx';
import {useNavigation, useRoute} from '@react-navigation/core';
import {setCategorySpent} from '../action/statisticsActions';

function TransactionInput(props)
{


    const navigation = useNavigation();
    const route = useRoute();

    const pageDetails = {
        pageName: route.params.page,
        categoryID: route.params.categoryID,
        categoryName: route.params.categoryName,


    };
    const [dropDownActive, setDropDown] = useState(false);
    const [categoryFunctionCalledChild, setChild] = useState(false);
    const [ data, setData] = useState( () =>
    {
        if(pageDetails.categoryID !== '')
        {

            return {
                amount: '',
                payee: '',
                date: '',
                note: '',
                type: 'category',
                categoryID: pageDetails.categoryID,
                categoryName: pageDetails.categoryName,
            }
        }
        else
        {
            return {
                amount: '',
                payee: '',
                date: '',
                note: '',
                categoryID: '',
                categoryName: '',
            }
        }
    }

    );




    const handleDropDown = () =>
    {


        setChild(true);
        if (pageDetails.pageName !== 'category')
        {
            if (!dropDownActive)
            {
                setDropDown(true);
            }
            else
            {
                setDropDown(false);
            }
        }


    };


    function setDropDownFalse()
    {


        setDropDown(false);
        setChild(true);

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


    function getData(value)
    {



        setData({
            ...data,
            ...value,
        })
        console.log(data)

    }


    function addTransaction()
    {


        if (data.amount.trim() !== '' && data.categoryName.trim() !== '')
        {

            if (data.type === 'category')
            {



                const updatedCategorySpent = Math.floor((parseFloat(props.statistics[data.categoryID].spent.thisMonth) + parseFloat(data.amount)) * 100) / 100;
                const clock = new Date();

                props.addTransaction(data);
                props.addLastTransactionTime(data.categoryID, clock.getTime());
                props.addLastTransactionTimeInGroup(data.categoryID, clock.getTime());
                props.updateSpending(parseFloat(data.amount), parseInt(data.categoryID));
                props.setCategorySpent( {thisMonth: updatedCategorySpent}, data.categoryID);
                navigation.goBack();


            }
            else if (data.type === 'Income')
            {
                props.addTransaction(data);
                props.addTotalAvailable(parseFloat(data.amount));
                navigation.goBack();
            }
        }
        else if (data.amount.trim() === '')
        {

            ToastAndroid.show('please enter an amount', ToastAndroid.SHORT);
        }
        else if (data.categoryName.trim() !== '')
        {
            ToastAndroid.show('please select a category', ToastAndroid.SHORT);
        }
        else
        {
            ToastAndroid.show('please fill all fields', ToastAndroid.SHORT);
        }

    }


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',


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

            alignItems: 'center',
            marginLeft: '3%',
            marginRight: '3%',


            marginTop: '40%',


        },
        buttonStyle: {
            flex: 1,
            left: 100,


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
                <View style={styles.container}>

                    <StatusBar style="default"/>
                    <View style={styles.inputFields}>

                        <TransactionInputFieldNumber dismissDropDown={() => {setDropDown(false)}} data={getData} fieldName={'amount'} value={''}/>
                        <TransactionInputFieldText   dismissDropDown={() => {setDropDown(false)}} data={getData} value={''} fieldName={'payee'}/>
                        <TransactionInputFieldDate dismissDropDown={() => {setDropDown(false)}}  data={getData} value={''} fieldName={'date'}/>
                        <TransactionInputFieldText dismissDropDown={() => {setDropDown(false)}}  data={getData} value={''} fieldName={'note'}/>
                        <TransactionInputFieldCategory data={getData} categoryID={pageDetails.categoryID}
                                                       categoryName={pageDetails.categoryName}
                                                      page={pageDetails}
                                                       dropDown={dropDownActive}
                                                       handlDropDown={handleDropDown}
                                                       setDropDown={setDropDownFalse}
                                                       fieldName={'category'}/>

                    </View>
                    <View style={styles.buttonField}>


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
        updateSpending: (amount, categoryID) => dispatch(spendCategory(amount, categoryID)),
        addTotalAvailable: (amount) => dispatch(addTotalAvailable(amount)),
        setCategorySpent: (category, categoryID) => dispatch(setCategorySpent(category, categoryID)),
        addLastTransactionTime: (categoryID, time) => dispatch(addLastTransactionTime(categoryID, time)),
        addLastTransactionTimeInGroup: (categoryID, time) => dispatch(addLastTransactionTimeInGroup(categoryID, time)),
    };
};


const mapStateToProps = (state) =>
{
    const {statistics,groupData } = state;

    return {
        statistics,
        categories: groupData.categories


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionInput);


