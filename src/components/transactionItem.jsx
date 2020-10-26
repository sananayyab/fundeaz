import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TransactionItem extends React.Component
{

    render()
    {
        const styles = StyleSheet.create({
            container: {
                flex: 1,


                marginTop: '2%',
                marginLeft: '3%',
                marginRight: '3%',
                maxHeight: '6%',
                borderRadius: 10,
                backgroundColor: 'rgba(128,128,128,0.4)',
               


            },
            innerContainer: {
                paddingRight: "5%",
                paddingLeft: "5%",
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            },
            amountSection: {
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
             
            },
            amountText: {
                fontSize: 13
            },
            numberColor: {
                fontSize: 13,
                color: 'green'
            },
            categoryText: {
                fontSize: 15
            
            }
           
          
        })

       
        return (
            <View style={ styles.container }>
                <View style={ styles.innerContainer }>
                    <Text style={styles.categoryText}>Category</Text>
                    <View style={styles.amountSection}>
                        <Text  style={styles.numberColor}>Amount</Text>
                        <Text style={ styles.amountText } >payee</Text>
                    </View>
                </View>
                
            </View>
        );
    }
}



export default TransactionItem
