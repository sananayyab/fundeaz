import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import CategoryItem from './categoryItem.jsx';
class CategorySection extends React.Component
{

    render()
    {
        const styles = StyleSheet.create({
            container: {






            




                marginTop: 20,
                marginBottom: '4%',
                marginLeft: '3%',
                marginRight: '3%',
                borderRadius: 10,
                backgroundColor: 'rgba(128,128,128,0.4)',
                flex: 1,




            },
            outterContainer: {



            },


        })


        return (
            <View style={ styles.container }>
                <ScrollView  >
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />



                </ScrollView>
            </View>
        );
    }
}



export default CategorySection
