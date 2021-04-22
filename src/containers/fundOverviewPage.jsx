import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity, StatusBar, ScrollView,KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';
import { useNavigation , useRoute} from '@react-navigation/native';
import { connect } from 'react-redux';
import { useHeaderHeight } from '@react-navigation/stack';
import FundOverviewGroup from '../components/fundOverviewGroup'
import TopBarItem from '../components/topBarItem.jsx';
import { FlatList } from 'react-native-gesture-handler';
function fundOverviewPage (props) {

   var pageData = {
      
        groupID: null,
        categoryID: null
    }

    
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'column',
              
                
                
            }, 
            topBarContainer: {
              top: 15,
                height: 70,
                marginLeft: 5,
                marginRight: 4
            }
        })
        const [data, setData] = useState(Object.entries(props.groups).map(([key, value]) => ({key: key, value: value})))

        const renderItem = ({item}) => (
        
            < FundOverviewGroup key={item.key} groupID={item.key} />
       );
 
       useEffect(() => {setData(Object.entries(props.groups).map(([key, value]) => ({key: key, value: value})))}, [props.groups])
        return (
            <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={useHeaderHeight() + 27}>
            <View style={styles.container}>
                <View style={styles.topBarContainer}>
                    <TopBarItem type={'amount'} data={pageData}value={props.available} style={{ flex: 1 }} />
                </View>
                <SafeAreaView style={{flex: 1}}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.key}
                    />
                </SafeAreaView>
            </View>
           </KeyboardAvoidingView>
            )
    }

const mapStateToProps = (state) => {
    const { groupData, fund } = state
    return {
        groups: groupData.groups,
        available: fund.available,
    }
};
export default connect(mapStateToProps)(fundOverviewPage)