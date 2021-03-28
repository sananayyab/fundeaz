import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { updateGroup, updateCategory } from '../action/groupActions'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10,
        flexDirection: 'row',
    },
    innerContainerText: {
        flex: 3.3,
        height: '100%',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#1D2D44',
    },
    innerContainerTextPositive: {
        flex: 1.3,
        top: 6,
        height: '75%',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#05845D',
    },
    innerContainerTextNegative: {
        flex: 1.3,
        top: 6,
        height: '75%',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#85041C',
    },
    innerContainerAmount: {
    },
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
        flex: 1,
        height: '90%',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#1D2D44',
    },
    textInputText: {
        width: "100%",
        padding: '3%',
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    }
})
function CategoryListItem(props) {
    const dispatch = useDispatch();

    const [element, setElement] = useState(0)

    const clickEvent = () => {
        if (props.item === 'group') {
            /*var tags;
            var list = props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name} navigation={props.navigation}/>)
            }*/
            // passing , navigation: props.navigation was causing the issue, find another way to pass navigation 
            props.navigation.navigate('GroupPage', {
                name: props.name,
                id: props.id
            })
        }
    }
    const setCreatedType = (name, amount) => {
        setElement(
         <TouchableOpacity onPress={clickEvent} key={props.id} style={styles.container}>
                <View style={styles.innerContainerText}>
                    <Text style={styles.textText} >{name}</Text>
                </View>
                <View style={((parseInt(props.amount) >= 0) ? styles.innerContainerTextPositive : styles.innerContainerTextNegative)}>
                    <Text style={styles.textAmount}>{props.amount}</Text>
                </View>
            </TouchableOpacity>
            )
        }
        if (props.type === 'new') {
            return (
                <View key={props.id} style={styles.container}>
                    <View style={styles.textInputBar}>
                        <TextInput autoFocus={true} onEndEditing={(event) => {
                            if (props.item === 'group') {
                                dispatch(updateGroup({
                                    name: event.nativeEvent.text,
                                    itemStatus: 'created',
                                }, props.id));
                            }
                            else if (props.item === 'category') {
                                dispatch(updateCategory({
                                    name: event.nativeEvent.text,
                                    itemStatus: 'created',
                                }, props.id, props.groupID));
                            }
                            setCreatedType(event.nativeEvent.text, 0)
                        }}
                            style={styles.textInputText} > </TextInput>
                    </View>
                </View>)
        }

        else if (props.type === 'created') {
            return (
                <TouchableOpacity onPress={clickEvent} key={props.id} style={styles.container}>
                    <View style={styles.innerContainerText}>
                        <Text style={styles.textText} >{props.name}</Text>
                    </View>
                    <View style={((parseInt(props.amount) >= 0) ? styles.innerContainerTextPositive : styles.innerContainerTextNegative)}>
                        <Text style={styles.textAmount}>{props.amount}</Text>
                    </View>
                </TouchableOpacity>)
        }
    


return (
    <View style={{ flex: 1 }}>
        {element}
    </View>
);
}
export default CategoryListItem
