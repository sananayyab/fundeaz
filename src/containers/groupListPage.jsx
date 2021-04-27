import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import CategoryList from '../components/categoryList.jsx';
import BottomBar from '../components/bottomBar.jsx';
import {useNavigation} from '@react-navigation/native';

function GroupListPage(props)
{


    const navigation = useNavigation();
    var data = {
        page: 'home',
        type: 'category',
    };


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'white',

        },
        bottomBar:
            {
                paddingTop: '4%',
                paddingBottom: '3%',
                height: 100,
            },
        list: {
            margin: '2%',
            borderRadius: 15,
            backgroundColor: '#98B0D3',
            flex: 20,
            elevation: 5,
        },
    });


    return (
        <View style={styles.container}>
            <StatusBar style="default"/>
            <View style={styles.list}>
                <CategoryList data={data}/>
            </View>
            <View style={styles.bottomBar}>
                <BottomBar data={data}/>
            </View>
        </View>
    );
}

export default GroupListPage;


