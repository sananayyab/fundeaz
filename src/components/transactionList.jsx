
import React, { useEffect, useState } from 'react';
import TransactionItem from './transactionItem.jsx'
import { connect, useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid,ScrollView } from 'react-native';



function TransactionList (props) {
 
var data = getData()
   function getData() {
   console.log("called")
        if (props.page === "home") {
            /*var tags;
            var list = props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name}>)
            }*/

            return (Object.entries(props.transactionList).map(([key, value]) => { if (value.categoryName === 'Income') { return(<TransactionItem key={key} id={key} payee={value.payee} amount={value.amount} category={value.categoryName} />) } else { return (<TransactionItem key={key} id={key} payee={value.payee} amount={value.amount} category={props.groupList[value.groupID].categories[value.categoryID].name}/> )} }))


        }
        else if (props.page === "group") {
            /*var tags;
            var list = props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name}/>)
            }*/

            return (Object.entries(props.transactionList).map(([key, value]) => (parseInt(value.groupID) === parseInt(props.groupID)) && <TransactionItem key={key} id={key} payee={value.payee} amount={value.amount} category={props.groupList[value.groupID].categories[value.categoryID].name}  />))


        }  else if (props.page === "category") {
            /*var tags;
            var list = props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name} />)
            }*/

            return (Object.entries(props.transactionList).map(([key, value]) => ((parseInt(value.groupID) === parseInt(props.groupID)) && (parseInt(value.categoryID) === parseInt(props.categoryID)) && <TransactionItem key={key} id={key} payee={value.payee} amount={value.amount} category={props.groupList[value.groupID].categories[value.categoryID].name}  />)))


        }
        
    }


    
     
       
        const styles = StyleSheet.create({
            container: {
               
                flex: 1,
                marginTop: '3%',
         
                borderRadius: 10,
                flexDirection: 'column',
              

            },
        })
        return (
            <ScrollView style={styles.container}  showsVerticalScrollIndicator={false} >
                {data}
            </ScrollView>
        );
    }


const mapStateToProps = (state) => {
    const { transactions, groupData} = state
    return { transactionList: transactions.transactions,
        groupList: groupData.groups }
};
export default connect(mapStateToProps)(TransactionList)
