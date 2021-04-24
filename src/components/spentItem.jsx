
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ToastAndroid, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
function SpentItem (props) {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginLeft: '4%',
            marginRight: '4%',
            marginBottom: '5%',
            borderRadius: 10,
            backgroundColor: '#385782',
            justifyContent: 'center',
         
        },
        nameContainer: {
            marginLeft: '8%',
            marginRight: '8%',
            height: '28%',
            borderRadius: 5,
            justifyContent: 'center',
            marginBottom: '15%',
            backgroundColor: '#1D2D44'
        },

        amountContainerPositive: {
            marginLeft: '8%',
            marginRight: '8%',
            height: '28%',
            borderRadius: 5,


            justifyContent: 'center',
            backgroundColor: '#05845D',
        },
        amountContainerNegative: {
            marginLeft: '8%',
            marginRight: '8%',
            height: '28%',
            borderRadius: 5,


            justifyContent: 'center',
            backgroundColor: '#85041C',
        },
        amountContainer: {

            marginLeft: '8%',
            marginRight: '8%',
            height: '28%',
            borderRadius: 5,


            justifyContent: 'center',
            backgroundColor: '#C1D0E4'
        },
        textView: {
            color: 'black',
            fontSize: 21,
            textAlign: 'center',

        },
        Nametext: {
            color: 'white',
            fontSize: 15,
            textAlign: 'center',


        }
    })
    const  getData =  () => {
        if(props.type === 'spentLast')
        {
            return(
                <View style={styles.container}>
                <View style={styles.nameContainer}>
                    <Text style={styles.Nametext}>
                        {'Spent Last Month'}
                    </Text>

                </View>
                <View style={styles.amountContainer}>

                    <Text style={styles.textView} >
                    {props.statistics.spent.lastMonth}
                        </Text>
                </View>
            </View>)
        }
        else  if(props.type === 'allocLast')
        {
            return(<View style={styles.container}>
                <View style={styles.nameContainer}>
                    <Text style={styles.Nametext}>
                        {'Allocated Last Month'}
                    </Text>

                </View>
                <View style={styles.amountContainer}>

                    <Text style={styles.textView} >
                    {props.statistics.allocated.lastMonth}
                        </Text>
                </View>
            </View>)
        }
        else  if(props.type === 'spentAvg')
        {
            return(<View style={styles.container}>
                <View style={styles.nameContainer}>
                    <Text style={styles.Nametext}>
                    {'Average Spent'}
                    </Text>

                </View>
                <View style={styles.amountContainer}>

                    <Text style={styles.textView} >
                    {props.statistics.spent.average}
                        </Text>
                </View>
            </View>)
        }
        else  if(props.type === 'allocAvg')
        {
            return(<View style={styles.container}>
                <View style={styles.nameContainer}>
                    <Text style={styles.Nametext}>
                    {'Average Allocated'}
                    </Text>

                </View>
                <View style={styles.amountContainer}>

                    <Text style={styles.textView} >
                    {props.statistics.allocated.average}
                        </Text>
                </View>
            </View>)
        }
    }
    useEffect(() => {setElement(getData())}, [props.categoryFund])
    
        const [element, setElement] = useState(getData())
       
        return (
            <View style={{flex: 1}}>
          {element}
          </View>
        );
    }

   
    const mapStateToProps = (state, ownProps) => {
        const {  fund, statistics } = state
        const {groupID, categoryID} = ownProps
      
        return {
        
            categoryFund: fund.groups[groupID].categories[categoryID],
            statistics: statistics[groupID].categories[categoryID]
        }
    };
    export default connect(mapStateToProps)(SpentItem);
