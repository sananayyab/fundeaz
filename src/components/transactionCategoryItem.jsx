import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';

class TransactionCategoryListItem extends React.Component {

    constructor(props)
    {
        super(props)
        console.log(this.props.name)
    }
    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                marginLeft: 5,
                marginRight: 5,
                marginTop: 5,
                marginBottom: 5,
                borderRadius: 10,
                flexDirection: 'row',
                opacity: 1,
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
            }
        })
        return (
           <TouchableOpacity onPress={() => {this.props.press(this.props.name, this.props.amount)}} style={styles.container}>

                <View style={styles.innerContainerText}>
                    <Text style={styles.textText} >{this.props.name}</Text>
                </View>
                <View style={((parseInt( this.props.amount) >= 0) ? styles.innerContainerTextPositive : styles.innerContainerTextNegative)}>
                    <Text style={styles.textAmount}>{this.props.amount}</Text>
                </View>
      
            </TouchableOpacity>
        );
    }
}
export default TransactionCategoryListItem
