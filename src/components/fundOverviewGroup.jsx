import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import FundOverviewBarGroup from './fundOverviewBarGroup.jsx'
import FundOverviewBarCategory from './fundOverviewBarCategory.jsx';
import Icon  from 'react-native-vector-icons/MaterialIcons';
function  FundOverviewGroup (props) {
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
        },
        addButton: {
          
            width: '15%',
        }
    })
 

       function addingAction()
       {
        
       }
        const { groupID } = props
        return (
            <View style={styles.container}>
             

                    <View style={styles.addButton}> 
                    <Icon.Button
                    backgroundColor='#98B0D3'
                    name="add"
                    onPress={ addingAction}
                    color='black'
                    size={30}
                    iconStyle={{
                        marginRight: 0,
                     
                      
                    }}
                   
                />
                    </View>
            
               <View style={styles.groupContainer}>
                    <View style={styles.groupTag}>
                        <FundOverviewBarGroup key={groupID} groupID={groupID} />
                    </View>
                    <View style={styles.categoryTags}>
                        {Object.entries(props.groups).map(([key, value]) => <FundOverviewBarCategory key={key} categoryID={key} groupID={groupID} />)}
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
export default connect(mapStateToProps)(FundOverviewGroup)


