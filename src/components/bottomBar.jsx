import React from 'react';
import { Button, StyleSheet, ToastAndroid, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { bindActionCreators } from 'redux'
import { addGroup } from '../action/groupActions'
import { connect } from 'react-redux';
class BottomBar extends React.Component {
    constructor(props) {
        super(props)
        this.addTestGroup = this.addTestGroup.bind(this)
    }
    addTestGroup() {
        this.props.add({
            name: 'testing'
        })
    }
    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                borderRadius: 10,
                flexDirection: 'row',
                marginLeft: '3%',
                marginRight: '3%',
                justifyContent: 'space-between',
                alignItems: 'center'
            },
        })
        return (
            <View style={styles.container}>
                <MaterialIcons.Button
                    backgroundColor='#7C7D8D'
                    name="settings"
                    color='black'
                    size={35}
                    iconStyle={{
                        marginRight: 0
                    }}
                />
                <MaterialIcons.Button
                    backgroundColor='#7C7D8D'
                    name="add"
                    color='black'
                    size={35}
                    onPress={this.addTestGroup}
                    iconStyle={{
                        marginRight: 0
                    }}
                />
                <MaterialIcons.Button
                    backgroundColor='#7C7D8D'
                    color='black'
                    name="pie-chart"
                    size={35}
                    iconStyle={{
                        marginRight: 0
                    }} />
            </View>
        );
    }
}
const mapDispatchToProps = (dispatch) => {

    return{
    add: (data) => dispatch(addGroup(data))
    }
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps,mapDispatchToProps)(BottomBar)
