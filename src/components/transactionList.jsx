
import React from 'react';
import TransactionItem from './transactionItem.jsx'
import { connect, useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid,ScrollView } from 'react-native';


class TransactionList extends React.Component {
 
    constructor(props) {
        super(props)
     
        this.getData = this.getData.bind(this)
    }

    getData() {
        if (this.props.route.params.groupID === null) {
            /*var tags;
            var list = this.props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name} navigation={this.props.navigation}/>)
            }*/

            return (Object.entries(this.props.transactionList).map(([key, value]) => <TransactionItem key={key} id={key} payee={value.payee} amount={value.amount} category={value.categoryName} navigation={this.props.navigation} />))


        }
        if (this.props.route.params.groupID != null) {
            /*var tags;
            var list = this.props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name} navigation={this.props.navigation}/>)
            }*/

            return (Object.entries(this.props.transactionList).map(([key, value]) => (parseInt(value.groupID) === parseInt(this.props.route.params.groupID )) && <TransactionItem key={key} id={key} payee={value.payee} amount={value.amount} category={value.categoryName} navigation={this.props.navigation} />))


        }
    }


    render() {

        const data = this.getData()
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
}

const mapStateToProps = (state) => {
    const { transactions } = state
    return { transactionList: transactions.transactions }
};
export default connect(mapStateToProps)(function(props) {
    const route = useRoute();
    const navigation = useNavigation();

  
    return <TransactionList {...props} navigation={navigation} route={route} />;
  })
