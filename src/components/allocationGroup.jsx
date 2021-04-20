import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import AllocationBarGroup from './allocationBarGroup.jsx'
import AllocationBarCategory from './allocationBarCategory.jsx';

function  AllocationGroup (props) {
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
            width: '99%'
        },
        categoryTags: {
            height: 'auto',
            width: '94%',
            marginLeft: 20
        }
    })
 

       
        const { groupID } = props
        return (
            <View style={styles.container}>
               <View style={styles.groupContainer}>
                    <View style={styles.groupTag}>
                        <AllocationBarGroup key={groupID} groupID={groupID} />
                    </View>
                    <View style={styles.categoryTags}>
                        {Object.entries(props.groups).map(([key, value]) => <AllocationBarCategory key={key} categoryID={key} groupID={groupID} />)}
                    </View>
                    </View>
            </View>)
    
}

const mapStateToProps = (state, ownProps) => {
    const { groupData, fund } = state
    const {groupID} =  ownProps 
    return {
        groups: groupData.groups[groupID].categories,



    }
};
export default connect(mapStateToProps)(AllocationGroup)


