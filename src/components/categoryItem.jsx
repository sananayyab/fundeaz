
import React from 'react';
import { StyleSheet, Text, ToastAndroid, View, TouchableOpacity } from 'react-native';
class CategoryItem extends React.Component {


    constructor(props) {
        super(props)
        this.pressed = this.pressed.bind(this);
    }

    pressed() {

        if (this.props.item === "group") {
            /*var tags;
            var list = this.props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name} navigation={this.props.navigation}/>)
            }*/


            // passing , navigation: this.props.navigation was causing the issue, find another way to pass navigation 
            this.props.navigation.navigate('GroupPage', {
                name: this.props.name,
                id: this.props.id
            })


        }




    }

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                marginLeft: '4%',
                marginRight: '4%',
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
                marginBottom: '15%',
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
            <TouchableOpacity style={styles.container} onPress={this.pressed}>
                <View style={styles.nameContainer}>
                    <Text style={styles.Nametext}>
                        {this.props.name}
                    </Text>

                </View>
                <View style={styles.amountContainer}>

                    <Text style={styles.textView} >
                        500
                        </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
export default CategoryItem
