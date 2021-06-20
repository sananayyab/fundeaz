import React, {useEffect, useState} from 'react';
import TransactionItem from './transactionItem.jsx';
import {connect, useDispatch} from 'react-redux';
import {ScrollView, StyleSheet} from 'react-native';
import {updateTransaction} from '../action/transactionActions';


function TransactionList(props)
{


    const dispatch = useDispatch();
    function getCategoryName(categoryID, categoryName, transactionID)
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


           return  tempTransactions.map((value, index) =>
            {
                if (value.categoryName === 'Income')
                {
                    return (<TransactionItem key={index} id={value.transactionID} payee={value.payee} amount={value.amount}
                                             category={value.categoryName}/>);
                } else
                {
                    return (<TransactionItem key={index} id={value.transactionID} payee={value.payee} amount={value.amount}
                                             category={getCategoryName( value.categoryID, value.categoryName, value.transactionID)}/>);
                }
            });


        } else if (props.page === 'category')
        {


            return tempTransactions.map((value, index) => ((parseInt(value.categoryID) === parseInt(props.categoryID)) &&
                <TransactionItem key={index} id={value.transactionID} payee={value.payee} amount={value.amount}
                                 category={getCategoryName( value.categoryID, value.categoryName, value.transactionID)}/>));


        }








    }



    function makeTransactionArray()
    {
        let temp = [];
        for (let key in props.transactions)
        {

            let tempItem = props.transactions[key]
            tempItem = {
                ...tempItem,
                transactionID: key,
            }
            temp.push(tempItem);

        }
        temp.sort((a, b) => parseInt(b.date) - parseInt(a.date));

        return temp;
    }

    const [data, setData] = useState(getData());

    useEffect(() =>
    {
        setData(getData());
    }, [props.transactions]);

    const styles = StyleSheet.create({
        container: {

            flex: 1,
            marginTop: '3%',

            borderRadius: 10,
            flexDirection: 'column',


        },
    });
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {data}
        </ScrollView>
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
export default connect(mapStateToProps)(TransactionList);
