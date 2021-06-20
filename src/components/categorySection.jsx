import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import CategoryItem from './categoryItem.jsx';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/core';


function CategorySection(props)
{
    const sliderWidth = Dimensions.get('window').width - 20;
    const navigation = useNavigation();

    const getData = () =>
    {

        let groupArray = makeCategoryArray();

        return groupArray.map((value, key) => <CategoryItem key={key} id={value.categoryID}
                                                            name={value.name}
                                                            amount={props.groupFunds[value.categoryID].available}/>);


    };
    const [itemList, setItems] = useState(getData());
    useEffect(() =>
    {
        setItems(getData());
    }, [props.groupList, props.groupFunds]);


    function makeCategoryArray()
    {
        let temp = [];
        for (let key in props.groupList)
        {

            let tempItem = props.groupList[key];
            tempItem = {
                ...tempItem,
                categoryID: key,
            };
            temp.push(tempItem);

        }
        temp.sort((a, b) => parseInt(b.lastTransaction) - parseInt(a.lastTransaction));

        return temp;
    }

    const items = ({item, index}) =>
    {
        return (
            <View style={{
                flex: 1,
                marginTop: '5%',
            }}>
                {item}
            </View>
        );
    };


    function loadCategoryList()
    {

        navigation.navigate('GroupList', {
            page: 'home',
        });

    }

    const styles = StyleSheet.create({
        container: {

            marginBottom: '4%',
            marginLeft: '2%',
            marginRight: '2%',
            //borderTopRightRadius: 15,
            //borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,

            elevation: 5,
            borderBottomRightRadius: 15,
            flexDirection: 'column',

            flex: 1,
        },
        ListButton: {
            backgroundColor: 'white',
        },


        lines: {

            alignSelf: 'center',
            marginTop: '1.5%',
            height: '50%',
            borderRadius: 30,
            backgroundColor: '#36537F',
            width: '30%',
            marginRight: '5%',
        },
        categoryButton: {
            flex: 1.2,
            alignItems: 'center',
            justifyContent: 'center',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            flexDirection: 'row',
            height: '12%',
            backgroundColor: '#98B0D3',
        },
        caresoul: {
            flex: 9,
            backgroundColor: '#98B0D3',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
        },
        tag: {

            justifyContent: 'flex-start',
            marginLeft: '5%',

        },

    });
    return (
        <View style={styles.container}>

            <TouchableOpacity activeOpacity={1} style={styles.categoryButton}
                              onPress={loadCategoryList}>
                <View style={styles.tag}>

                </View>
                <View style={styles.lines}/>
            </TouchableOpacity>
            <View style={styles.caresoul}>
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
        </View>
    );
}

const mapStateToProps = (state) =>
{
    const {groupData, fund} = state;
    return {
        groupList: groupData.categories,
        groupFunds: fund.categories,
    };
};
export default connect(mapStateToProps)(CategorySection);
