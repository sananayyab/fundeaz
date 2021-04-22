
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, TouchableWithoutFeedbackBase } from 'react-native';
import TransactionItem from './transactionItem';
import { connect } from 'react-redux';
import CategoryItem from './categoryItem';
function TransactionSection (props) {

    
    function getData() {





        if (props.page === "home") {
            /*var tags;
            var list = props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name} navigation={props.navigation}/>)
            }*/

            return (Object.entries(props.transactionList).map(([key, value]) => { if (value.categoryName === 'Income') { return(<TransactionItem key={key} id={key} payee={value.payee} amount={value.amount} category={value.categoryName} navigation={props.navigation} />) } else { return (<TransactionItem key={key} id={key} payee={value.payee} amount={value.amount} category={props.groupList[value.groupID].categories[value.categoryID].name} navigation={props.navigation} /> )} }))


        }
        else if (props.page === "group") {
            /*var tags;
            var list = props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name} navigation={props.navigation}/>)
            }*/

            return (Object.entries(props.transactionList).map(([key, value]) => (parseInt(value.groupID) === parseInt(props.groupID)) && <TransactionItem key={key} id={key} payee={value.payee} amount={value.amount} category={props.groupList[value.groupID].categories[value.categoryID].name} navigation={props.navigation} />))


        }
       else  if (props.page === "category") {
            /*var tags;
            var list = props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name} navigation={props.navigation}/>)
            }*/

            return (Object.entries(props.transactionList).map(([key, value]) => ((parseInt(value.groupID) === parseInt(props.groupID)) && (parseInt(value.categoryID) === parseInt(props.categoryID)) && <TransactionItem key={key} id={key} payee={value.payee} amount={value.amount} category={props.groupList[value.groupID].categories[value.categoryID].name} navigation={props.navigation} />)))


        }

    }
    const [data, setData] = useState(getData())

    useEffect(() => {setData(getData())},[props.transactionList] )
   function loadTransactionList() {

        if (props.page === 'group') {
            props.navigation.navigate('TransactionList', {
                data: {
                    categoryID: -1,
                    groupID: props.groupID,
                    page: 'group',
                    type: 'landing'
                }
            })
        } else if (props.page === "home") {
            props.navigation.navigate('TransactionList', {
                data: {
                    categoryID: -1,
                    groupID: -1,
                    page: 'home',
                    type: 'landing'
                }
            })
        } else if (props.page === "category") {
            props.navigation.navigate('TransactionList', {
                data: {
                    categoryID: props.categoryID,
                    groupID: props.groupID,
                    page: 'category',
                    type: 'landing'
                }
            })
        }


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
            }
        })
        return (
            <View style={styles.container} >
                <TouchableOpacity activeOpacity={1} style={styles.TransactionButton}
                    onPress={loadTransactionList}>
                    <View style={styles.lines} />
                </TouchableOpacity>
                <ScrollView style={styles.TransactionContainer} showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    <View style={{ height: 20 }} />
                    {data}

                    <View style={{ height: 51 }} />
                </ScrollView>
            </View>
        );
    }


const mapStateToProps = (state) => {
    const { transactions, groupData } = state
    return {
        transactionList: transactions.transactions,
        groupList: groupData.groups
    }
};
export default connect(mapStateToProps)(TransactionSection);

