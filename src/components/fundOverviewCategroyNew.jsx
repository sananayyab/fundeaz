import React, {createRef, useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {removeCategory, updateCategory} from '../action/groupActions';
import {useNavigation} from '@react-navigation/core';
import {categoryRemovedFundAction} from '../action/fundActions';

let mode;
let oldAmount;

function FundOverviewBarCategoryNew(props)
{


    const styles = StyleSheet.create({
        container: {
            height: 45,
            width: '97%',
            margin: 5,
            borderRadius: 10,
            flexDirection: 'row',
            backgroundColor: '#385782',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',

        },
        editTextField: {
            flex: 1,
            borderRadius: 5,
            backgroundColor: '#385782',
            fontSize: 17,
            color: 'white',
            textAlign: 'center',
        },
        innerContainerText: {
            flex: 2.5,
            height: '100%',
            borderRadius: 10,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#385782',
        },
        innerContainerTextPositive: {
            flex: 1.63,
            marginRight: '3%',
            height: '70%',
            borderRadius: 6,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#05845D',
        },
        innerContainerTextNegative: {
            flex: 1.63,
            marginRight: '3%',
            height: '70%',
            borderRadius: 6,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#85041C',
        },
        innerContainerAmount: {},
        textText: {
            paddingLeft: 0,
            fontSize: 17,
            color: 'white',
            marginLeft: '5%',
        },
        textAmount: {
            top: '5%',
            height: '100%',
            width: '100%',
            textAlign: 'center',
            fontSize: 20,
            color: 'white',
        },
        textInputText: {

            height: '100%',
            width: '100%',

            fontSize: 17,
            color: 'white',
            textAlign: 'center',
        },
    });





    let ref = createRef();



    return (<View style={{
            height: 50,
            width: '100%',
        }} >
            <View style={{flex: 1}} >
                <View style={styles.container}>
                    <View style={styles.textInputBar}>
                        <TextInput ref={ref} autoFocus={true}  onSubmitEditing={(event) =>
                        {


                            props.updateCategory({
                                name: event.nativeEvent.text.trim(),
                                itemStatus: 'created',
                            }, props.categoryID, props.groupID);
                            props.setEditing(true)





                        }}
                                   style={styles.textInputText}> </TextInput>
                    </View>
                </View>
            </View>
        </View>
    );

}


const mapStateToProps = (state) =>
{
    const {groupData, fund} = state;
    return {
        groupList: groupData.groups,
        groupFunds: fund.groups,
    };
};
const mapDispatchToProps = (dispatch, ownProps) =>
{

    let {groupID, id} = ownProps;
    return {

        updateCategory: (data) => dispatch(updateCategory(data, id, groupID)),
        categoryRemovedFundAction: () => dispatch(categoryRemovedFundAction(groupID, id)),
        removeCategory: () => dispatch(removeCategory(id, groupID)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FundOverviewBarCategoryNew);

