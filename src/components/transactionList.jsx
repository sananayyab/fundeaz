
import React from 'react';
import TransactionItem from './transactionItem.jsx'
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid,ScrollView } from 'react-native';


class TransactionList extends React.Component {
    constructor(props) {
        super(props)
     
    }

    render() {
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
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
                <TransactionItem style={{ flex: 1 }} name={this.props.name} />
            </ScrollView>
        );
    }
}
export default TransactionList
