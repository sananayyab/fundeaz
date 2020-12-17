import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
class TransactionItem extends React.Component {
    render() {
        const styles = StyleSheet.create({
            container: {
              height: 75,
                marginLeft: 15,
                marginBottom: 8,
                marginTop: 8,
                width: '90%',
                borderRadius: 10,
            },
            CategoryContainer: {
                flex: 2,
                backgroundColor: '#1D2D44',
                paddingLeft: 20,
                paddingTop: 2,
                paddingBottom: 2,
           
                flexDirection: 'column',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'flex-start',
                borderBottomLeftRadius: 10,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
            },
            Categorytext: {
                fontSize: 15,
                color: "white",
            },
            amountContainer: {
                flex: 1.1,
                alignSelf: "flex-end",
                paddingBottom: 1,
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
                    <Text style={styles.Categorytext}>{this.props.category}</Text>
                    <Text style={styles.Categorytext} >{this.props.payee}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amountText} >{this.props.amount}</Text>
                </View>
            </View>
        );
    }
}
export default TransactionItem
