import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';


function FundOverviewBarGroup(props) {
    const styles = StyleSheet.create({
        container: {
            height: 45,
            margin: 5,
            borderRadius: 10,
            flexDirection: 'row',
            backgroundColor: '#385782',
            justifyContent: 'center',
            alignItems: 'center',
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
        innerContainerAmount: {
            
        },
        textText: {
            paddingLeft: 0,
           
            fontSize: 22,
            color: 'white',
            marginLeft: '5%',
        },
        textAmount: {
          
            fontSize: 20,
            color: 'white',
        }
    })

    const navigation = useNavigation()
    const clickEvent = () => {
     
            navigation.navigate('GroupPage', {
                name: props.name,
                id: props.groupID
            })
        
    }
 
        return (
            <TouchableOpacity activeOpacity={1} onPress={clickEvent} style={styles.container}>
                <View style={styles.innerContainerText}>
                    <Text style={styles.textText} >{props.name}</Text>
                </View>
                <View style={((parseInt( props.available) >= 0) ? styles.innerContainerTextPositive : styles.innerContainerTextNegative)}>
                    <Text style={styles.textAmount}>{props.available}</Text>
                </View>
            </TouchableOpacity>
        );
    
}
const mapStateToProps = (state, ownProps) => {
    const {groupData, fund} = state
    const {groupID} =  ownProps 
    return{
        name: groupData.groups[groupID].name,
        available: fund.groups[groupID].available
       


    }
};
export default connect(mapStateToProps)(FundOverviewBarGroup)

