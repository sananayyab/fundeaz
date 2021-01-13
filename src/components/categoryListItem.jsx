import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { updateGroup, updateCategory} from '../action/groupActions'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10,
        flexDirection: 'row',
    },
    innerContainerText: {
        flex: 3.3,

        height: '100%',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#1D2D44',
    },
    innerContainerTextPositive: {
        flex: 1.3,
        top: 6,
        height: '75%',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#05845D',
    },
    innerContainerTextNegative: {
        flex: 1.3,
        top: 6,
        height: '75%',
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
    },
    textInputBar: {
        flex: 1,

        height: '90%',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#1D2D44',
    },
    textInputText: {
        width: "100%",
        padding: '3%',
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    }

})
class CategoryListItem extends React.Component {

    constructor(props) {
        super(props)
        this.setItemType = this.setItemType.bind(this)
        if (this.props.type === 'new') {
            this.state = {
                item: [<View key={this.props.id} style={styles.container}>
                    <View style={styles.textInputBar}>
                        <TextInput onSubmitEditing={(event) => {
                            if(this.props.item === 'group')
                            {
                            this.props.updateGroup({
                                name: event.nativeEvent.text,
                                itemStatus: 'created',
                            });}
                            else if (this.props.item === 'category')
                            {
                                this.props.updateCategory({
                                    name: event.nativeEvent.text,
                                    itemStatus: 'created',
                                },this.props.id,this.props.groupID);
                            }
                            this.setItemType(event.nativeEvent.text)
                        }}
                            style={styles.textInputText} > </TextInput>
                    </View>

                </View>]
            }
        }
        else if (this.props.type === 'created') {
            this.state = {
                item: [<View key={this.props.id} style={styles.container}>
                    <View style={styles.innerContainerText}>
                        <Text style={styles.textText} >{this.props.name}</Text>
                    </View>
                    <View style={((parseInt(this.props.amount) >= 0) ? styles.innerContainerTextPositive : styles.innerContainerTextNegative)}>
                        <Text style={styles.textAmount}>{this.props.amount}</Text>
                    </View>
                </View>]
            }
        }
    }

    setItemType(name)
    {
      
       
            this.setState( {
                item: [<View key={this.props.id} style={styles.container}>
                    <View style={styles.innerContainerText}>
                        <Text style={styles.textText} >{name}</Text>
                    </View>
                    <View style={((parseInt(this.props.amount) >= 0) ? styles.innerContainerTextPositive : styles.innerContainerTextNegative)}>
                        <Text style={styles.textAmount}>{this.props.amount}</Text>
                    </View>
                </View>]
            })
        
    }
    render() {

        return (
            <View style={{ flex: 1 }}>
                {this.state.item}
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    const { id } = ownProps
    return {
        updateGroup: (data) => dispatch(updateGroup(data, id)),
        updateCategory: (data, catID, GrID) => dispatch(updateCategory(data, catID, GrID)),

    }
}

const mapStateToProps = (state) => {


    return {


    }
};
export default connect(null, mapDispatchToProps)(CategoryListItem)

