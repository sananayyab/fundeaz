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

            this.data ={
                type: 'unallocated',
                groupID: null,
    
            }
           
        }
        if(this.props.section == 'group')
        {
           
          
      

            this.data ={
                type: 'allocated',
                groupID: this.props.groupID,
         
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
                <TopBarItem type={'amount'}  groupID={this.data.groupID}style={ { flex: 1 } } name={this.props.name}/>
                <TopBarItem type={this.data.type} groupID={this.data.groupID} style={ { flex: 1 } } name={this.props.name}/>
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

