
import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, TouchableWithoutFeedbackBase, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { connect } from 'react-redux';

class TransactionInputFieldCategory extends React.Component {

    constructor(props) {
        super(props)
    }





    render() {


        const styles = StyleSheet.create({
            container: {
                top: 10,
                height: 80,

            },
            fieldNameContainer: {
                position: 'absolute',
                height: '50%',
                zIndex: 0,
                borderRadius: 15,
                top: '16%',
                width: '35%',
                marginLeft: '3%',
                backgroundColor: '#00487C'
            },
            textFieldContainer: {
                marginTop: '10%',

                borderRadius: 15,
                borderBottomRightRadius: 0,
                zIndex: 2,
                height: '50%',
                marginRight: '3%',

                marginLeft: '20%',
                backgroundColor: '#1D2D44'
            },
            fieldNameText: {

                paddingRight: '6%',

                alignSelf: 'center',

                fontSize: 19,
                color: 'white',

            },
            textInput: {
                flex: 1,
                color: 'white',
                textAlign: 'center',
                fontSize: 20,
                marginRight: 15,
                marginLeft: 15,
                top: 4,
            },
            amountContainer: {
                
                alignSelf: "flex-end",
                paddingBottom: 1,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                height: '65%',
                alignItems: 'center',
                width: "37%",
                backgroundColor: '#05845D',
                marginRight: 12,
            },
            amountText: {
               
                top: 1,
                fontSize: 19,
                color: "white",
            },


        })
        return (
            <View style={styles.container} >
                <View style={styles.fieldNameContainer}>
                    <Text style={styles.fieldNameText}>
                        {this.props.fieldName}
                    </Text>
                </View>
                <View style={styles.textFieldContainer}>
                    <Text style={styles.textInput}>
                        Food
                    </Text>
                </View>
                <View>
            
             
                <View style={styles.amountContainer}>
                    <Text style={styles.amountText} >200</Text>
                </View>
        
                </View>
            </View>
        );
    }
}


export default TransactionInputFieldCategory;

