import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';


function AllocationBarGroup(props) {
    const styles = StyleSheet.create({
        container: {
            height: 56,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            marginBottom: 5,
            borderRadius: 10,
            flexDirection: 'row',
        },
        innerContainerText: {
            flex: 2.5,
            height: '90%',
            borderRadius: 5,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#1D2D44',
        },
        innerContainerTextPositive: {
            flex: 1.3,
            top: 7,
            height: '65%',
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#05845D',
        },
        innerContainerTextNegative: {
            flex: 1.3,
            top: 7,
            height: '65%',
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
        }
    })
 
        return (
            <View style={styles.container}>
                <View style={styles.innerContainerText}>
                    <Text style={styles.textText} >{props.name}</Text>
                </View>
                <View style={((parseInt( props.fundAllocated) >= 0) ? styles.innerContainerTextPositive : styles.innerContainerTextNegative)}>
                    <Text style={styles.textAmount}>{props.fundAllocated}</Text>
                </View>
            </View>
        );
    
}
const mapStateToProps = (state, ownProps) => {
    const {groupData, fund} = state
    const {groupID} =  ownProps 
    return{
        name: groupData.groups[groupID].name,
        fundAllocated: fund.groups[groupID].allocated
       


    }
};
export default connect(mapStateToProps)(AllocationBarGroup)

