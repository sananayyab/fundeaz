import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
function TransactionItem (props) {
 
    const navigation = useNavigation()
   function goToTrasaction(){
        navigation.navigate('TransactionEdit', {
            key: props.id
        })
    }

        const styles = StyleSheet.create({
            container: {
                height: 54,
                marginBottom: 8,
                marginTop: 8,
                width: '94%',
                alignSelf: 'center',
                borderRadius: 10,
                flexDirection: 'row',
                backgroundColor: '#385782',
            },
            CategoryContainer: {
                flex: 1,
                backgroundColor: '#385782',
                paddingLeft: 20,
                paddingTop: 2,
                paddingBottom: 2,
                flexDirection: 'column',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'flex-start',
                borderRadius: 10,
            },
            Categorytext: {
                fontSize: 15,
                color: "white",
                alignSelf: 'flex-start'
            },
            amountContainer: {
                flex: 0.5,
                alignSelf: "center",
                borderRadius: 10,
                height: 30,
                alignItems: 'center',
                marginRight: 10,
                backgroundColor: '#85041C',
            },
            amoutnTextPositive: {
                flex: 0.5,
                alignSelf: "center",
                borderRadius: 10,
                height: 30,
                alignItems: 'center',
                marginRight: 10,
                backgroundColor: '#05845D',
            },
            amountTextNegative: {
                flex: 0.5,
                alignSelf: "center",
                borderRadius: 10,
                height: 30,
                alignItems: 'center',
                marginRight: 10,
                backgroundColor: '#85041C',
            },
            amountText: {
                top: 3,
                fontSize: 15,
                color: "white",
            },
        })
        if (props.category.trim() === "Income") {
            return (
                <TouchableOpacity activeOpacity={1} style={styles.container}
                onPress={goToTrasaction}>
                    <View style={styles.CategoryContainer}>
                        <Text style={styles.Categorytext}>{props.category.trim()}</Text>
                        <Text style={styles.Categorytext} >{props.payee.trim()}</Text>
                    </View>
                    <View style={styles.amoutnTextPositive}>
                        <Text style={styles.amountText} >{props.amount}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        else {
            return (
                <TouchableOpacity activeOpacity={1} style={styles.container}
                onPress={goToTrasaction}>
                    <View style={styles.CategoryContainer}>
                        <Text style={styles.Categorytext}>{props.category.trim()}</Text>
                        <Text style={styles.Categorytext} >{props.payee.trim()}</Text>
                    </View>
                    <View style={styles.amountTextNegative}>
                        <Text style={styles.amountText} >{props.amount}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
    }

export default TransactionItem
