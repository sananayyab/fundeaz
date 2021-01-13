
import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import CategoryItem from './categoryItem.jsx';
import Carousel from 'react-native-snap-carousel';

class CategorySection extends React.Component {
    sliderWidth = Dimensions.get('window').width - 20;

    constructor(props) {
        super(props)
        this.getData = this.getData.bind(this)
        this.data = this.getData();
    }

    getData() {
        if (this.props.section === "group") {
            /*var tags;
            var list = this.props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name} navigation={this.props.navigation}/>)
            }*/

            return(Object.entries(this.props.groupList).map( ([key, value]) =>  <CategoryItem key={key}  id={ key}name={value.name} item={'group'}  amount={this.props.groupFunds[key].available} navigation={this.props.navigation}/>))
            
            
        }
        if (this.props.section === "category") {
            /*var tags;
            var list = this.props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name} navigation={this.props.navigation}/>)
            }*/
            
            return(Object.entries(this.props.groupList[this.props.groupID].categories).map( ([key, value]) =>  <CategoryItem key={key} groupID={this.props.groupID} groupName={this.props.groupName} name={value.name} item={'category'} amount={this.props.groupFunds[this.props.groupID].categories[key].available} navigation={this.props.navigation}/>))
            
            
        }
    }
    items = ({ item, index }) => {
        return (
            <View style={{
                flex: 1,
                marginTop: "5%",
            }}>
                {item}
            </View>
        );
    }
    render() {

     
        const styles = StyleSheet.create({
            container: {

                marginBottom: '4%',
                marginLeft: '2%',
                marginRight: '2%',
                //borderTopRightRadius: 15,
                //borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,


                borderBottomRightRadius: 15,
                flexDirection: 'row',
                backgroundColor: '#7C7D8D',
                flex: 1,
            },
            ListButton: {
                backgroundColor: 'white',
            },
        })
        return (
            <View style={styles.container}>

                <Carousel
                    enableSnap={false}
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                    activeSlideAlignment={'start'}
                    data={this.getData()}
                    renderItem={this.items}
                    sliderWidth={this.sliderWidth}
                    itemWidth={197}
                />

            </View>
        );
    }
}
const mapStateToProps = (state) => {
    const { groupData, fund } = state
    return { groupList: groupData.groups, 
        groupFunds: fund.groups}
};
export default connect(mapStateToProps)(CategorySection);
