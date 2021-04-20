import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { useNavigation , useRoute} from '@react-navigation/native';
import { connect } from 'react-redux';
import FundOverviewGroup from '../components/fundOverviewGroup'
import TopBarItem from '../components/topBarItem.jsx';
function fundOverviewPage (props) {

    
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'column'
            }, 
            topBarContainer: {
                top: '2%',
                flex: 0.1,
                marginLeft: 5,
                marginRight: 4
            }
        })
        return (
            <View style={styles.container}>
                <View style={styles.topBarContainer}>
                    <TopBarItem type={'amount'} groupID={null}value={props.available} style={{ flex: 1 }} />
                </View>
                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator ={false}
  showsHorizontalScrollIndicator={false}>
                    {Object.entries(props.groups).map(([key, value]) => < FundOverviewGroup key={key} groupID={key} />)}
                </ScrollView>
            </View>)
    }

const mapStateToProps = (state) => {
    const { groupData, fund } = state
    return {
        groups: groupData.groups,
        available: fund.available,
    }
};
export default connect(mapStateToProps)(fundOverviewPage)