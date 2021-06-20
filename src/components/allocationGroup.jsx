import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import AllocationBarCategory from './allocationBarCategory.jsx';

function AllocationGroup(props)
{
    const styles = StyleSheet.create({
        container: {

            height: 'auto',
            margin: 10,
            borderRadius: 20,
            backgroundColor: '#98B0D3',
            elevation: 5,

        },
        groupContainer: {
            margin: 8,


        },
        groupTag: {
            height: 55,
            width: '99%',
        },
        categoryTags: {
            height: 'auto',
            width: '97%',
            alignSelf: 'center'
        },
    });


    const {groupID} = props;
    return (
        <View style={styles.container}>
            <View style={styles.groupContainer}>
                <View style={styles.categoryTags}>
                    {Object.entries(props.groups).map(([key, value]) => <AllocationBarCategory key={key}
                                                                                               categoryID={key}/>)}
                </View>
            </View>
        </View>);

}

const mapStateToProps = (state, ownProps) =>
{
    const {groupData, fund} = state;
    const {groupID} = ownProps;
    return {
        groups: groupData.categories,


    };
};
export default connect(mapStateToProps)(AllocationGroup);


