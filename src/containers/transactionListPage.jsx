import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity, StatusBar } from 'react-native';
import TransactionList from '../components/transactionList.jsx'
import BottomBar from '../components/bottomBar.jsx';
import { useNavigation, useRoute } from '@react-navigation/native';

function TransactionListPage (props) {
    const route = useRoute();
    const navigation = useNavigation();
 
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
                flex: 2
            },
            list: {
                margin: '2%',
                borderRadius: 15,
                backgroundColor: '#98B0D3',
                flex: 20,
                elevation: 5,
            }
        });
     
        return (
            <View style={styles.container}>
                <StatusBar style="default" />
                <View style={styles.list}>
                    <TransactionList page={route.params.data.page}groupID={route.params.data.groupID} categoryID={route.params.data.categoryID}/>
                </View>
                <View style={styles.bottomBar}>
                    <BottomBar data={route.params.data} />
                </View>
            </View>
        );
    }

export default TransactionListPage

