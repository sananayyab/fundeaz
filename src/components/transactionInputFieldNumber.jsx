
import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, TouchableWithoutFeedbackBase, Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { connect } from 'react-redux';

function TransactionInputFieldNumber (props) {







        const styles = StyleSheet.create({
            container: {
                marginBottom: '5%',
                top: 10,
                height: 50,
                justifyContent: 'center'
            },
            fieldNameContainer: {
                position: 'absolute',
                height: '80%',
                zIndex: 0,
                borderRadius: 5,
                marginLeft: '3%',
                width: '30%',
                justifyContent: 'center',
                backgroundColor: '#00487C'
            },
            textFieldContainer: {
              

                borderRadius: 5,
                zIndex: 2,
                height: '100%',
                marginRight: '3%',

                marginLeft: '28%',
                backgroundColor: '#1D2D44'
            },
            fieldNameText: {

                paddingLeft: '8%',

                alignSelf: 'flex-start',
                bottom: '5%',
                fontSize: 19,
                color: 'white',

            },
            textInput: {
                textAlignVertical: 'center',
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
                        {props.fieldName}
                    </Text>
                </View>
                <View style={styles.textFieldContainer}>
                    <TextInput 
                      
                        onChangeText={(text) => {props.data({amount: text}) }}
                        keyboardType={'numeric'}
                        style={styles.textInput}>
                    {props.value}
                    </TextInput>
                </View>
            </View>
        );
    }



export default TransactionInputFieldNumber;

