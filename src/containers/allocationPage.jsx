import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import AllocationGroup from '../components/allocationGroup.jsx'
import TopBarItem from '../components/topBarItem.jsx';
function AllocationPage (props) {

    
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
                    <TopBarItem type={'unallocated'} value={props.unallocated} style={{ flex: 1 }} />
                </View>
                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator ={false}
  showsHorizontalScrollIndicator={false}>
                    {Object.entries(props.groups).map(([key, value]) => < AllocationGroup key={key} groupID={key} />)}
                </ScrollView>
            </View>)
    }

const mapStateToProps = (state) => {
    const { groupData, fund } = state
    return {
        groups: groupData.groups,
        unallocated: fund.unallocated,
    }
};
export default connect(mapStateToProps)(AllocationPage)
