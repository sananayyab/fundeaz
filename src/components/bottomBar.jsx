import React from 'react';
import { Button, StyleSheet, ToastAndroid, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { bindActionCreators } from 'redux'
import { addTransaction } from '../action/transactionActions'
import { connect } from 'react-redux';
import {addGroup, addCategory} from '../action/groupActions'
import {initializeGroup, initializeCategory} from '../action/fundActions'
class BottomBar extends React.Component {
    constructor(props) {
        super(props)
        this.processAction = this.processAction.bind(this)
    }
    processAction() {
        const type = this.props.data.type
    
        const source = this.props.data.page
        if (type === 'category') {
            
            switch (source) {
                case 'home':
                    this.props.addGroup({itemStatus: 'new'})
                    this.props.initializeGroup(this.props.currentID + 1)
                    console.log('test')
                    break
                case 'group':
                   
                 
                    this.props.addCategory({itemStatus: 'new'}, this.props.data.groupID)
                   
                
                    this.props.initializeCategory(this.props.data.groupID, this.props.groups[this.props.data.groupID].currentCategoryID + 1)
                    break
            }
        }
        else if (type === 'landing') {
            switch (source) {
                case 'home':
                    this.props.navigation.navigate('TransactionInput', {
                        page: 'home'

                    })
                    break
                case 'group':

                    this.props.navigation.navigate('TransactionInput', {
                        page: 'group',
                        groupID: this.props.data.groupID,

                    })

                    break
            }
        }
    }
    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                borderRadius: 10,
                flexDirection: 'row',
                marginLeft: '3%',
                marginRight: '3%',
                justifyContent: 'space-between',
                alignItems: 'center'
            },
        })
        return (
            <View style={styles.container}>
                <MaterialIcons.Button
                    backgroundColor='#7C7D8D'
                    name="settings"
                    color='black'
                    size={35}
                    iconStyle={{
                        marginRight: 0
                    }}
                />
                <MaterialIcons.Button
                    backgroundColor='#7C7D8D'
                    name="add"
                    color='black'
                    size={35}
                    onPress={this.processAction}
                    iconStyle={{
                        marginRight: 0
                    }}
                />
                <MaterialIcons.Button
                    backgroundColor='#7C7D8D'
                    color='black'
                    name="pie-chart"
                    size={35}
                    iconStyle={{
                        marginRight: 0
                    }} />
            </View>
        );
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addCategory: (data, groupID) => dispatch(addCategory(data, groupID)),
        addGroup: (data) => dispatch(addGroup(data)),
        addTransaction: (data) => dispatch(addTransaction(data)),
        initializeGroup: (groupID) => dispatch(initializeGroup(groupID)),
        initializeCategory: (groupID,categoryID) =>  dispatch(initializeCategory(groupID, categoryID)),
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
