
import React from 'react';
import CategoryListItem from './categoryListItem.jsx'
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid,ScrollView } from 'react-native';
import { connect } from 'react-redux';

class CategoryList extends React.Component {
    constructor(props) {
        super(props)
        this.navigationToDetails = this.navigationToDetails.bind(this);
        this.loadData = this.loadData.bind(this);
       
    }
    navigationToDetails() {
        this.props.navigation.navigate('GroupPage')
        
    }
    loadData()
    {
        if(this.props.data.page === 'home')
        {
            return(Object.entries(this.props.groupList).map( ([key, value]) =>  <CategoryListItem key={key}  id={ key}name={value.name} amount={this.props.groupFunds[key].available} item={'group'} navigation={this.props.navigation}/>))
        }
        else if (this.props.data.page === 'group')
        {
            return(Object.entries(this.props.groupList[this.props.groupID].categories).map( ([key, value]) =>  <CategoryListItem key={key} groupID={this.props.groupID} groupName={this.props.groupName} name={value.name} item={'category'} navigation={this.props.navigation}/>))
        }
    }
    render() {
        const data = this.loadData()
        const styles = StyleSheet.create({
            container: {
               
                flex: 1,
                marginTop: '3%',
                marginLeft: '2%',
                marginRight: '2%',
                borderRadius: 10,
                flexDirection: 'column',
              

            },
        })
        return (
            <ScrollView style={styles.container}  showsVerticalScrollIndicator={false} >
                {data}
            </ScrollView>
        );
    }
}
const mapStateToProps = (state) => {
    const { groupData, fund } = state

    return { groupList: groupData.groups,
    groupFunds: fund.groups }
};
export default connect(mapStateToProps)(CategoryList);
