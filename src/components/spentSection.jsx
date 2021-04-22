
import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import SpentItem from './spentItem';
import Carousel from 'react-native-snap-carousel';
import { useState, useEffect } from 'react';


function SpentSection(props) {
    const sliderWidth = Dimensions.get('window').width - 20;

    const [itemList, setItems] = useState([])
    const getData = () => {
       
        var items = [<SpentItem  name={'Spent Last Month'}  amount={200} />, <SpentItem  name={'Allocated Last Month'}  amount={200} /> ,<SpentItem  name={'Spent Average'}  amount={2012} /> , <SpentItem  name={'Allocated Average'}  amount={560} />]
            setItems(items)


        
    }

    useEffect(() => { getData() }, [props.groupList, props.groupList.categories, props.groupFunds])
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


    function loadCategoryList() {
        if(props.page === 'home')
        {
        props.navigation.navigate('GroupList', {
            page: 'home'
        }) 
    }
    else if(props.page === 'group')
    {
        props.navigation.navigate('CategoryList', {
            page: 'group', 
            groupID: props.groupID
        }) 
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
            backgroundColor: '#98B0D3',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
        },
        tag: {
           
            justifyContent: 'flex-start',
            marginLeft: '5%'
            
        }

    })
    return (
        <View style={styles.container}>

            <View  style={styles.categoryButton}
                onPress={loadCategoryList}>
                    <View style={styles.tag}>
           
                </View>
                <View style={styles.lines} />
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
                    itemWidth={197}
                />
            </View>
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
export default connect(mapStateToProps)(SpentSection);
