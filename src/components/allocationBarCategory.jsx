import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { allocateToCategory, deallocateCategory } from '../action/fundActions.jsx'
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';
function AllocationBarCategory(props) {

    const [amount, setAmount] = useState(props.fundAllocated)

    const styles = StyleSheet.create({
        container: {
            height: 45,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            marginBottom: 5,
            borderRadius: 10,
            flexDirection: 'row',
            backgroundColor: '#1D2D44',
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
            backgroundColor: '#1D2D44',
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
        innerContainerAmount: {
            
        },
        textText: {
            paddingLeft: 0,
           
            fontSize: 17,
            color: 'white',
            marginLeft: '5%',
        },
        textAmount: {
           top: '5%',
            height: '150%',
            width: '100%',
        
            textAlign: 'center',
            fontSize: 20,
            
            color: 'white',
        }
    })

        
        return (
            <View style={styles.container}>
                <View style={styles.innerContainerText}>
                    <Text style={styles.textText} >{props.name}</Text>
                </View>
                <View style={((parseInt(props.fundAllocated) >= 0) ? styles.innerContainerTextPositive : styles.innerContainerTextNegative)}>
                    <TextInput
                        selectTextOnFocus={true}
                        onEndEditing={(event) => {
                            if (event.nativeEvent.text > amount) {
                                props.allocate((parseInt(event.nativeEvent.text) - parseInt( amount)))
                                if(amount === 0)
                                {
                                setAmount(parseInt(event.nativeEvent.text))
                                }
                            }
                            else if (event.nativeEvent.text < amount) {
                                props.deallocate(amount - parseInt( event.nativeEvent.text))
                                
                            }
                        }}
                        keyboardType={'numeric'}
                        style={styles.textAmount} >

                        {amount}
                    </TextInput>


                </View>
            </View>
        );
    }

const mapStateToProps = (state, ownProps) => {
    const { groupData, fund } = state
    const { groupID, categoryID } = ownProps
    return {
        name: groupData.groups[groupID].categories[categoryID].name,
        fundAllocated: fund.groups[groupID].categories[categoryID].allocated
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {

    const { groupID, categoryID } = ownProps
    return {
        allocate: (amount) => dispatch(allocateToCategory(amount, groupID, categoryID)),
        deallocate: (amount) => dispatch(deallocateCategory(amount, groupID, categoryID)),


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllocationBarCategory)
