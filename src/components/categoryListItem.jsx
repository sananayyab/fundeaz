import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {removeCategory, removeGroup, updateCategory, updateGroup} from '../action/groupActions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/core';
import {deallocateCategory} from '../action/fundActions';

const styles = StyleSheet.create({
    container: {
        height: 48,
        margin: 5,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#385782',
        justifyContent: 'center',
        alignItems: 'center',
    },
    editTextField: {
        flex: 8,
        borderRadius: 5,
        backgroundColor: '#385782',
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
    },
    innerContainerText: {
        flex: 3.3,
        height: '100%',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#385782',
    },
    innerContainerTextPositive: {
        flex: 1.45,
        marginRight: '3%',
        height: '70%',
        borderRadius: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#05845D',
    },
    innerContainerTextNegative: {
        flex: 1.45,
        marginRight: '3%',
        height: '70%',
        borderRadius: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#85041C',
    },
    innerContainerAmount: {},
    textText: {
        paddingLeft: 0,
        padding: '3%',
        fontSize: 22,
        color: 'white',
        marginLeft: '5%',
    },
    textAmount: {
        fontSize: 20,
        color: 'white',
    },
    textInputBar: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#385782',
    },
    textInputText: {

        height: '100%',
        width: '100%',

        fontSize: 22,
        color: 'white',
        textAlign: 'center',
    },
});

function CategoryListItem(props)
{
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [element, setElement] = useState();
    const clickEvent = () =>
    {
        if (props.item === 'group')
        {
            /*var tags;
            var list = props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name}/>)
            }*/
            // passing , navigation: navigation was causing the issue, find another way to pass navigation
            navigation.navigate('GroupPage', {
                name: props.name,
                id: props.id,
            });
        }
        else   if (props.item === 'category')
        {
            /*var tags;
            var list = props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name}/>)
            }*/
            // passing , navigation: navigation was causing the issue, find another way to pass navigation
            navigation.navigate('CategoryPage', {
                name: props.name,
                categoryID: props.id,
                groupID: props.groupID
            });
        }
    };
    const deleteSelected = () =>
    {
        if (props.item === 'group')
        {
            dispatch(removeGroup(props.id));
            for(let category in props.groupList[props.id].categories)
            {
                let categoryAmount = props.groupFunds[props.id].categories[category].available;
                dispatch(deallocateCategory(categoryAmount, props.id, category))
            }
            setElement();
        } else if (props.item === 'category')
        {
            let categoryAmount = props.groupFunds[props.groupID].categories[props.id].available;
            dispatch(removeCategory(props.id, props.groupID));
            dispatch(deallocateCategory(categoryAmount, props.groupID, props.id))
            setElement();
        }
    };
    const activateEditMode = (name) =>
    {
        setElement(<View style={styles.container}>
            <TextInput onEndEditing={(event) =>
            {
                var nameToUse = '';
                if (name !== null)
                {
                    nameToUse = event.nativeEvent.text;
                    nameToUse.trim()
                }
                if (props.item === 'group')
                {
                    dispatch(updateGroup({
                        name: nameToUse,
                        itemStatus: 'created',
                    }, props.id));
                } else if (props.item === 'category')
                {
                    dispatch(updateCategory({
                        name: nameToUse,
                        itemStatus: 'created',
                    }, props.id, props.groupID));
                }
                setCreatedType(event.nativeEvent.text, 0);
            }}
                       style={styles.editTextField}>{name}</TextInput>
            <View style={{width: '5%'}}/>
            <Icon.Button
                backgroundColor={'white'}
                color="black"
                name="delete"
                size={30}
                onPress={deleteSelected}
                iconStyle={{
                    marginRight: 0,
                }}
            />
        </View>);
    };
    const setCreatedType = (name, amount) =>
    {
        setElement(
            <TouchableOpacity activeOpacity={1} onPress={clickEvent} onLongPress={() =>
            {
                activateEditMode(name);
            }} key={props.id} style={styles.container}>
                <View style={styles.innerContainerText}>
                    <Text style={styles.textText}>{name}</Text>
                </View>
                <View
                    style={((parseInt(props.amount) >= 0) ? styles.innerContainerTextPositive : styles.innerContainerTextNegative)}>
                    <Text style={styles.textAmount}>{props.amount}</Text>
                </View>
            </TouchableOpacity>,
        );
    };
    useEffect(() =>
    {
        if (props.type === 'new')
        {
            setElement(<View key={props.id} style={styles.container}>
                <View style={styles.textInputBar}>
                    <TextInput autoFocus={true} onEndEditing={(event) =>
                    {
                        if (props.item === 'group')
                        {
                            dispatch(updateGroup({
                                name: event.nativeEvent.text.trim(),
                                itemStatus: 'created',
                            }, props.id));
                        } else if (props.item === 'category')
                        {
                            dispatch(updateCategory({
                                name: event.nativeEvent.text.trim(),
                                itemStatus: 'created',
                            }, props.id, props.groupID));
                        }
                        setCreatedType(event.nativeEvent.text.trim(), 0);
                    }}
                               style={styles.textInputText}> </TextInput>
                </View>
            </View>);
        } else if (props.type === 'created')
        {
            setElement(<TouchableOpacity activeOpacity={1} onPress={clickEvent} onLongPress={() =>
            {
                activateEditMode(props.name);
            }} key={props.id} style={styles.container}>
                <View style={styles.innerContainerText}>
                    <Text style={styles.textText}>{props.name}</Text>
                </View>
                <View
                    style={((parseInt(props.amount) >= 0) ? styles.innerContainerTextPositive : styles.innerContainerTextNegative)}>
                    <Text style={styles.textAmount}>{props.amount}</Text>
                </View>
            </TouchableOpacity>);
        }
    }, []);
    return (
        <View style={{flex: 1}}>
            {element}
        </View>
    );
}

const mapStateToProps = (state) =>
{
    const {groupData, fund} = state;
    return {
        groupList: groupData.groups,
        groupFunds: fund.groups,
    };
};
export default connect(mapStateToProps)(CategoryListItem);
