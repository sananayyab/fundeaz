import React from 'react';
import {KeyboardAvoidingView, StatusBar, StyleSheet, View} from 'react-native';
import TopBar from '../components/topBarHome.jsx';
import SpentSection from '../components/spentSection';
import BottomBar from '../components/bottomBar.jsx';
import {useNavigation, useRoute} from '@react-navigation/native';
import TransactionSection from '../components/transactionSection';
import CategoryGoalBar from '../components/categoryGoalBar';
import {useHeaderHeight} from '@react-navigation/stack';


function CategoryPage(props)
{

    const route = useRoute();
    const navigation = useNavigation();


    const categoryID = route.params.categoryID;
    const groupID = route.params.groupID;
    const name = route.params.name;

    const styles = StyleSheet.create({
        container: {

            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'white',
        },
        topContainer: {
            top: 5,
            height: 140,
            marginLeft: 5,
            marginRight: 4,
        },
        categoryContainer: {
            height: 200,
            flexDirection: 'column',
        },
        spendingContainer: {
            height: 325,
            flexDirection: 'column',
        },
        bottomBar:
            {
                paddingTop: '5%',
                paddingBottom: '5%',
                height: 100,
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
        },

    });

    return (

        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={useHeaderHeight() + 27}>
        <View style={styles.container}>
            <StatusBar style="default"/>
            <View style={styles.topContainer}>
                <TopBar section={'category'} groupID={groupID} categoryID={categoryID}/>
            </View>
            <View style={styles.categoryContainer}>

                <SpentSection section={'category'} page={'group'} groupName={name} groupID={groupID}
                              categoryID={categoryID} style={{flex: 1}}/>
            </View>
            <View style={styles.spendingContainer}>

                <TransactionSection page={'category'} groupID={groupID} categoryID={categoryID}/>
            </View>
            <View style={styles.bottomBar}>
                <BottomBar data={{
                    page: 'category',
                    groupID: groupID,
                    categoryID: categoryID,
                    type: 'landing',
                }}/>
            </View>
        </View>
        </KeyboardAvoidingView>
    );
}

export default CategoryPage;

