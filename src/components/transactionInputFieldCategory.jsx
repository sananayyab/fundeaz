import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import TransactionCategoryListItem from './transactionCategoryItem.jsx';
import {connect} from 'react-redux';

function TransactionInputFieldCategory(props)
{
    const dropDownHeight = useRef(new Animated.Value(0)).current;
    const dropDownBorder = useRef(new Animated.Value(0)).current;

    const styles = StyleSheet.create({
        container: {
            marginBottom: '5%',
            top: 10,
            height: 50,
            marginRight: '3%',
            marginLeft: '3%',
            borderRadius: 5,
            justifyContent: 'center',
            backgroundColor: '#385782',
        },
        fieldNameContainer: {
            position: 'absolute',
            height: '70%',
            zIndex: 1,
            borderRadius: 5,
            marginLeft: '2%',
            width: '25%',
            justifyContent: 'center',
            backgroundColor: '#1D2D44',
        },
        textFieldContainerCategory: {
            borderRadius: 5,
            zIndex: 0,
            height: '100%',
            marginLeft: '19%',
        },
        fieldNameText: {

            alignSelf: 'center',
            bottom: '5%',
            fontSize: 17,
            color: 'white',
        },
        textInput: {
            textAlignVertical: 'center',
            flex: 1,
            color: 'white',
            textAlign: 'center',
            fontSize: 20,
            marginRight: 15,
            marginLeft: 15,
        },
        amountContainer: {
            alignSelf: 'flex-end',
            paddingBottom: 1,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            height: '65%',
            alignItems: 'center',
            width: '37%',
            backgroundColor: '#05845D',
            marginRight: 12,
        },
        amountText: {
            top: 1,
            fontSize: 19,
            color: 'white',
        },
        categoryPopUpStyle: {
            backgroundColor: '#98B0D3',
            borderRadius: 15,
            height: '60%',
        },
        incomeText: {
            width: '100%',
            padding: '3%',
            fontSize: 22,
            color: 'white',
            textAlign: 'center',
        },
        incomeBar: {
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            marginBottom: 5,
            borderRadius: 10,
            height: 50,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#05845D',
        },
        dropDownMenu: {
            position: 'absolute',
            top: '110%',
            width: '100%',
            backgroundColor: '#98B0D3',
            borderRadius: 10,
            borderColor: '#C4D1E6',


        },
    });
    useEffect(() =>
    {
        if (props.dropDown)
        {

            Animated.parallel([Animated.timing(dropDownHeight, {
                toValue: 100,
                duration: 150,
                useNativeDriver: false,
            }), Animated.timing(dropDownBorder, {toValue: 6, duration: 5, useNativeDriver: false})]).start();
        }
        else
        {
            Animated.parallel([Animated.timing(dropDownHeight, {
                toValue: 0,
                duration: 150,
                useNativeDriver: false,
            }), Animated.timing(dropDownBorder, {toValue: 0, duration: 150, useNativeDriver: false})]).start();
        }
    }, [props.dropDown]);
    const [data, setData] = useState(() =>
    {

        let categoryName;

        if (props.categoryID !== '' && props.fieldName !== 'income')
        {



            categoryName = props.categoryName;



        }
        else
        {
            categoryName = '';

        }

        if (props.fieldName === 'Income')
        {


            categoryName = 'Income';
        }
        return ({


            chosen: {
                name: categoryName,

            },
        });
    });

    function incomeselected()
    {


        setData({


            chosen: {
                name: 'Income',
            },
        });

        props.data({
            type: 'Income',
            categoryID: '',
            categoryName: 'Income',
        });

        props.setDropDown();
    }

    function Categoryselected(categoryName, amount, category)
    {

        setData({
            chosen: {
                name: categoryName,

            },
        });
        props.data({
            type: 'category',
            categoryID: category,
            categoryName: categoryName,
        });
        props.setDropDown();
    }

    function getInfo()
    {
        let categoryLists = [];



            for (let category in props.groupList)
            {

                let categoryName = props.groupList[category].name;
                let categoryAvailable = props.groupFunds[category].available;
                categoryLists.push(<TransactionCategoryListItem press={Categoryselected} key={category}
                                                               categoryID={category}
                                                                amount={categoryAvailable} name={categoryName}
                                                                item={'category'}/>);
            }

        return categoryLists;
    }


    const listOfCategories = getInfo();
    return (<View style={styles.container}>
            <View style={styles.fieldNameContainer}>
                <Text style={styles.fieldNameText}>
                    {'Category'}
                </Text>
            </View>
            <TouchableOpacity activeOpacity={1} style={styles.textFieldContainerCategory} onPress={props.handlDropDown}>
                <Text style={styles.textInput}>
                    {data.chosen.name}
                </Text>
            </TouchableOpacity>
            <Animated.View style={[styles.dropDownMenu, {
                height: dropDownHeight.interpolate({
                    inputRange: [0, 100],
                    outputRange: ['0%', '600%'],
                }),
                borderWidth: dropDownBorder,
            }]}>
                <ScrollView>
                    <View style={styles.incomeBar}>
                        <TouchableOpacity activeOpacity={1} onPress={incomeselected}
                                          style={{justifyContent: 'center'}}>
                            <Text style={styles.incomeText}>Income</Text>
                        </TouchableOpacity>
                    </View>
                    {listOfCategories}
                </ScrollView>
            </Animated.View>
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
export default connect(mapStateToProps)(TransactionInputFieldCategory);
