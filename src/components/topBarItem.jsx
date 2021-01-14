
import React from 'react';
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
class TopBarItem extends React.Component {


    constructor(props) {
        super(props)
        this.updateData = this.updateData.bind(this)

        if (this.props.type === 'unallocated') {

            this.state = {
                toUse: styles.innerContainerTextAllocation,
                text: 'Unallocated',
                value: this.props.unallocated
            }
        }
        else if (this.props.type === 'allocated') {

            this.state = {
                toUse: styles.innerContainerTextAllocation,
                text: 'Allocated',
                value: this.props.groups[this.props.groupID].allocated
            }

        }
        else if (this.props.type === 'amount') {
            if (this.props.groupID === null) {
                var value = this.props.available
            } else {
                var value = this.props.groups[this.props.groupID].available
            }

            if (value >= 0) {
                var toUse = styles.innerContainerTextPositive
            }
            else if (value < 0) {
                var toUse = styles.innerContainerTextNegative
            }



            this.state = {
                toUse: toUse,
                text: 'Available',
                value: value
            }
        }
    }
    updateData() {

    }

    render() {
        if (this.props.type === 'unallocated') {

            this.state = {
                toUse: styles.innerContainerTextAllocation,
                text: 'Unallocated',

            }
            amount =   this.props.unallocated
        }
        else if (this.props.type === 'allocated') {

            this.state = {
                toUse: styles.innerContainerTextAllocation,
                text: 'Allocated',

            }
            amount =   this.props.groups[this.props.groupID].allocated
        }
        else if (this.props.type === 'amount') {
            if (this.props.groupID === null) {
                var value = this.props.available
            } else {
                var value = this.props.groups[this.props.groupID].available
            }

            if (value >= 0) {
                var toUse = styles.innerContainerTextPositive
            }
            else if (value < 0) {
                var toUse = styles.innerContainerTextNegative
            }

            this.state = {
                toUse: toUse,
                text: 'Available',
                
            }
            amount = value
        }
    
        return (
            <View style={styles.container}>
                <View style={styles.innerContainerAmount}>

                    <Text style={styles.textAmount} >{amount}</Text>
                </View>
                <View style={this.state.toUse}>
                    <Text style={styles.textText}>{this.state.text}</Text>

                </View>
            </View>
        );
    }
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

