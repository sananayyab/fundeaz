import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

class BottomBar extends React.Component
{

    render()
    {
        const styles = StyleSheet.create({
            container: {
                flex: 1,




                marginLeft: '3%',
                marginRight: '3%',
                marginBottom: '5%',

                borderRadius: 10,

                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center'




            },



        })


        return (
            <View style={ styles.container }>
                <MaterialIcons.Button
                    backgroundColor='teal'
                    name="add"
                    size={ 30 }
                    iconStyle={ {
                        marginRight: 0
                    } }

                />
                <MaterialIcons.Button
                    backgroundColor='teal'
                    name="add"
                    size={ 30 }
                    iconStyle={ {
                        marginRight: 0
                    } } />
                <MaterialIcons.Button
                    backgroundColor='teal'
                    name="add"
                    size={ 30 }
                    iconStyle={ {
                        marginRight: 0
                    } } />


            </View>
        );
    }
}



export default BottomBar
