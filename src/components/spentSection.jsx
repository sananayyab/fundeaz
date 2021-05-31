import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import CategoryGoalBar from './categoryGoalBar';
import StatItemGroup from './statItemGroup';
function SpentSection(props)
{
    const sliderWidth = Dimensions.get('window').width - 20;


    let itemList = [<StatItemGroup groupID={props.groupID} categoryID={props.categoryID}/> , <CategoryGoalBar groupID={props.groupID} categoryID={props.categoryID}/> ];


    const items = ({item, index}) =>
    {
        return (
            <View style={{
                flex: 1,

            }}>
                {item}
            </View>
        );
    };


    function loadCategoryList()
    {
        if (props.page === 'home')
        {
            props.navigation.navigate('GroupList', {
                page: 'home',
            });
        }
        else if (props.page === 'group')
        {
            props.navigation.navigate('CategoryList', {
                page: 'group',
                groupID: props.groupID,
            });
        }
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
            flexDirection: 'row',
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

            <View style={styles.categoryButton}
                  onPress={loadCategoryList}>
                <View style={styles.tag}>

                </View>

            </View>
            <View style={styles.caresoul}>
                <Carousel
                    enableSnap={false}
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                    activeSlideAlignment={'start'}
                    data={itemList}
                    renderItem={items}
                    sliderWidth={sliderWidth}
                    itemWidth={sliderWidth}
                />
            </View>
        </View>
    );
}


export default SpentSection;
