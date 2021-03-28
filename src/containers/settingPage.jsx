import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import {persistor} from '../reducer/store'
import {reset} from '../action/groupActions'


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


function settingPage(props){
    const dispatch = useDispatch()
    const resetData = () => {
     
        persistor.purge()
    
        dispatch(reset())

    }
        return   <View style={{ flex: 1 , alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity style={styles.container} onPress={resetData}>
            <Text style={{fontSize: 30, textAlignVertical: 'center', textAlign: 'center', bottom: 4}}>
                Reset Data
            </Text>
        </TouchableOpacity>
    </View> ;
}



export default settingPage
