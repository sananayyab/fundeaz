import React, {useEffect, useState} from 'react';
import TransactionItem from './transactionItem.jsx';
import {connect} from 'react-redux';
import {ScrollView, StyleSheet} from 'react-native';


function TransactionList(props)
{



    function getData()
    {

        let tempTransactions = makeTransactionArray();

        if (props.page === 'home')
        {


           return  tempTransactions.map((value, key) =>
            {
                if (value.categoryName === 'Income')
                {
                    return (<TransactionItem key={key} id={value.transactionID} payee={value.payee} amount={value.amount}
                                             category={value.categoryName}/>);
                } else
                {
                    return (<TransactionItem key={key} id={value.transactionID} payee={value.payee} amount={value.amount}
                                             category={props.groupList[value.groupID].categories[value.categoryID].name}/>);
                }
            });


        } else if (props.page === 'group')
        {

            return tempTransactions.map((value, key) => (parseInt(value.groupID) === parseInt(props.groupID)) &&
                <TransactionItem key={key} id={value.transactionID} payee={value.payee} amount={value.amount}
                                 category={props.groupList[value.groupID].categories[value.categoryID].name}/>);


        } else if (props.page === 'category')
        {


            return tempTransactions.map((value, key) => ((parseInt(value.groupID) === parseInt(props.groupID)) && (parseInt(value.categoryID) === parseInt(props.categoryID)) &&
                <TransactionItem key={key} id={value.transactionID} payee={value.payee} amount={value.amount}
                                 category={props.groupList[value.groupID].categories[value.categoryID].name}/>));


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
        groupList: groupData.groups,
    };
};
export default connect(mapStateToProps)(TransactionList);
