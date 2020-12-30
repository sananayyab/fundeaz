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
        this.state ={
            type: '',
            available: '',
            unallocated: ''
         }
        if(this.props.section == 'home')
        {

            this.state ={
                type: 'unallocated',
            available: this.props.available,
            unallocated: this.props.unallocated
            }
           
        }
        if(this.props.section == 'group')
        {
           
            const groupInfo = this.props.groups[this.props.groupID]
      

            this.state ={
                type: 'allocated',
            available:groupInfo.available,
            unallocated: groupInfo.allocated

            }

        }
    }
    navigationToDetails( )
    {
        if(this.props.section == 'home')
        {

            this.props.navigation.navigate('AllocationPage')
           
        }
      
      
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
                <TopBarItem type={'amount'}  value={this.state.available}style={ { flex: 1 } } name={this.props.name}/>
                <TopBarItem type={this.state.type} value={this.state.unallocated} style={ { flex: 1 } } name={this.props.name}/>
            </TouchableOpacity>
        );
    }
}



const mapStateToProps = (state) => {
    const {fund} = state
    return{
        available : fund.available,
        allocated: fund.allocated,
        unallocated: fund.unallocated,
        groups: fund.groups
    }
};
export default connect(mapStateToProps)(TopBar)

