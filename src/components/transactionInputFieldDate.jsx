
import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, TouchableWithoutFeedbackBase, Text, Platform } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { connect } from 'react-redux';

class TransactionInputFieldDate extends React.Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.showDatepicker = this.showDatepicker.bind(this)
        this.state = {
            date: new Date(),
            show: false,

        }
    }

    onChange = (event, selectedDate) => {
        const currentDate = selectedDate || this.state.date;
       
        this.setState({
            show: Platform.OS=== 'ios',
            date: currentDate
        })
    };



    showDatepicker = () => {
       this.setState({
           show: true
       })
     
    };



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
                top: 3,
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
                <TouchableOpacity style={styles.textFieldContainer} onPress={this.showDatepicker} >

                    <Text style={styles.textInput}>
                    {this.state.date.toDateString()}
                    </Text>
                    </TouchableOpacity>
                {this.state.show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={this.state.date}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={this.onChange}
                    />
                )}


            </View>
        );
    }
}
export default TransactionInputFieldDate



