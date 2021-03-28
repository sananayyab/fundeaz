
import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import CategoryItem from './categoryItem.jsx';
import Carousel from 'react-native-snap-carousel';
import { useState, useEffect } from 'react';


function CategorySection(props) {
    const sliderWidth = Dimensions.get('window').width - 20;

    const [itemList, setItems] = useState([])
    const getData = () => {
        if (props.section === "group") {
            /*var tags;
            var list = props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name} navigation={props.navigation}/>)
            }*/

            setItems(Object.entries(props.groupList).map(([key, value]) => <CategoryItem key={key} id={key} name={value.name} item={'group'} amount={props.groupFunds[key].available} navigation={props.navigation} />))


        }
        if (props.section === "category") {
            /*var tags;
            var list = props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name} navigation={props.navigation}/>)
            }*/

            setItems(Object.entries(props.groupList[props.groupID].categories).map(([key, value]) => <CategoryItem key={key} id={key} groupID={props.groupID} groupName={props.groupName} name={value.name} item={'category'} amount={props.groupFunds[props.groupID].categories[key].available} navigation={props.navigation} />))


        }
    }

    useEffect(() => { getData() }, [props.groupList, props.groupList.categories])
    const items = ({ item, index }) => {
        return (
            <View style={{
                flex: 1,
                marginTop: "5%",
            }}>
                {item}
            </View>
        );
    }



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
                data={itemList}
                renderItem={items}
                sliderWidth={sliderWidth}
                itemWidth={197}
            />

        </View>
    );
}

const mapStateToProps = (state) => {
    const { groupData, fund } = state
    return {
        groupList: groupData.groups,
        groupFunds: fund.groups
    }
};
export default connect(mapStateToProps)(CategorySection);
