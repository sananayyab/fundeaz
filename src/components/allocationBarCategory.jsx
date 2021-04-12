import React, { createRef, useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid, TextInput , Animated} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { allocateToCategory, deallocateCategory } from '../action/fundActions.jsx'

import { FlingGestureHandler, State, Directions } from 'react-native-gesture-handler';



var mode; 
var oldAmount;
var amount;
function AllocationBarCategory(props) {
    amount = props.fundAllocated
    const position = useRef(new Animated.Value(0)).current;

    const styles = StyleSheet.create({
        container: {
            height: 45,
            width: '97%',
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            marginBottom: 5,
            borderRadius: 10,
            flexDirection: 'row',
            backgroundColor: '#1D2D44',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            transform: [{translateX: position}]
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
            height: '200%',
            width: '100%',
        
            textAlign: 'center',
            fontSize: 20,
            
            color: 'white',
        }
    })
    const [styleToUse, setStyle] = useState(((parseInt(props.fundAllocated) >= 0) ? styles.innerContainerTextPositive : styles.innerContainerTextNegative))

const textFieldRef = createRef()

var beginX
function handleState({nativeEvent}){
    if(nativeEvent.state === State.BEGAN)
    {   
       
        beginX = nativeEvent.absoluteX
        
    }
    if(nativeEvent.state === State.END)
    {
        if(nativeEvent.absoluteX > beginX )
        {
            Animated.sequence([Animated.timing(position,{ toValue: 50, duration: 100,useNativeDriver: true}), Animated.timing(position,{ toValue: 0,duration: 100 ,useNativeDriver : true})]).start()
            setStyle( styles.innerContainerTextPositive )
            oldAmount = amount
            amount = 0
            mode = 'add'
            textFieldRef.current.focus()
        }
        else{
            Animated.sequence([Animated.timing(position,{ toValue: -50, duration: 100,useNativeDriver: true}), Animated.timing(position,{ toValue: 0,duration: 100 ,useNativeDriver : true})]).start()
            setStyle(styles.innerContainerTextNegative)
            oldAmount = amount
            amount = 0
            mode = 'deduct'
            textFieldRef.current.focus()
        }
       
    }
    if(nativeEvent.state === State.CANCELLED)
    {
        if(nativeEvent.absoluteX > beginX )
        {
            Animated.sequence([Animated.timing(position,{ toValue: 50, duration: 100,useNativeDriver: true}), Animated.timing(position,{ toValue: 0,duration: 100 ,useNativeDriver : true})]).start()
            setStyle( styles.innerContainerTextPositive )
            oldAmount = amount
            amount = 0
            mode = 'add'
            textFieldRef.current.focus()
        }
        else{
            Animated.sequence([Animated.timing(position,{ toValue: -50, duration: 100,useNativeDriver: true}), Animated.timing(position,{ toValue: 0,duration: 100 ,useNativeDriver : true})]).start()
            setStyle(styles.innerContainerTextNegative)
            oldAmount = amount
            amount = 0
            mode = 'deduct'
            textFieldRef.current.focus()
        }
 
    }
}
   
     
        
        return (
            <FlingGestureHandler  direction={Directions.RIGHT | Directions.LEFT }
        
            onHandlerStateChange={handleState}> 
            <View style={{height: 50,
        width: '100%'}}>
            <Animated.View style={styles.container}>
                <View style={styles.innerContainerText}>
                    <Text style={styles.textText} >{props.name}</Text>
                </View>
                <View  style={styleToUse}>
                    <TextInput
                    ref={textFieldRef}
                        selectTextOnFocus={true}
                        onEndEditing={(event) => {
                            if (mode === 'add') {
                                props.allocate((parseInt(event.nativeEvent.text) ))
                              
                                amount = parseInt(event.nativeEvent.text) + parseInt( oldAmount)
                           
                                setStyle( styles.innerContainerTextPositive )
                                
                            }
                            else if (mode === 'deduct') {
                                props.deallocate( parseInt( event.nativeEvent.text))
                                amount =  oldAmount - parseInt( event.nativeEvent.text)
                           
                                setStyle( styles.innerContainerTextPositive )
                                
                            }
                        }}
                        keyboardType={'numeric'}
                        style={styles.textAmount} >

                        {amount}
                    </TextInput>


                </View>
            </Animated.View>
            </View>
            </FlingGestureHandler>
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
