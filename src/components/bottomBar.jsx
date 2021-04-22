import React from 'react';
import { Button, StyleSheet, ToastAndroid, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux'
import { addTransaction } from '../action/transactionActions'
import { connect } from 'react-redux';
import { addGroup, addCategory } from '../action/groupActions'
import { initializeGroup, initializeCategory } from '../action/fundActions'
function BottomBar(props) {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            borderRadius: 10,
            flexDirection: 'row',
            marginLeft: '15%',
            marginRight: '15%',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
    })
    function loadSettings() {
        const source = props.data.page
        switch (source) {
            case 'home':
                props.navigation.navigate('SettingPage')
                break
        }

    }
    function processAction() {
        const type = props.data.type
        const source = props.data.page
        if (type === 'category') {
            switch (source) {
                case 'home':
                    props.addGroup({ itemStatus: 'new' })
                    props.initializeGroup(props.currentID + 1)

                    break
                case 'group':
                    props.addCategory({ itemStatus: 'new' }, props.data.groupID)
                    props.initializeCategory(props.data.groupID, props.groups[props.data.groupID].currentCategoryID + 1)
                    break
            }
        }
        else if (type === 'landing') {
            switch (source) {
                case 'home':
                    props.navigation.navigate('TransactionInput', {
                        page: 'home',
                        groupID: null, 
                        categoryID: null,
                    })
                    break
                case 'group':
                    props.navigation.navigate('TransactionInput', {
                        page: 'group',
                        groupID: props.data.groupID,
                        categoryID: null,
                    })
                    break
                case 'category':
                    props.navigation.navigate('TransactionInput', {
                        page: 'category',
                        groupID: props.data.groupID,
                        categoryID: props.data.categoryID
                    })
                    break
            }
        }
    }


    return (
        <View style={styles.container}>
            <Icon.Button
                backgroundColor='#98B0D3'
                name="settings"
                color='black'
                size={35}
                onPress={loadSettings}
                iconStyle={{
                    marginRight: 0,
                    paddingLeft: 20,
                    paddingRight: 20,

                }}
            />
            <Icon.Button
                backgroundColor='#98B0D3'
                name="add"
                color='black'
                size={35}
                onPress={processAction}
                iconStyle={{
                    marginRight: 0,
                    paddingLeft: 20,
                    paddingRight: 20,

                }}
            />
        </View>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {

        addGroup: (data) => dispatch(addGroup(data)),
        addTransaction: (data) => dispatch(addTransaction(data)),
        initializeGroup: (groupID) => dispatch(initializeGroup(groupID)),
        addCategory: (data, groupID) => dispatch(addCategory(data, groupID)),
        initializeCategory: (groupID, categoryID) => dispatch(initializeCategory(groupID, categoryID)),
    }
}
const mapStateToProps = (state, ownProps) => {
    const { groupData } = state
    return {
        currentID: groupData.currentID,
        groups: groupData.groups
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(BottomBar)
