import React from 'react';
import {KeyboardAvoidingView, StatusBar, StyleSheet, ToastAndroid, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {useHeaderHeight} from '@react-navigation/stack';
import {addTotalAvailable, spendCategory} from '../action/fundActions.jsx';
import {addTransaction} from '../action/transactionActions.jsx';
import TransactionInputFieldText from '../components/transactionInputFieldText.jsx';
import TransactionInputFieldNumber from '../components/transactionInputFieldNumber.jsx';
import TransactionInputFieldDate from '../components/transactionInputFieldDate.jsx';
import TransactionInputFieldCategory from '../components/transactionInputFieldCategory.jsx';
import {useNavigation, useRoute} from '@react-navigation/core';
import {setCategorySpent} from '../action/statisticsActions';
import {parse} from '@babel/core';

function TransactionInput(props)
{
    const navigation = useNavigation();
    const route = useRoute();

    let data = {
        amount: '',
        payee: '',
        date: '',
        note: '',
        groupID: '',
        groupName: '',
        categoryID: '',
        categoryName: '',

    };
    const pageDetails = {
        pageName: route.params.page,
        groupID: route.params.groupID,
        categoryID: route.params.categoryID,


    };


    function getData(value)
    {
        data = {
            ...data,
            ...value,
        };
    }


    function addTransaction()
    {

        if (data.amount.trim() !== '' && data.categoryName.trim() !== '')
        {
            if (data.type === 'category')
            {

                const updatedGroupSpent =  parseInt(props.statistics[data.groupID].spent.thisMonth) + parseInt(data.amount);
                const updatedCategorySpent = parseInt(props.statistics[data.groupID].categories[data.categoryID].spent.thisMonth) + parseInt(data.amount);

                props.addTransaction(data);
                props.updateSpending(parseInt(data.amount), data.groupID, parseInt(data.categoryID));
                props.setCategorySpent({thisMonth: updatedGroupSpent}, {thisMonth: updatedCategorySpent}, data.groupID, data.categoryID);
                navigation.goBack();


            } else if (data.type === 'Income')
            {
                props.addTransaction(data);
                props.addTotalAvailable(parseInt(data.amount));
                navigation.goBack();
            }
        } else if (data.amount.trim() === '')
        {
            ToastAndroid.show('please enter an amount', ToastAndroid.SHORT);
        } else if (data.categoryName.trim() !== '')
        {
            ToastAndroid.show('please select a category', ToastAndroid.SHORT);
        } else
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

            <View style={styles.container}>

                <StatusBar style="default"/>
                <View style={styles.inputFields}>

                    <TransactionInputFieldNumber data={getData} fieldName={'amount'} value={''}/>
                    <TransactionInputFieldText data={getData} value={''} fieldName={'payee'}/>
                    <TransactionInputFieldDate data={getData} value={''} fieldName={'date'}/>
                    <TransactionInputFieldText data={getData} value={''} fieldName={'note'}/>
                    <TransactionInputFieldCategory data={getData} categoryID={pageDetails.categoryID}
                                                   groupID={pageDetails.groupID} page={pageDetails}
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

        </KeyboardAvoidingView>

    );
}


const mapDispatchToProps = (dispatch) =>
{
    return {
        addTransaction: (data) => dispatch(addTransaction(data)),
        updateSpending: (amount, groupID, categoryID) => dispatch(spendCategory(amount, groupID, categoryID)),
        addTotalAvailable: (amount) => dispatch(addTotalAvailable(amount)),
        setCategorySpent: (group, category, groupID, categoryID) => dispatch(setCategorySpent(group,category,groupID, categoryID)),


    };
};


const mapStateToProps = (state) =>
{
    const {statistics} = state;

    return {
        statistics,


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionInput);


