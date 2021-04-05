
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, TouchableWithoutFeedbackBase, Text, Platform } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { connect } from 'react-redux';

function TransactionInputFieldDate (props) {
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
            height: '55%',
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
            top: 3,
            flex: 1,
            color: 'white',
            textAlign: 'center',
            fontSize: 20,
            marginRight: 15,
            marginLeft: 15,
        }


    })
  


    const [showDatePicker, setShowDatePicker] = useState(false);
    const [date, setDate] = useState(() => {     var initialDate;
        if(props.value !== '')
        {
            initialDate = new Date (props.value)
        }
        else{
            initialDate = new Date()
        }
        props.data ( {
          
            date: initialDate
        })
        return initialDate
     
       })


   const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
       
        setDate(currentDate)
        setShowDatePicker(Platform.OS=== 'ios')
        props.data ( {
          
            date: date
        })
    };







    
        return (
            <View style={styles.container} >
                <View style={styles.fieldNameContainer}>
                    <Text style={styles.fieldNameText}>
                        {props.fieldName}
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={1} style={styles.textFieldContainer} onPress={() => {setShowDatePicker(true)}} >

                    <Text style={styles.textInput}>
                    {date.toDateString()}
                    </Text>
                    </TouchableOpacity>
                {showDatePicker && (
                
                    <DateTimePicker
                        testID="dateTimePicker"
                        style={{flex: 1, backgroundColor: 'white'}}
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}


            </View>
        );
    }

export default TransactionInputFieldDate



