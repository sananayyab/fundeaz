
import React from 'react';
import CategoryListItem from './categoryListItem.jsx'
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid,ScrollView } from 'react-native';


class CategoryList extends React.Component {
    constructor(props) {
        super(props)
        this.navigationToDetails = this.navigationToDetails.bind(this);
    }
    navigationToDetails() {
        this.props.navigation.navigate('GroupPage')
        ToastAndroid.show("test", ToastAndroid.SHORT)
    }
    render() {
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
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
                <CategoryListItem style={{ flex: 1 }} name={this.props.name} />
            </ScrollView>
        );
    }
}
export default CategoryList
