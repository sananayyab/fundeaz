import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {useHeaderHeight} from '@react-navigation/stack';
import FundOverviewGroup from '../components/fundOverviewGroup';
import TopBarItem from '../components/topBarItem.jsx';
import {FlatList} from 'react-native-gesture-handler';

function fundOverviewPage(props)
{

    var pageData = {

        groupID: null,
        categoryID: null,
    };


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',


        },
        topBarContainer: {
            top: 15,
            height: 70,
            marginLeft: 5,
            marginRight: 4,
        },
    });




    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={useHeaderHeight() + 27}>
            <View style={styles.container}>
                <View style={styles.topBarContainer}>
                    <TopBarItem type={'amount'} data={pageData} value={props.available} style={{flex: 1}}/>
                </View>
                <SafeAreaView style={{flex: 1}}>
                    <FundOverviewGroup/>
                </SafeAreaView>
            </View>
        </KeyboardAvoidingView>
    );
}

const mapStateToProps = (state) =>
{
    const { fund} = state;
    return {

        available: fund.available,
    };
};
export default connect(mapStateToProps)(fundOverviewPage);
