
import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, TouchableWithoutFeedbackBase, Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { connect } from 'react-redux';

class TransactionInputFieldNumber extends React.Component {

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
                height: '55%',
                zIndex: 0,
                borderRadius: 15,
                top: '10%',
                width: '35%',
                marginLeft: '3%',
                backgroundColor: '#00487C'
            },
            textFieldContainer: {
                marginTop: '10%',

                borderRadius: 15,
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
            }


        })
        return (
            <View style={styles.container} >
                <View style={styles.fieldNameContainer}>
                    <Text style={styles.fieldNameText}>
                        {this.props.fieldName}
                    </Text>
                </View>
                <View style={styles.textFieldContainer}>
                    <TextInput 
                      
                        onChangeText={(text) => {this.props.data({amount: text}) }}
                        keyboardType={'numeric'}
                        style={styles.textInput}>
                    {this.props.value}
                    </TextInput>
                </View>
            </View>
        );
    }
}


export default TransactionInputFieldNumber;

