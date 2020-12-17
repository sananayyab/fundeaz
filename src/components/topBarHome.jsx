
import React from 'react';
import TopBarItem from './topBarItem.jsx'
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
class TopBar extends React.Component
{
    constructor(props)
    {
        super(props)
        this.navigationToDetails = this.navigationToDetails.bind(this);
        if(this.props.section == 'home')
        {
            this.type = 'unallocated'
            this.available = this.props.fundState.available
            this.unallocated = this.props.fundState.unallocated
        }
        if(this.props.section == 'group')
        {
            this.type = 'allocated'
            const groupInfo = this.props.fundState.groups[this.props.groupID]
            this.available = groupInfo.available
            this.unallocated =  groupInfo.allocated

        }
    }
    navigationToDetails( )
    {
        this.props.navigation.navigate('GroupPage')
        ToastAndroid.show("test",ToastAndroid.SHORT)
    }
    render()
    {
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
                style={ styles.container }
                onPress={ this.navigationToDetails }
                activeOpacity={ 1 }>
                <TopBarItem type={'amount'}  value={this.available}style={ { flex: 1 } } name={this.props.name}/>
                <TopBarItem type={this.type} value={this.unallocated} style={ { flex: 1 } } name={this.props.name}/>
            </TouchableOpacity>
        );
    }
}



const mapStateToProps = (state) => {
    const {fund} = state
    return{
        fundState : fund
    }
};
export default connect(mapStateToProps)(TopBar)

