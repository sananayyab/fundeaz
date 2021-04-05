
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

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
        backgroundColor: '#1D2D44',
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
    }
})
function TopBarItem(props) {
    const amount

    const [toUse, setTouse] = useState()
    const [text, setText] = useState()


    useEffect(() => {
        if (props.type === 'unallocated') {


            setTouse(styles.innerContainerTextAllocation)
            setText('Unallocated')


            amount = props.unallocated
        }
        else if (props.type === 'allocated') {

            setTouse(styles.innerContainerTextAllocation)
            setText('Allocated')

            amount = props.groups[props.groupID].allocated
        }
        else if (props.type === 'amount') {
            if (props.groupID === null) {
                var value = props.available
            } else {
                var value = props.groups[props.groupID].available
            }

            if (value >= 0) {
                var toUse = styles.innerContainerTextPositive
            }
            else if (value < 0) {
                var toUse = styles.innerContainerTextNegative
            }

            setTouse(toUse)
            setText('Available')
            amount = value
        }

    })






    return (
        <View style={styles.container}>
            <View style={styles.innerContainerAmount}>

                <Text style={styles.textAmount} >{amount}</Text>
            </View>
            <View style={toUse}>
                <Text style={styles.textText}>{text}</Text>

            </View>
        </View>
    );
}



const mapStateToProps = (state) => {
    const { fund } = state
    return {
        available: fund.available,
        allocated: fund.allocated,
        unallocated: fund.unallocated,
        groups: fund.groups
    }
};
export default connect(mapStateToProps)(TopBarItem)

