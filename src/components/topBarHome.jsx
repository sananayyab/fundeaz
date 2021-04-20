import React, { useState } from 'react';
import TopBarItem from './topBarItem.jsx'
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
function TopBar(props) {

    var data = {


    }

    if (props.section == 'home') {

        data = {
            type: 'unallocated',
            groupID: null,

        }

    }
    if (props.section == 'group') {




        data = {
            type: 'allocated',
            groupID: props.groupID,

        }

    }

    function navigationToDetails() {
        if (props.section == 'home') {

            props.navigation.navigate('AllocationPage')

        }


    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: '3%',
            marginLeft: '2%',
            marginRight: '2%',
            borderRadius: 10,
            flexDirection: 'column',
            alignItems: 'center',

        },
    })
    return (
        <TouchableOpacity

            style={styles.container}
            onPress={navigationToDetails}
            activeOpacity={1}>
            <TopBarItem type={'amount'} section= { props.section}groupID={data.groupID} style={{ flex: 1 }} name={props.name} />
            <TopBarItem type={data.type} section= { props.section} groupID={data.groupID} style={{ flex: 1 }} name={props.name} />
        </TouchableOpacity>
    );
}




const mapStateToProps = (state) => {
    const { fund } = state
    return {
        available: fund.available,
        allocated: fund.allocated,
        unallocated: fund.unallocated,
        groups: fund.groups
    }
};
export default connect(mapStateToProps)(TopBar)

