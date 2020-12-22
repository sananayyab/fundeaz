
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
            available: this.props.fundState.available,
            unallocated: this.props.fundState.unallocated
            }
           
        }
        if(this.props.section == 'group')
        {
           
            const groupInfo = this.props.fundState.groups[this.props.groupID]
      

            this.state ={
                type: 'allocated',
            available:groupInfo.available,
            unallocated: groupInfo.allocated

            }

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
                <TopBarItem type={'amount'}  value={this.state.available}style={ { flex: 1 } } name={this.props.name}/>
                <TopBarItem type={this.state.type} value={this.state.unallocated} style={ { flex: 1 } } name={this.props.name}/>
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

