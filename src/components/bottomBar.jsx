import React from 'react';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {addTransaction} from '../action/transactionActions';
import {connect} from 'react-redux';
import {addCategory} from '../action/groupActions';
import {initializeCategory} from '../action/fundActions';
import {useNavigation} from '@react-navigation/core';
import {addCategoryStatistics} from '../action/statisticsActions.jsx';

function BottomBar(props)
{


    const navigation = useNavigation();
    let elements = null;


    if (props.data.page === 'home')
    {

        elements = (<View style={{
            flex: 1,
            borderRadius: 10,
            flexDirection: 'row',
            marginLeft: '5%',
            marginRight: '5%',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
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
        </View>);
    }
    else if (props.data.page === 'category')
    {
        elements = (<View style={{
            flex: 1,
            borderRadius: 10,
            flexDirection: 'row',
            marginLeft: '5%',
            marginRight: '5%',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>
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


        </View>);
    }


    const styles = StyleSheet.create({
        container: {
            flex: 1,

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


        navigation.navigate('GroupStatisticsPage');


    }

    function processAction()
    {


        const type = props.data.type;
        const source = props.data.page;

        if (type === 'category')
        {
            if (props.finsihedEditing)
            {


                props.addCategory({itemStatus: 'new'});
                props.initializeCategory(props.currentID + 1);
                props.addCategoryStatistics(props.currentID + 1, {
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
                props.setEditing(false);

            }
            else if (!props.finsihedEditing)
            {

                ToastAndroid.showWithGravity(
                    'Please Finish Naming the Previous Category',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                );

            }
        }
        else if (type === 'landing')
        {
            switch (source)
            {
                case 'home':
                    navigation.navigate('TransactionInput', {
                        page: 'home',
                        categoryID: '',
                        categoryName: ''
                    });
                    break;
                case 'category':
                    navigation.navigate('TransactionInput', {
                        page: 'category',
                        categoryID: props.data.categoryID,
                        categoryName: props.data.categoryName
                    });
                    break;
            }
        }
    }


    return (
        <View style={styles.container}>
            {elements}
        </View>
    );
}

const mapDispatchToProps = (dispatch) =>
{
    return {


        addTransaction: (data) => dispatch(addTransaction(data)),
        addCategory: (data) => dispatch(addCategory(data)),
        initializeCategory: (categoryID) => dispatch(initializeCategory(categoryID)),
        addCategoryStatistics: (categoryID, data) => dispatch(addCategoryStatistics(categoryID, data)),

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
