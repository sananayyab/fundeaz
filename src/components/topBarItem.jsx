
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
        top:9,
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
        top:9,
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
        top:9,
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


    constructor(props)
    {
        super(props)

        
        if(this.props.type === 'unallocated')
        {

            this.state ={
            toUse : styles.innerContainerTextAllocation,
            text :'Unallocated',
            value: this.props.value
            }
        }
        else if(this.props.type === 'allocated')
        {
            
            this.state ={
                toUse : styles.innerContainerTextAllocation,
                text :'Allocated',
                value: this.props.value
                }
            
        }
        else if (this.props.type === 'amount')
        {
            
            if(this.props.value >= 0)
            {
                 var toUse = styles.innerContainerTextPositive
            }
            else if(this.props.value < 0)
            {
                 var toUse = styles.innerContainerTextNegative
            }

            this.state ={
                toUse : toUse,
                text : 'Available',
                value: this.props.value
                }
        }
    }
    render() {
        
        return (
            <View style={styles.container}>
                <View style={styles.innerContainerAmount}>
                    
                    <Text style={styles.textAmount} >{this.state.value}</Text>
                </View>
                <View style={this.state.toUse}>
                    <Text style={styles.textText}>{this.state.text}</Text>
                   
                </View>
            </View>
        );
    }
}
export default TopBarItem
