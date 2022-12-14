import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import TransactionItem from './transactionItem';
import {connect, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {updateTransaction} from '../action/transactionActions';

function TransactionSection(props)
{


    const navigation = useNavigation();
    const dispatch = useDispatch();
    function getCategoryName( categoryID, categoryName, transactionID)
    {
        let categoryAlive = null;

            categoryAlive = props.groupList[categoryID] != null;

        if (categoryAlive)
        {
            if(categoryName !== props.groupList[categoryID].name)
            {
                dispatch(updateTransaction({categoryName: props.groupList[categoryID].name}, transactionID))
            }
            return props.groupList[categoryID].name;
        }
        else
        {
            return categoryName;
        }
    }
    function getData()
    {


        let tempTransactions = makeTransactionArray();


        if (props.page === 'home')
        {


            return tempTransactions.map((value, index) =>
            {


                if (value.categoryName === 'Income')
                {
                    return (<TransactionItem key={index} id={value.transactionID} payee={value.payee}
                                             amount={value.amount}
                                             category={value.categoryName}/>);
                }
                else
                {

                    return (<TransactionItem key={index} id={value.transactionID} payee={value.payee}
                                             amount={value.amount}
                                             category={getCategoryName(value.categoryID, value.categoryName, value.transactionID)}/>);
                }
            });


        }
        else if (props.page === 'category')
        {

            return tempTransactions.map((value, index) => ((parseInt(value.categoryID) === parseInt(props.categoryID)) &&
                <TransactionItem key={index} id={value.transactionID} payee={value.payee} amount={value.amount}
                                 category={getCategoryName(value.categoryID, value.categoryName, value.transactionID)}/>));


        }


    }

    const [data, setData] = useState(getData());

    useEffect(() =>
    {
        setData(getData());
    }, [props.transactions]);

    function loadTransactionList()
    {

        if (props.page === 'group')
        {
            navigation.navigate('TransactionList', {
                data: {
                    categoryID: -1,
                    groupID: props.groupID,
                    page: 'group',
                    type: 'landing',
                },
            });
        }
        else if (props.page === 'home')
        {
            navigation.navigate('TransactionList', {
                data: {
                    categoryID: -1,
                    groupID: -1,
                    page: 'home',
                    type: 'landing',
                },
            });
        }
        else if (props.page === 'category')
        {
            navigation.navigate('TransactionList', {
                data: {
                    categoryID: props.categoryID,
                    groupID: props.groupID,
                    page: 'category',
                    type: 'landing',
                },
            });
        }


    }

    function makeTransactionArray()
    {
        let temp = [];
        for (let key in props.transactions)
        {

            let tempItem = props.transactions[key];
            tempItem = {
                ...tempItem,
                transactionID: key,
            };
            temp.push(tempItem);

        }
        temp.sort((a, b) => parseInt(b.date) - parseInt(a.date));

        return temp;
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginLeft: '2%',
            marginRight: '2%',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            backgroundColor: '#98B0D3',
            elevation: 5,
        },
        TransactionContainer: {
            flex: 1,
        },
        TransactionButton: {
            width: '100%',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            height: '8%',
            zIndex: 1,
            position: 'absolute',
        },
        lines: {
            alignSelf: 'center',
            marginTop: '1.5%',
            height: '50%',
            borderRadius: 30,
            backgroundColor: '#36537F',
            width: '30%',
        },
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={1} style={styles.TransactionButton}
                              onPress={loadTransactionList}>
                <View style={styles.lines}/>
            </TouchableOpacity>
            <ScrollView style={styles.TransactionContainer} showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                <View style={{height: 20}}/>
                {data}

                <View style={{height: 51}}/>
            </ScrollView>
        </View>
    );
}


const mapStateToProps = (state) =>
{
    const {transactions, groupData} = state;
    return {
        transactions: transactions.transactions,
        groupList: groupData.categories,
    };
};
export default connect(mapStateToProps)(TransactionSection);

