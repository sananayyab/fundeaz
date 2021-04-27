import React from 'react';
import TopBarItem from './topBarItem.jsx';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

function TopBar(props)
{

    var data = {};

    if (props.section == 'home')
    {

        data = {
            type: 'unallocated',
            groupID: null,
            categoryID: null,
        };

    }
    if (props.section == 'group')
    {


        data = {
            type: 'allocated',
            groupID: props.groupID,
            categoryID: null,

        };

    }
    if (props.section == 'category')
    {


        data = {
            type: 'allocated',
            groupID: props.groupID,
            categoryID: props.categoryID,

        };

    }


    function navigationToDetails()
    {
        if (props.section == 'home')
        {

            props.navigation.navigate('AllocationPage');

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
    });
    return (
        <TouchableOpacity

            style={styles.container}
            onPress={navigationToDetails}
            activeOpacity={1}>
            <TopBarItem type={'amount'} section={props.section} data={data} style={{flex: 1}} name={props.name}/>
            <TopBarItem type={data.type} section={props.section} data={data} style={{flex: 1}} name={props.name}/>
        </TouchableOpacity>
    );
}


const mapStateToProps = (state) =>
{
    const {fund} = state;
    return {
        available: fund.available,
        allocated: fund.allocated,
        unallocated: fund.unallocated,
        groups: fund.groups,
    };
};
export default connect(mapStateToProps)(TopBar);

