import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import AllocationGroup from '../components/allocationGroup.jsx';
import TopBarItem from '../components/topBarItem.jsx';

function AllocationPage(props)
{




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
        <View style={styles.container}>
            <View style={styles.topBarContainer}>
                <TopBarItem type={'unallocated'} value={props.unallocated} style={{flex: 1}}/>
            </View>
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                {Object.keys(props.groups).length === 0 ? <View/> : <AllocationGroup/>}
            </ScrollView>
        </View>);
}

const mapStateToProps = (state) =>
{
    const {groupData, fund} = state;
    return {
        groups: groupData.categories,
        unallocated: fund.unallocated,
    };
};
export default connect(mapStateToProps)(AllocationPage);
