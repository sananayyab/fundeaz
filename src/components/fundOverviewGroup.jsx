import React, {useEffect, useState} from 'react';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import {connect} from 'react-redux';
import FundOverviewBarGroup from './fundOverviewBarGroup.jsx';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {addCategory} from '../action/groupActions';
import {initializeCategory} from '../action/fundActions';
import {FlatList} from 'react-native-gesture-handler';
import {addCategoryStatistics} from '../action/statisticsActions.jsx';
import FundOverviewBarCategoryCreated from './fundOverViewCategoryCreated';
import FundOverviewBarCategoryNew from './fundOverviewCategroyNew';

function FundOverviewGroup(props)
{
    const {groupID} = props;

    const styles = StyleSheet.create({
        container: {

            height: 'auto',
            margin: 10,
            borderRadius: 20,

            backgroundColor: '#98B0D3',
            elevation: 5,

        },
        groupContainer: {
            margin: 8,


        },
        groupTag: {
            height: 55,
            width: '99%',
        },
        categoryTags: {
            height: 'auto',
            width: '94%',
            marginLeft: 20,
        },
        addButton: {

            width: '15%',
        },
    });


    const [finishedEditing, setEditing] = useState(true);
    let lastId = props.currentGroup.currentCategoryID;




    function addingAction()
    {

        if (finishedEditing)
        {
            props.addCategory({itemStatus: 'new'}, groupID);
            props.initializeCategory(groupID, props.currentGroup.currentCategoryID + 1);
            props.addCategoryStatistics(groupID, props.currentGroup.currentCategoryID + 1, {
                allocated: {
                    average: 0,
                    lastMonth: 0,
                    thisMonth: 0,
                },
                spent: {
                    average: 0,
                    lastMonth: 0,
                    thisMonth: 0,
                },
            });

            setEditing(false);
        }
        else {
            ToastAndroid.showWithGravity(
                "Please Finish Naming the Previous Category",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }

    }

    const [data, setData] = useState(Object.entries(props.groups).map(([key, value]) => ({key: key, value: value})));

    const renderItem = (itemData) =>
    {

        let status = itemData.item.value.itemStatus;


        if (status === 'created')
        {

            return <FundOverviewBarCategoryCreated
                setEditing={setEditing} key={itemData.item.key} groupID={groupID}
                id={itemData.item.key}
                amount={props.groupFund[itemData.item.key].available}
                categoryID={itemData.item.key} name={itemData.item.value.name}/>;
        }
        else
        {

            return <FundOverviewBarCategoryNew key={itemData.item.key} groupID={groupID}
                                               id={itemData.item.key}
                                               setEditing={setEditing}
                                               amount={props.groupFund[itemData.item.key].available}
                                               categoryID={itemData.item.key} name={itemData.item.value.name}/>;
        }
    };


    useEffect(() =>
    {
        setData(Object.entries(props.groups).map(([key, value]) => ({key: key, value: value})));
    }, [props.groups]);
    return (

        <View style={styles.container}>




            <View style={styles.groupContainer}>
                <View style={styles.categoryTags}>
                    <FlatList
                        initialNumToRender={15}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.key}
                    />
                </View>


            </View>

        </View>
    );

}

const mapStateToProps = (state, ownProps) =>
{
    const {groupData, fund} = state;

    return {
        groups: groupData.categories,
        groupFund: fund.categories,


    };
};

const mapDispatchToProps = (dispatch) =>
{
    return {

        addCategory: (data, groupID) => dispatch(addCategory(data, groupID)),
        initializeCategory: (groupID, categoryID) => dispatch(initializeCategory(groupID, categoryID)),
        addCategoryStatistics: (groupID, categoryID, data) => dispatch(addCategoryStatistics(groupID, categoryID, data)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FundOverviewGroup);


