import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
class TransactionItem extends React.Component {
    constructor(props)
    {super(props)
        if (this.props.amount >= 0) {
            var toUse = styles.amoutnTextPositive
        }
        else if (value < 0) {
            var toUse = styles.amountTextNegative
        }



        this.state = {
            toUse: toUse,
     
        }
    }
    render() {
        const styles = StyleSheet.create({
            container: {
              height: 54,
              
                marginBottom: 8,
                marginTop: 8,
                width: '94%',
                alignSelf: 'center',
                borderRadius: 10,
                flexDirection: 'row',
                backgroundColor: '#1D2D44',
            },
            CategoryContainer: {
                flex: 1,
                backgroundColor: '#1D2D44',
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
        return (
            <View style={styles.container}>
                <View style={styles.CategoryContainer}>
                    <Text style={styles.Categorytext}>{this.props.category.trim()}</Text>
                    <Text style={styles.Categorytext} >{this.props.payee.trim()}</Text>
                </View>
                <View style={this.state.toUse}>
                    <Text style={styles.amountText} >{this.props.amount}</Text>
                </View>
            </View>
        );
    }
}
export default TransactionItem
