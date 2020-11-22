
import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import TransactionItem from './transactionItem';
class TransactionSection extends React.Component {
    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                marginLeft: '2%',
                marginRight: '2%',
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                backgroundColor: '#8D8D92',
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
                backgroundColor: '#C8C8C8',
                width: '30%',
            }
        })
        return (
            <View style={styles.container} >
                <TouchableOpacity style={styles.TransactionButton}>
                    <View style={styles.lines} />
                </TouchableOpacity>
                <ScrollView style={styles.TransactionContainer} showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    <View style={{ height: '5%' }} />
                    <TransactionItem />
                    <TransactionItem />
                    <TransactionItem />
                    <TransactionItem />
                    <TransactionItem />
                    <TransactionItem />
                    <View style={{ height: 51 }} />
                </ScrollView>
            </View>
        );
    }
}
export default TransactionSection
