import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { allocateToCategory, deallocateCategory } from '../action/fundActions.jsx'
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';
class AllocationBarCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = { amount: this.props.fundAllocated, 
        oldAmount: this.props.fundAllocated}
        
    }
    render() {
        const styles = StyleSheet.create({
            container: {
                height: 55,
                marginLeft: 5,
                marginRight: 5,
                marginTop: 5,
                marginBottom: 5,
                borderRadius: 10,
                flexDirection: 'row',
            },
            innerContainerText: {
                flex: 2.29,
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
                height: '70%',
                borderBottomRightRadius: 5,
                borderTopRightRadius: 5,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#05845D',
            },
            innerContainerTextNegative: {
                flex: 1.4,
                top: 7,
                height: '70%',
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
                fontSize: 15,
                color: 'white',
                marginLeft: '5%',
            },
            textAmount: {
               
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
                    <Text style={styles.textText} >{this.props.name}</Text>
                </View>
                <View style={((parseInt(this.props.fundAllocated) >= 0) ? styles.innerContainerTextPositive : styles.innerContainerTextNegative)}>
                    <TextInput
                        selectTextOnFocus={true}
                        onEndEditing={(event) => {
                            if (event.nativeEvent.text > this.state.amount) {
                                this.props.allocate((parseInt(event.nativeEvent.text) - parseInt( this.state.amount)))
                                if(this.state.amount === 0)
                                {
                                this.setState({amount:parseInt(event.nativeEvent.text) })
                                }
                            }
                            else if (event.nativeEvent.text < this.state.amount) {
                                this.props.deallocate(this.state.amount - parseInt( event.nativeEvent.text))
                                
                            }
                        }}
                        keyboardType={'numeric'}
                        style={styles.textAmount} >

                        {this.state.amount}
                    </TextInput>


                </View>
            </View>
        );
    }
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
