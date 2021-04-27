import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {persistor} from '../reducer/store';
import {resetGroup} from '../action/groupActions';
import {resetFund} from '../action/fundActions';
import {resetTransaction} from '../action/transactionActions';
import {useNavigation} from '@react-navigation/native';


const styles = StyleSheet.create({
    container: {
        height: 54,
        alignSelf: 'center',
        width: '60%',
        alignContent: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#7C7D8D',
    },


});


function settingPage(props)
{
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const resetData = () =>
    {

        persistor.purge();

        dispatch(resetGroup());
        dispatch(resetFund());
        dispatch(resetTransaction());
        navigation.goBack();

    };
    return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity activeOpacity={1} style={styles.container} onPress={resetData}>
            <Text style={{fontSize: 30, textAlignVertical: 'center', textAlign: 'center', bottom: 4}}>
                Reset Data
            </Text>
        </TouchableOpacity>
    </View>;
}


export default settingPage;
