import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryItem from './categoryItem.jsx';
class CategorySection extends React.Component
{

    render()
    {
        const styles = StyleSheet.create({
            container: {
                flex: 1,


                marginTop: '50%',
                marginLeft: '3%',
                marginRight: '3%',
                maxHeight: '50%',
                borderRadius: 10,
                flexDirection: 'row',
                backgroundColor: 'rgba(128,128,128,0.4)',
                justifyContent: 'space-around',
                flexWrap: 'wrap',

                alignItems: 'center'


            },
            innerContainer: {
                paddingRight: "5%",
                paddingLeft: "5%",
                flex: 1,



            },


        })


        return (
            <View style={ styles.container }>
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />

            </View>
        );
    }
}



export default CategorySection
