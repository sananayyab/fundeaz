
import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import TransactionItem from './null1.jsx';
class TransactionSection extends React.Component {
    render() {
        const styles = StyleSheet.create({
            container: {
                marginTop: 20,
                marginBottom: '4%',
                marginLeft: '3%',
                marginRight: '3%',
                borderRadius: 10,
                backgroundColor: 'rgba(128,128,128,0.4)',
                flex: 1,
            },
            outterContainer: {
            },
        })
        return (
            <View style={styles.container}>
                <ScrollView  >
                    <TransactionItem />
                    <TransactionItem />
                    <TransactionItem />
                    <TransactionItem />
                    <TransactionItem />
                    <TransactionItem />
                    <TransactionItem />
                    <TransactionItem />
                    <TransactionItem />
                    <TransactionItem />
                    <TransactionItem />
                    <TransactionItem />
                </ScrollView>
            </View>
        );
    }
}
export default TransactionSection
