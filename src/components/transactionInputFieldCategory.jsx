
import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Text, TouchableWithoutFeedbackBase } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import TransactionCategoryListItem from './transactionCategoryItem.jsx';
import { connect } from 'react-redux';
import categoryList from './categoryList.jsx';

class TransactionInputFieldCategory extends React.Component {
    constructor(props) {
        super(props)
        this.getData = this.getData.bind(this)
        this.selected = this.selected.bind(this)
        this.state ={
            showModal : false,
            chosen : {
                name: '',
                amount: ''
            }
        }
        this.data = this.getData()
     
    }

    selected(name, amount, group, category){
        this.setState({
            showModal: false,
            chosen: {
                name: name,
                amount: amount
            }
        })

        this.props.data( {
          
            groupID: group,
            categoryID: category,
            categoryName: name,
        })
    }

    getData() {
        var categoryLists = [];     

        for(group in this.props.groupList){
            for(category in this.props.groupList[group].categories)
            {

                var categoryName = this.props.groupList[group].categories[category].name
                var categoryAvailable = this.props.groupFunds[group].categories[category].available
             
            categoryLists.push( <TransactionCategoryListItem press={this.selected} key={category} groupID={group} categoryID={category} amount={categoryAvailable} name={categoryName} item={'category'} />)
            }
        }
       
        return categoryLists
    }


    
    render() {


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
            textFieldContainer: {
                marginTop: '10%',

                borderRadius: 15,
                borderBottomRightRadius: 0,
                zIndex: 2,
                height: '50%',
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
            }


        })
      
        return (

            <View style={styles.container} >
                <View style={styles.fieldNameContainer}>
                    <Text style={styles.fieldNameText}>
                        {this.props.fieldName}
                    </Text>
                </View>
                <TouchableOpacity style={styles.textFieldContainer} onPress={() => {this.setState({showModal: true})}}>
                    <Modal  style={styles.categoryPopUpStyle}  isVisible={this.state.showModal}>
                        <ScrollView showsVerticalScrollIndicator={false} >
                            {this.data}
                        </ScrollView>
                    </Modal>
                    <Text style={styles.textInput}>
                    
                        {this.state.chosen.name}
                    </Text>
                </TouchableOpacity>
                <View>


                    <View style={styles.amountContainer}>
                        <Text style={styles.amountText} >{this.state.chosen.amount}</Text>
                    </View>

                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { groupData, fund } = state
    return { groupList: groupData.groups, 
        groupFunds: fund.groups}
};
export default connect(mapStateToProps)(TransactionInputFieldCategory);




