
import React from 'react';
import { StyleSheet, Text, ToastAndroid, View, TouchableOpacity } from 'react-native';
function CategoryItem (props) {




  function  pressed() {

        if (props.item === "group") {
            /*var tags;
            var list = props.groupList
            for (var key in list)
            {
                tags.push( <CategoryItem key={key} name={item.name} navigation={props.navigation}/>)
            }*/

          
            // passing , navigation: props.navigation was causing the issue, find another way to pass navigation 
            props.navigation.navigate('GroupPage', {
                name: props.name,
                id: props.id
            })


        }




    }

   
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                marginLeft: '4%',
                marginRight: '4%',
                marginBottom: '5%',
                borderRadius: 10,
                backgroundColor: '#00487C',
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
                backgroundColor: '#05845D'
            },
            textView: {
                color: 'white',
                fontSize: 21,
                textAlign: 'center',

            },
            Nametext: {
                color: 'white',
                fontSize: 14,
                textAlign: 'center',


            }
        })
        return (
            <TouchableOpacity  activeOpacity={1} style={styles.container} onPress={pressed}>
                <View style={styles.nameContainer}>
                    <Text style={styles.Nametext}>
                        {props.name}
                    </Text>

                </View>
                <View style={((parseInt( props.amount) >= 0) ? styles.amountContainerPositive : styles.amountContainerNegative)}>

                    <Text style={styles.textView} >
                        {props.amount}
                        </Text>
                </View>
            </TouchableOpacity>
        );
    }

export default CategoryItem
