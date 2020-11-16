import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, ToastAndroid, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {bindActionCreators } from 'redux'
import {addGroup} from '../action/homepageAction'
import { connect } from 'react-redux';
class BottomBar extends React.Component
{
    constructor(props)
    {
        super(props)
        this.test = this.test.bind(this)
    }
    test(){
        ToastAndroid.show(this.props.number.toString(), ToastAndroid.SHORT);
    }
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
                    onPress={this.test}
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
            </View>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    add: bindActionCreators(addGroup, dispatch)
  })
const mapStateToProps = (state) => {
    const {groups} = state
    return { number: groups.currentIndex}
  };
export default connect(mapStateToProps,mapDispatchToProps)(BottomBar)
