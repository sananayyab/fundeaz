import React, {useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {persistor} from '../reducer/store';
import {addCategory, resetGroup} from '../action/groupActions';
import {initializeCategory, resetFund} from '../action/fundActions';
import {resetTransaction} from '../action/transactionActions';
import {useNavigation} from '@react-navigation/native';
import {addCategoryStatistics} from '../action/statisticsActions';
import {setLastCheckedDate, setStartDate} from '../action/applicationDataAction';
import DateTimePicker from '@react-native-community/datetimepicker';


const styles = StyleSheet.create({
    container: {
        height: 54,
        alignSelf: 'center',
        width: '60%',
        alignContent: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#7C7D8D',
        bottom: '10%',
    },
    startData: {

        top: '10%',
        height: 54,
        alignSelf: 'center',
        width: '60%',
        alignContent: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#7C7D8D',
    }


});


function settingPage(props)
{
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [showDatePicker, setShowDatePicker] = useState(false);
    const resetData = () =>
    {

        persistor.purge();

        dispatch(resetGroup());
        dispatch(resetFund());
        dispatch(resetTransaction());
        dispatch(setStartDate(25));
        dispatch(setLastCheckedDate(1));
        navigation.goBack();

    };

    const [date, setDate] = useState(() =>
    {
        let initialDate;

            initialDate = new Date();
            initialDate.setHours(0,0,0,0);


        return initialDate.getTime();

    });

    const onChange = (event, selectedDate) =>
    {

        if(event.type === 'set')
        {
            const currentDate = selectedDate

            setShowDatePicker(false)

            dispatch(setStartDate(currentDate.getDate()))


        }
        else {
            setShowDatePicker(false);
        }
    };



    return( <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        <TouchableOpacity activeOpacity={1} onPress={() => {setShowDatePicker(true)}} style={styles.startData}>
            <Text style={{fontSize: 20, textAlignVertical: 'center', textAlign: 'center', bottom: 4}}>
                Starting Date: {props.startDate}
            </Text>
        </TouchableOpacity>
        {showDatePicker && (

            <DateTimePicker
                testID="dateTimePicker"
                style={{flex: 1, backgroundColor: 'white'}}

                mode={'date'}


                display="default"
                onChange={onChange}

             value={date}/>
        )}
        <TouchableOpacity activeOpacity={1} style={styles.container} onPress={resetData}>
            <Text style={{fontSize: 30, textAlignVertical: 'center', textAlign: 'center', bottom: 4}}>
                Reset Data
            </Text>
        </TouchableOpacity>
    </View>);
}


const mapStateToProps = (state) =>
{
    const {appData} = state

    return {
        startDate:  appData.monthStart,
    };
};
export default connect(mapStateToProps)(settingPage);

