import React from 'react';
import {View} from 'react-native';
import SpentItem from './spentItem';


function StatItemGroup(props)
{


    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <SpentItem key={'spentLast'} type={'spentLast'}
                          groupID={props.groupID}
                          categoryID={props.categoryID}/>
            <SpentItem key={'allocLast'} type={'allocLast'} groupID={props.groupID} categoryID={props.categoryID}/>
        </View>
    );


}

export default StatItemGroup;
