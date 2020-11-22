
import React from 'react';
import { StyleSheet, Text, ToastAndroid, View , TouchableOpacity} from 'react-native';
class CategoryItem extends React.Component
{
    

    constructor(props)
    {
        super(props)
        this.pressed = this.pressed.bind(this);
    }

    pressed()
    {

     // passing , navigation: this.props.navigation was causing the issue, find another way to pass navigation 
        this.props.navigation.navigate('GroupPage',{name: this.props.name})
        ToastAndroid.show("test",ToastAndroid.SHORT)


    }

    render()
    {
        const styles = StyleSheet.create({
            container: {
               flex: 1,
                marginBottom: '5%',
                borderRadius: 10,
                backgroundColor: '#00487C',
                justifyContent: 'center',
                borderColor: '#CAF3DD',
                borderWidth: 5,
            },
            nameContainer: {
                marginLeft: '8%',
                marginRight: '8%',
                height: '28%',
                borderRadius: 5,
               justifyContent: 'center',
                marginBottom: '10%',
                backgroundColor: '#1D2D44'
            },
            amountContainer: {
               
                marginLeft: '8%',
                marginRight: '8%',
                height: '28%',
                borderRadius: 5,
               
               
                justifyContent: 'center',
                backgroundColor: '#05845D'
            },
            textView: {
                color: 'white',
                fontSize: 21,
                textAlign: 'center',
               
            },
            Nametext: {
                color: 'white',
                fontSize: 18,
                textAlign: 'center',
                
               
            }
        })
        return (
            <TouchableOpacity style={ styles.container } onPress={this.pressed}>
                <View style={ styles.nameContainer }>
                    <Text style={ styles.Nametext }>
                        {this.props.name}
                        </Text>
                   
                </View>
                <View style={ styles.amountContainer }>
             
                    <Text style={ styles.textView } >
                        500
                        </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
export default CategoryItem
