
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, TouchableWithoutFeedbackBase, Text, Platform } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { connect } from 'react-redux';

function TransactionInputFieldDate (props) {
    const styles = StyleSheet.create({
        container: {
            marginBottom: '5%',
            top: 10,
            height: 50,
            marginRight: '3%',
            marginLeft: '3%',
            borderRadius: 5,
            justifyContent: 'center',
            backgroundColor: '#385782'
        },
        fieldNameContainer: {
            position: 'absolute',
            height: '70%',
            zIndex: 1,
            borderRadius: 5,
            marginLeft: '2%',
            width: '25%',
            justifyContent: 'center',
            backgroundColor: '#1D2D44'
        },
        textFieldContainer: {
          

            borderRadius: 5,
            zIndex: 0,
            height: '100%',
          

            marginLeft: '34%',
           
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



