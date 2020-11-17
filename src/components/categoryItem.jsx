import { StatusBar } from 'expo-status-bar';
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
                height: "95%",
                width: "95%",
         
                borderRadius: 10,
                backgroundColor: '#00487C',
                justifyContent: 'center',
            },
            innerContainer: {
                paddingRight: "5%",
                paddingLeft: "5%",
                height: 50,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center'
            },
            textView: {
                alignSelf: 'center',
                textAlign: 'center',
                flexDirection: 'column',
            }
        })
        return (
            <TouchableOpacity style={ styles.container } onPress={this.pressed}>
                <View style={ styles.innerContainer }>
                    <Text style={ styles.textView }>
                        {this.props.name}
                        </Text>
                    <Text style={ styles.textView } >
                        Amount
                        </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
export default CategoryItem
