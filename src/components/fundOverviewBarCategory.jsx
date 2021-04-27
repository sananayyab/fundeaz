import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {removeCategory, updateCategory} from '../action/groupActions';
import {useNavigation} from '@react-navigation/core';

var mode;
var oldAmount;

function FundOverviewBarCategory(props)
{


    const styles = StyleSheet.create({
        container: {
            height: 45,
            width: '97%',
            margin: 5,
            borderRadius: 10,
            flexDirection: 'row',
            backgroundColor: '#385782',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',

        },
        editTextField: {
            flex: 1,
            borderRadius: 5,
            backgroundColor: '#385782',
            fontSize: 17,
            color: 'white',
            textAlign: 'center',
        },
        innerContainerText: {
            flex: 2.5,
            height: '100%',
            borderRadius: 10,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#385782',
        },
        innerContainerTextPositive: {
            flex: 1.63,
            marginRight: '3%',
            height: '70%',
            borderRadius: 6,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#05845D',
        },
        innerContainerTextNegative: {
            flex: 1.63,
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
            fontSize: 17,
            color: 'white',
            marginLeft: '5%',
        },
        textAmount: {
            top: '5%',
            height: '100%',
            width: '100%',
            textAlign: 'center',
            fontSize: 20,
            color: 'white',
        },
        textInputText: {

            height: '100%',
            width: '100%',

            fontSize: 17,
            color: 'white',
            textAlign: 'center',
        },
    });


    const navigation = useNavigation();
    const goToCategoryPage = () =>
    {

        navigation.navigate('CategoryPage', {
            name: props.name,
            groupID: props.groupID,
            categoryID: props.id,

        });


    };

    const dispatch = useDispatch();
    const [element, setElement] = useState(() =>
    {
        if (props.type === 'new')
        {
            return (<View key={props.id} style={styles.container}>
                <View style={styles.textInputBar}>

                    <TextInput autoFocus={true} onEndEditing={(event) =>
                    {


                        dispatch(updateCategory({
                            name: event.nativeEvent.text,
                            itemStatus: 'created',
                        }, props.id, props.groupID));

                        setCreatedType(event.nativeEvent.text, 0);
                    }}
                               style={styles.textInputText}> </TextInput>
                </View>
            </View>);
        } else if (props.type === 'created')
        {
            return (<TouchableOpacity activeOpacity={1} onPress={goToCategoryPage} onLongPress={() =>
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
    });

    const deleteSelected = () =>
    {

        dispatch(removeCategory(props.id, props.groupID));
        setElement();

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
                }


                dispatch(updateCategory({
                    name: nameToUse,
                    itemStatus: 'created',
                }, props.id, props.groupID));

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
            <TouchableOpacity activeOpacity={1} onPress={goToCategoryPage} onLongPress={() =>
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

    return (<View style={{
            height: 50,
            width: '100%',
        }}>
            <View style={{flex: 1}}>
                {element}
            </View>
        </View>
    );
}


export default FundOverviewBarCategory;
