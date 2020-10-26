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
                maxHeight: '5%',
                borderRadius: 10,
                backgroundColor: 'rgba(128,128,128,0.4)',
               


            },
            innerContainer: {
                paddingRight: "5%",
                paddingLeft: "5%",
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            },
           
          
        })

       
        return (
            <View style={ styles.container }>
                <View style={ styles.innerContainer }>
                    <Text >Category</Text>
                    <Text  >Amount</Text>
                </View>
                
            </View>
        );
    }
}



export default CategoryItem
