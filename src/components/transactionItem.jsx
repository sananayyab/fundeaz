import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
class TransactionItem extends React.Component {
    render() {
        const styles = StyleSheet.create({
            container: {
              height: 70,
                marginLeft: 15,
                marginBottom: 8,
                marginTop: 8,
                width: '90%',
                borderRadius: 10,
            },
            CategoryContainer: {
                flex: 2,
                backgroundColor: '#1D2D44',
                paddingLeft: 13,
           
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'flex-start',
                borderBottomLeftRadius: 10,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
            },
            Categorytext: {
                fontSize: 14,
                color: "white",
            },
            amountContainer: {
                flex: 1.1,
                alignSelf: "flex-end",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                height: 25,
                alignItems: 'center',
                width: "37%",
                backgroundColor: '#1D4441',
            },
            amountText: {
                top: 1,
                fontSize: 15,
                color: "white",
            },
        })
        return (
            <View style={styles.container}>
                <View style={styles.CategoryContainer}>
                    <Text style={styles.Categorytext}>Category</Text>
                    <Text style={styles.Categorytext} >Payee</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amountText} >Amount</Text>
                </View>
            </View>
        );
    }
}
export default TransactionItem
