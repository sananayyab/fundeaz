import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import SpentItem from './spentItem';
import Carousel from 'react-native-snap-carousel';


function SpentSection(props)
{
    const sliderWidth = Dimensions.get('window').width - 20;


    const getData = () =>
    {

        var items = [
            <SpentItem type={'spentLast'} groupID={props.groupID} categoryID={props.categoryID}/>,
            <SpentItem type={'allocLast'} groupID={props.groupID} categoryID={props.categoryID}/>];
        return (items);


    };
    const [itemList, setItems] = useState(getData());

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
        if (props.page === 'home')
        {
            props.navigation.navigate('GroupList', {
                page: 'home',
            });
        } else if (props.page === 'group')
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
                {itemList}
            </View>
        </View>
    );
}


export default SpentSection;
