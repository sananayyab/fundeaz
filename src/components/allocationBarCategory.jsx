import React, {createRef, useRef, useState} from 'react';
import {Animated, StyleSheet, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {allocateToCategory, deallocateCategory} from '../action/fundActions.jsx';
import {Directions, FlingGestureHandler, State} from 'react-native-gesture-handler';
import {setCategoryAllocated} from '../action/statisticsActions';



function AllocationBarCategory(props)
{
    const  [mode, setMode] = useState('');
    const [oldAmount, setOldAmount] = useState();
    const position = useRef(new Animated.Value(0)).current;
    const [amount, setAmount] = useState(props.fundAllocated);
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
            transform: [{translateX: position}],
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
            flex: 1.2,
            marginRight: '3%',
            height: '70%',
            borderRadius: 6,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#05845D',
        },
        innerContainerTextNegative: {
            flex: 1.2,
            marginRight: '3%',
            height: '70%',
            borderRadius: 6,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#85041C',
        },
        innerContainerTextPositiveAvailable: {
           flex: 1.2,
            marginRight: '3%',
            height: '70%',
            borderRadius: 6,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#05845D',
        },
        innerContainerTextNegativeAvailable: {
            flex: 1.2,
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
            paddingLeft: 10,
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
        },
        textAvailable: {
            top: '5%',
            height: '100%',
            width: '100%',
            textAlign: 'center',
            fontSize: 20,
            color: 'white',
        },
    });
    const [styleToUse, setStyle] = useState(((money_round(props.fundAllocated) >= 0) ? styles.innerContainerTextPositive : styles.innerContainerTextNegative));
    const textFieldRef = createRef();
    var beginX;

    function handleState({nativeEvent})
    {
        if (nativeEvent.state === State.BEGAN)
        {
            beginX = nativeEvent.absoluteX;
        }
        if (nativeEvent.state === State.END)
        {
            if ( nativeEvent.absoluteX - beginX > 55)
            {
                Animated.sequence([Animated.timing(position, {
                    toValue: 50,
                    duration: 100,
                    useNativeDriver: true,
                }), Animated.timing(position, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true,
                })]).start();
                setStyle(styles.innerContainerTextPositive);
                if(mode !== 'deduct')
                {
                    setOldAmount(amount);
                }
                setAmount(0);
                setMode('add');
                textFieldRef.current.focus();
            }else if ( nativeEvent.absoluteX - beginX < -35)
            {
                Animated.sequence([Animated.timing(position, {
                    toValue: -50,
                    duration: 100,
                    useNativeDriver: true,
                }), Animated.timing(position, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true,
                })]).start();
                setStyle(styles.innerContainerTextNegative);
                if(mode !== 'add')
                {
                    setOldAmount(amount);
                }
                setAmount(0);
                setMode('deduct');
                textFieldRef.current.focus();
            }
        }
        if (nativeEvent.state === State.CANCELLED)
        {
            if ( nativeEvent.absoluteX - beginX > 55)
            {
                Animated.sequence([Animated.timing(position, {
                    toValue: 50,
                    duration: 100,
                    useNativeDriver: true,
                }), Animated.timing(position, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true,
                })]).start();
                setStyle(styles.innerContainerTextPositive);
                if(mode !== 'deduct')
                {
                    setOldAmount(amount);
                }
                setAmount(0);
                setMode('add');
                textFieldRef.current.focus();
            } else if ( nativeEvent.absoluteX - beginX < -35)
            {
                Animated.sequence([Animated.timing(position, {
                    toValue: -50,
                    duration: 100,
                    useNativeDriver: true,
                }), Animated.timing(position, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true,
                })]).start();
                setStyle(styles.innerContainerTextNegative);
                if(mode !== 'add')
                {
                    setOldAmount(amount);
                }
                setAmount(0);
                setMode('deduct');
                textFieldRef.current.focus();
            }

        }


    }


    function money_round(num)
    {
        return Math.floor(num * 100) / 100;
    }
    return (
        <FlingGestureHandler direction={Directions.RIGHT | Directions.LEFT | Directions.UP | Directions.DOWN}
                             onHandlerStateChange={handleState}>
            <View style={{
                height: 50,
                width: '100%',
            }}>
                <Animated.View style={styles.container}>
                    <View style={styles.innerContainerText}>
                        <Text style={styles.textText}>{props.name}</Text>
                    </View>
                    <View style={((money_round(props.fundAvailable) >= 0) ? styles.innerContainerTextPositiveAvailable : styles.innerContainerTextNegativeAvailable)}>
                            <Text style={styles.textAvailable}>
                                {props.fundAvailable}
                            </Text>
                    </View>
                    <View style={styleToUse}>
                        <TextInput
                            pointerEvents={'none'}
                            ref={textFieldRef}
                            selectTextOnFocus={true}
                            onSubmitEditing={(event) =>
                            {


                                if (mode === 'add')
                                {


                                    if (!isNaN(parseInt(event.nativeEvent.text)) &&money_round(event.nativeEvent.text) > 0 )
                                    {



                                        props.allocate(event.nativeEvent.text);
                                        props.updateStatistics( {thisMonth: money_round(props.categoryStatistics + (parseFloat(event.nativeEvent.text)))});
                                        setAmount(money_round(parseFloat(event.nativeEvent.text) + parseFloat(oldAmount)));
                                        setStyle(styles.innerContainerTextPositive);
                                        setMode('')

                                    } else
                                    {
                                        setAmount(money_round(parseFloat(oldAmount)));
                                        setStyle(styles.innerContainerTextPositive);
                                        setMode('')
                                    }
                                } else if (mode === 'deduct')
                                {
                                    if (!isNaN(parseInt(event.nativeEvent.text)) && money_round(event.nativeEvent.text) > 0)
                                    {
                                        if (oldAmount > 0)
                                        {
                                            let amountToUse = ((oldAmount - event.nativeEvent.text > 0) ? event.nativeEvent.text : oldAmount)

                                            props.updateStatistics({thisMonth: money_round( props.categoryStatistics - parseFloat(amountToUse))});
                                            props.deallocate(amountToUse);
                                            setAmount(money_round(parseFloat(oldAmount) - parseFloat(amountToUse)));
                                            setStyle(styles.innerContainerTextPositive);
                                            setMode('')
                                        } else
                                        {

                                            setAmount(money_round(parseFloat(oldAmount)));
                                            setStyle(styles.innerContainerTextPositive);
                                            setMode('')
                                        }
                                    } else
                                    {

                                        setAmount(money_round(parseFloat(oldAmount)));
                                        setStyle(styles.innerContainerTextPositive);
                                        setMode('')
                                    }
                                }
                            }}
                            onEndEditing={(event) =>
                            {
                                if (mode === 'add')
                                {
                                    console.log(event.nativeEvent.text)
                                    if (!isNaN(parseInt(event.nativeEvent.text)) &&money_round(event.nativeEvent.text) > 0 )
                                    {



                                            props.allocate(parseFloat(event.nativeEvent.text));
                                        props.updateStatistics({thisMonth: money_round( props.categoryStatistics - parseFloat(event.nativeEvent.text.trim()))});
                                        setAmount(money_round(parseFloat(event.nativeEvent.text) + parseFloat(oldAmount)));
                                            setStyle(styles.innerContainerTextPositive);
                                        setMode('')

                                    } else
                                    {
                                        setAmount(money_round(parseFloat(oldAmount)));
                                        setStyle(styles.innerContainerTextPositive);
                                        setMode('')
                                    }
                                } else if (mode === 'deduct')
                                {
                                    if (!isNaN(parseInt(event.nativeEvent.text)) && money_round(event.nativeEvent.text) > 0)
                                    {
                                        if (oldAmount > 0)
                                        {
                                            let amountToUse = ((parseFloat(oldAmount) -parseFloat( event.nativeEvent.text) > 0) ? event.nativeEvent.text : oldAmount)

                                            props.updateStatistics({thisMonth: money_round( props.categoryStatistics - parseFloat(amountToUse))});
                                            props.deallocate(amountToUse)
                                            setAmount(money_round(parseFloat(oldAmount) - parseFloat(amountToUse)));
                                            setStyle(styles.innerContainerTextPositive);
                                            setMode('')
                                        } else
                                        {

                                            setAmount(money_round(parseFloat(oldAmount)));
                                            setStyle(styles.innerContainerTextPositive);
                                            setMode('')
                                        }
                                    } else
                                    {

                                        setAmount(money_round(parseFloat(oldAmount)));
                                        setStyle(styles.innerContainerTextPositive);
                                        setMode('')
                                    }
                                }
                            }}
                            onChangeText={(text) =>
                            {
                                if (!isNaN(parseInt(text)))
                                {

                                    setAmount(money_round(text));
                                }
                            }}
                            keyboardType={'numeric'}
                            style={styles.textAmount}>
                            {amount}
                        </TextInput>
                    </View>
                </Animated.View>
            </View>
        </FlingGestureHandler>
    );
}

const mapStateToProps = (state, ownProps) =>
{
    const {groupData, fund, statistics} = state;
    const {categoryID} = ownProps;
    return {
        name: groupData.categories[categoryID].name,
        fundAllocated: fund.categories[categoryID].allocated,
        fundAvailable: fund.categories[categoryID].available,
        categoryStatistics:  statistics[categoryID].allocated.thisMonth,
    };
};
const mapDispatchToProps = (dispatch, ownProps) =>
{
    const { categoryID} = ownProps;
    return {
        allocate: (amount) => dispatch(allocateToCategory(amount, categoryID)),
        deallocate: (amount) => dispatch(deallocateCategory(amount, categoryID)),
        updateStatistics: (category) => dispatch(setCategoryAllocated( category, categoryID)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllocationBarCategory);
