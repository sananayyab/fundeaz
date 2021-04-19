import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';

function TransactionCategoryListItem (props) {


        const styles = StyleSheet.create({
            container: {
                flex: 1,
                margin: 5,
                borderRadius: 10,
                flexDirection: 'row',
                backgroundColor: '#385782',
                justifyContent: 'center',
                alignItems: 'center',
            },
            innerContainerText: {
                flex: 3.3,
                height: '100%',
                borderRadius: 5,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                backgroundColor: '#385782',
            },
            innerContainerTextPositive: {
                flex: 1.45,
                marginRight: '3%',
                height: '70%',
                borderRadius: 6,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#05845D',
            },
            innerContainerTextNegative: {
                flex: 1.45,
                marginRight: '3%',
                height: '70%',
                borderRadius: 6,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#85041C',
            },
            innerContainerAmount: {
            },
            textText: {
                paddingLeft: 0,
                padding: '3%',
                fontSize: 22,
                color: 'white',
                marginLeft: '5%',
            },
            textAmount: {
                fontSize: 20,
                color: 'white',
            },
        })
        return (
           <TouchableOpacity activeOpacity={1} onPress={() => {props.press(props.name, props.amount, props.groupID,props.categoryID)}} style={styles.container}>

                <View style={styles.innerContainerText}>
                    <Text style={styles.textText} >{props.name}</Text>
                </View>
                <View style={((parseInt( props.amount) >= 0) ? styles.innerContainerTextPositive : styles.innerContainerTextNegative)}>
                    <Text style={styles.textAmount}>{props.amount}</Text>
                </View>
      
            </TouchableOpacity>
        );
    }

export default TransactionCategoryListItem
