import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CategoryItem extends React.Component
{

    render()
    {
        const styles = StyleSheet.create({
            container: {
                flex: 1,


                marginTop: '2%',

                marginLeft: '3%',
                marginRight: '3%',


                borderRadius: 10,
                backgroundColor: 'rgba(128,128,128,0.4)',
                justifyContent: 'center',




            },
            innerContainer: {

                paddingRight: "5%",
                paddingLeft: "5%",
                height: 50,
                flexDirection: 'row',
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
            <View style={ styles.container }>
                <View style={ styles.innerContainer }>

                    <Text style={ styles.textView }>
                        {this.props.name}
                        </Text>


                    <Text style={ styles.textView } >
                        Amount
                        </Text>

                </View>

            </View>
        );
    }
}



export default CategoryItem
