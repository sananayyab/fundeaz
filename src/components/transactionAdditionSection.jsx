import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
class TranscationAdding extends React.Component
{
    render()
    {
        const styles = StyleSheet.create({
            container: {
                marginBottom: '20%',
                marginLeft: '3%',
                marginRight: '3%',
                borderRadius: 10,
                flex: 1,
            },
            outterContainer: {
                flex: 1,
                borderRadius: 25,
                backgroundColor: 'rgba(128,128,128,0.4)',
                textAlign: 'center'
            },
            textInputes: {
                marginTop: '10%',
                flex: 1.5,
                flexDirection: 'column',
                justifyContent: 'center'
            },
            textViews: {
                height: '13%',
                marginRight: "2%",
                marginLeft: '2%',
                marginBottom: '5%',
                marginTop: '5%'
            },
            buttonStyle: {
                height: '23%',
                marginRight: "12%",
                marginLeft: '12%',
                backgroundColor: 'blue',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
            }
        })
        return (
            <View style={ styles.container }>
                <View style={styles.textInputes}>
                    <View style={styles.textViews}>
                        <TextInput
                            style={ styles.outterContainer }
                            value="Payee"
                        />
                    </View>
                    <View style={ styles.textViews }>
                        <TextInput
                            style={ styles.outterContainer }
                            value="Category"
                        />
                    </View>
                    <View style={ styles.textViews }>
                        <TextInput
                            style={ styles.outterContainer }
                            value="Amount"
                        />
                    </View>
                </View>
                <View style={ {
                    flex: 1,
                justifyContent: 'flex-start'} }>
                    <TouchableOpacity style={styles.buttonStyle }>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default TranscationAdding
