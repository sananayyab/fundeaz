import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {addTransaction} from '../action/transactionActions';
import {connect} from 'react-redux';
import {addCategory, addGroup} from '../action/groupActions';
import {initializeCategory, initializeGroup} from '../action/fundActions';
import {useNavigation} from '@react-navigation/core';
import {addCategoryStatistics, addGroupStatistics} from '../action/statisticsActions.jsx';

function BottomBar(props)
{

    const navigation = useNavigation();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            borderRadius: 10,
            flexDirection: 'row',
            marginLeft: '5%',
            marginRight: '5%',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
    });

    function loadSettings()
    {
        const source = props.data.page;
        switch (source)
        {
            case 'home':
                navigation.navigate('SettingPage');
                break;
        }

    }

    function loadStatistics()
    {
        const source = props.data.page;
        switch (source)
        {
            case 'home':
                navigation.navigate('GroupStatisticsPage');
                break;
        }
    }

    function processAction()
    {
        const type = props.data.type;
        const source = props.data.page;
        if (type === 'category')
        {
            switch (source)
            {
                case 'home':

                    props.addGroup({itemStatus: 'new'});
                    props.initializeGroup(props.currentID + 1);
                    props.addGroupStatistics(props.currentID + 1, {
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

                    break;
                case 'group':
                    var groupID = props.data.groupID;

                    props.addCategory({itemStatus: 'new'}, groupID);
                    props.initializeCategory(groupID, props.groups[props.data.groupID].currentCategoryID + 1);
                    props.addCategoryStatistics(groupID, props.groups[props.data.groupID].currentCategoryID + 1, {
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
                    break;
            }
        } else if (type === 'landing')
        {
            switch (source)
            {
                case 'home':
                    navigation.navigate('TransactionInput', {
                        page: 'home',
                        groupID: null,
                        categoryID: '',
                    });
                    break;
                case 'group':
                    navigation.navigate('TransactionInput', {
                        page: 'group',
                        groupID: props.data.groupID,
                        categoryID: '',
                    });
                    break;
                case 'category':
                    navigation.navigate('TransactionInput', {
                        page: 'category',
                        groupID: props.data.groupID,
                        categoryID: props.data.categoryID,
                    });
                    break;
            }
        }
    }


    return (
        <View style={styles.container}>
            <Icon.Button
                backgroundColor="#98B0D3"
                name="settings"
                color="black"
                size={35}
                onPress={loadSettings}
                iconStyle={{
                    marginRight: 0,
                    paddingLeft: 20,
                    paddingRight: 20,

                }}
            />
            <Icon.Button
                backgroundColor="#98B0D3"
                name="add"
                color="black"
                size={35}
                onPress={processAction}
                iconStyle={{
                    marginRight: 0,
                    paddingLeft: 20,
                    paddingRight: 20,

                }}
            />

            <Icon.Button
                backgroundColor="#98B0D3"
                name="pie-chart"
                color="black"
                size={35}
                onPress={loadStatistics}
                iconStyle={{
                    marginRight: 0,
                    paddingLeft: 20,
                    paddingRight: 20,

                }}
            />
        </View>
    );
}

const mapDispatchToProps = (dispatch) =>
{
    return {

        addGroup: (data) => dispatch(addGroup(data)),
        addTransaction: (data) => dispatch(addTransaction(data)),
        initializeGroup: (groupID) => dispatch(initializeGroup(groupID)),
        addCategory: (data, groupID) => dispatch(addCategory(data, groupID)),
        initializeCategory: (groupID, categoryID) => dispatch(initializeCategory(groupID, categoryID)),
        addCategoryStatistics: (groupID, categoryID, data) => dispatch(addCategoryStatistics(groupID, categoryID, data)),
        addGroupStatistics: (groupID, data) => dispatch(addGroupStatistics(groupID, data)),
    };
};
const mapStateToProps = (state, ownProps) =>
{
    const {groupData} = state;
    return {
        currentID: groupData.currentID,
        groups: groupData.groups,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);
