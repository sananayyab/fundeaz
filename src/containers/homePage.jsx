import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity, StatusBar } from 'react-native';
import TopBar from '../components/topBarHome.jsx';
import CategorySection from '../components/categorySection.jsx';
import BottomBar from '../components/bottomBar.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionSection from '../components/transactionSection';
import { setLastCheckedDate, setStartDate } from '../action/applicationDataAction'
import { startOfMonthDataResetGroup, startOfMonthDataResetCategory } from '../action/fundActions'
import { connect } from 'react-redux';
function HomePage(props) {
    const day = new Date()






    if (props.monthStart === day.getDate() && props.lastChecked !== day.getDate()) {


        for (const [groupKey, groupValue] of Object.entries(props.groups)) {

            props.startOfMonthDataResetGroup(groupKey)
            for (const [catKey, catValue] of Object.entries(props.groups[groupKey].categories)) {
                props.startOfMonthDataResetCategory(groupKey, catKey)

            }


        }

        props.setLastCheckedDate(day.getDate())
    }


    if (props.lastDateChecked < day.getDate()) {

        props.setLastCheckedDate(day.getDate())
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'white',
        },
        topContainer: {
            flex: 5
        },
        categoryContainer: {
            flex: 8,
            flexDirection: 'column'
        },
        spendingContainer: {
            flex: 12,
            flexDirection: 'column'
        },
        bottomBar:
        {
            paddingTop: "5%",
            paddingBottom: "5%",
            flex: 2
        },
        categoryButton: {
            marginLeft: '2%',
            marginRight: '2%',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            height: '12%',
            backgroundColor: '#7C7D8D',
        },
        lines: {
            alignSelf: 'center',
            marginTop: '1.5%',
            height: '50%',
            borderRadius: 30,
            backgroundColor: '#C8C8C8',
            width: '30%',
        }
    });
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.topContainer}>
                <TopBar section={'home'} navigation={props.navigation} />
            </View>
            <View style={styles.categoryContainer}>
                <CategorySection section={"group"} page={'home'} style={{ flex: 1 }} navigation={props.navigation} />
            </View>
            <View style={styles.spendingContainer}>
                <TransactionSection page={'home'} navigation={props.navigation} />
            </View>
            <View style={styles.bottomBar}>
                <BottomBar data={{
                    page: 'home',
                    type: 'landing', 
                    categoryID: ''
                }} navigation={props.navigation} />
            </View>
        </View>
    );
}



const mapStateToProps = (state, ownProps) => {
    const { appData, groupData } = state

    return {
        lastChecked: appData.lastDateChecked,
        monthStart: appData.monthStart,
        groups: groupData.groups
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {


    return {
        setLastCheckedDate: (date) => dispatch(setLastCheckedDate(date)),
        setStartDate: (date) => dispatch(setStartDate(date)),
        startOfMonthDataResetGroup: (groupID) => dispatch(startOfMonthDataResetGroup(groupID)),
        startOfMonthDataResetCategory: (groupID, categoryID) => dispatch(startOfMonthDataResetCategory(groupID, categoryID)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

