import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: '2%',
        marginRight: '2%',
        borderRadius: 10,
        flexDirection: 'row',
    },
    innerContainerAmount: {
        flex: 2.5,
        height: '70%',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4972AB',
    },
    innerContainerTextAllocation: {
        flex: 1.2,
        top: 9,
        height: '43%',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00487C',
    },
    innerContainerTextPositive: {
        flex: 1.2,
        top: 9,
        height: '43%',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#05845D',
    },
    innerContainerTextNegative: {
        flex: 1.2,
        top: 9,
        height: '43%',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#85041C',
    },
    textAmount: {
        fontSize: 28,
        color: 'white',
    },
    textText: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 17,
        color: 'white',
    },
});

function TopBarItem(props)
{


    const navigation = useNavigation();

    const [toUse, setTouse] = useState();
    const [text, setText] = useState();
    const [amount, setAmount] = useState();
    useEffect(() =>
    {
        if (props.type === 'unallocated')
        {
            setTouse(styles.innerContainerTextAllocation);
            setText('Unallocated');
            setAmount(props.unallocated);
        } else if (props.type === 'allocated')
        {


                var allocatedValue = props.categories[props.data.categoryID].allocated;

            setTouse(styles.innerContainerTextAllocation);
            setText('Allocated');
            setAmount(allocatedValue);
        } else if (props.type === 'amount')
        {
         if (props.data.categoryID === null)
            {
                var value = props.available;
            } else
            {
                var value = props.categories[props.data.categoryID].available;
            }
            if (value >= 0)
            {
                var toUse = styles.innerContainerTextPositive;
            } else if (value < 0)
            {
                var toUse = styles.innerContainerTextNegative;
            }
            setTouse(toUse);
            setText('Available');
            setAmount(value);
        }
    }, [props.fund]);

    function handleTouch()
    {
        if (props.section == 'home')
        {
            if (props.type === 'unallocated')
            {
                navigation.navigate('AllocationPage');
            }

        }
    }

    return (
        <TouchableOpacity activeOpacity={1} onPress={handleTouch} style={styles.container}>
            <View style={styles.innerContainerAmount}>
                <Text style={styles.textAmount}>{amount}</Text>
            </View>
            <View style={toUse}>
                <Text style={styles.textText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const mapStateToProps = (state) =>
{
    const {fund} = state;
    return {
        available: fund.available,
        allocated: fund.allocated,
        unallocated: fund.unallocated,
        categories: fund.categories,
        fund: fund,
    };
};
export default connect(mapStateToProps)(TopBarItem);
