
import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, TouchableWithoutFeedbackBase } from 'react-native';
import TransactionItem from './transactionItem';
import { connect } from 'react-redux';
import CategoryItem from './categoryItem';
class TransactionSection extends React.Component {

    constructor(props) {
        super(props)
        this.loadTransactionList = this.loadTransactionList.bind(this)
        this.getData = this.getData.bind(this)
    }

    getData() {
        if (this.props.page === "home") {
            /*var tags;
            var list = this.props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name} navigation={this.props.navigation}/>)
            }*/

            return (Object.entries(this.props.transactionList).map(([key, value]) => <TransactionItem key={key} id={key} payee={value.payee} amount={value.amount} category={value.categoryName} navigation={this.props.navigation} />))


        }
        if (this.props.page === "group") {
            /*var tags;
            var list = this.props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name} navigation={this.props.navigation}/>)
            }*/

            return (Object.entries(this.props.transactionList).map(([key, value]) => (parseInt(value.groupID) === parseInt(this.props.groupID)) && <TransactionItem key={key} id={key} payee={value.payee} amount={value.amount} category={value.categoryName} navigation={this.props.navigation} />))


        }
    }

    loadTransactionList() {
      
        if (this.props.page === 'group') {
            this.props.navigation.navigate('TransactionList', {
                groupID: this.props.groupID
            })
        } else   if (this.props.page === "home")
        {
        this.props.navigation.navigate('TransactionList', {
            groupID: -1
        })
    }
        
        
    }
    render() {
        const data = this.getData();
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                marginLeft: '2%',
                marginRight: '2%',
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                backgroundColor: '#8D8D92',
            },
            TransactionContainer: {
                flex: 1,
            },
            TransactionButton: {
                width: '100%',
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
                height: '8%',
                zIndex: 1,
                position: 'absolute',
            },
            lines: {
                alignSelf: 'center',
                marginTop: '1.5%',
                height: '50%',
                borderRadius: 30,
                backgroundColor: '#C8C8C8',
                width: '30%',
            }
        })
        return (
            <View style={styles.container} >
                <TouchableOpacity style={styles.TransactionButton}
                    onPress={this.loadTransactionList}>
                    <View style={styles.lines} />
                </TouchableOpacity>
                <ScrollView style={styles.TransactionContainer} showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    <View style={{ height: 20 }} />
                    {data}

                    <View style={{ height: 51 }} />
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { transactions } = state
    return { transactionList: transactions.transactions }
};
export default connect(mapStateToProps)(TransactionSection);

