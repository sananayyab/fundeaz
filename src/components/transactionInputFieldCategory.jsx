
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Text, TouchableWithoutFeedbackBase } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import TransactionCategoryListItem from './transactionCategoryItem.jsx';
import { connect } from 'react-redux';
import categoryList from './categoryList.jsx';

const styles = StyleSheet.create({
    container: {
        top: 10,
        height: 80,

    },
    fieldNameContainer: {
        position: 'absolute',
        height: '55%',
        zIndex: 0,
        borderRadius: 15,
        top: '10%',
        width: '35%',
        marginLeft: '3%',
        backgroundColor: '#00487C'
    },
    textFieldContainerCategory: {
        marginTop: '10%',

        borderRadius: 15,
        borderBottomRightRadius: 0,
        zIndex: 2,
        height: '55%',
        marginRight: '3%',

        marginLeft: '20%',
        backgroundColor: '#1D2D44'
    },
    textFieldContainerIncome: {
        marginTop: '10%',

        borderRadius: 15,

        zIndex: 2,
        height: '55%',
        marginRight: '3%',

        marginLeft: '20%',
        backgroundColor: '#1D2D44'
    },
    fieldNameText: {

        paddingRight: '6%',

        alignSelf: 'center',

        fontSize: 19,
        color: 'white',

    },
    textInput: {
        flex: 1,
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
     
        marginRight: 15,
        marginLeft: 15,
        top: 4,
    },
    amountContainer: {

        alignSelf: "flex-end",
        paddingBottom: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: '65%',
        alignItems: 'center',
        width: "37%",
        backgroundColor: '#05845D',
        marginRight: 12,
    },
    amountText: {

        top: 1,
        fontSize: 19,
        color: "white",
    },
    categoryPopUpStyle: {
        backgroundColor: 'white',

        borderRadius: 15,
        height: '60%'
    },
    incomeText: {
        width: "100%",
        padding: '3%',
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    },
    incomeBar: {

        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10,
        height: 50,

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#05845D',
    },



})
function  TransactionInputFieldCategory (props) {
  
       
  
        const [data, setData]  = useState()
        const [modal, setModal] = useState(false)
        useEffect(() => {
        var categoryAvailable;
        var categoryName;
        var normalCategory = true;
        if (props.categoryID !== '') {
            categoryName = props.groupList[props.groupID].categories[props.categoryID].name
            categoryAvailable = props.groupFunds[props.groupID].categories[props.categoryID].available

        }
        else {
            categoryName = ''
            categoryAvailable = ''
        }
        var bar = <View style={styles.amountContainer}>
            <Text style={styles.amountText}> {categoryAvailable}</Text>
        </View>;
        if (props.fieldName === 'Income') {
            normalCategory = false;
            bar = <View></View>;
            categoryName = 'Income'

        }

       setData({
         
            amountBar: bar,
            category: normalCategory,
            chosen: {
                name: categoryName,
                amount: categoryAvailable
            }
        })
       
    }, [])
      

    
  function  incomeselected() {
      setModal(false)
    setData({

         
            amountBar: <View></View>,
            category: false,
            chosen: {
                name: 'Income',

            }

        })


        props.data({
         
            type: 'Income',
            categoryName: 'Income'


        })
    }
   function  Categoryselected(name, amount, group, category) {
       setModal(false)
    setData({
           
            amountBar: <View style={styles.amountContainer}>
                <Text style={styles.amountText} >{amount}</Text>
            </View>,
            category: true,
            chosen: {
                name: name,
                amount: amount
            }
        })
        
    
        props.data({

            type: 'category',
            groupID: group,
            categoryID: category,
            categoryName: name,
        })
    }

    function getInfo() {
        var categoryLists = [];

        if (props.page.pageName === 'home') {
            for (group in props.groupList) {
                for (category in props.groupList[group].categories) {

                    var categoryName = props.groupList[group].categories[category].name
                    var categoryAvailable = props.groupFunds[group].categories[category].available

                    categoryLists.push(<TransactionCategoryListItem press={Categoryselected} key={category + group} groupID={group} categoryID={category} amount={categoryAvailable} name={categoryName} item={'category'} />)
                }
            }
        }
        else if (props.page.pageName === 'group') {
            for (category in props.groupList[props.page.groupID].categories) {

                var categoryName = props.groupList[props.page.groupID].categories[category].name
                var categoryAvailable = props.groupFunds[props.page.groupID].categories[category].available

                categoryLists.push(<TransactionCategoryListItem press={Categoryselected} key={category} groupID={props.page.groupID} categoryID={category} amount={categoryAvailable} name={categoryName} item={'category'} />)
            }
        }
        return categoryLists
    


    }

    const listOfCategories = getInfo()


        return ( <View style={styles.container} >
                <View style={styles.fieldNameContainer}>
                    <Text style={styles.fieldNameText}>
                        {'Category'}
                    </Text>
                </View>
                <TouchableOpacity  activeOpacity={1} style={data.category ? styles.textFieldContainerCategory : styles.textFieldContainerIncome} onPress={() => {  setModal(true) }}>
                    <Modal onRequestClose={() => {
                        setModal(false)
                    }} style={styles.categoryPopUpStyle} isVisible={modal}>

                        <View style={styles.incomeBar}>
                            <TouchableOpacity  activeOpacity={1} onPress={incomeselected} style={{ justifyContent: 'center', }} >
                                <Text style={styles.incomeText}>Income</Text>
                            </TouchableOpacity>
                        </View>


                        <ScrollView showsVerticalScrollIndicator={false} >
                            {listOfCategories}
                        </ScrollView>
                    </Modal>
                    <Text style={styles.textInput}>

                        {data.chosen.name}
                    </Text>
                </TouchableOpacity>
                <View >


                    {data.amountBar}

                </View>
            </View>
        )
    }



const mapStateToProps = (state) => {
    const { groupData, fund } = state
    return {
        groupList: groupData.groups,
        groupFunds: fund.groups
    }
};
export default connect(mapStateToProps)(TransactionInputFieldCategory);




