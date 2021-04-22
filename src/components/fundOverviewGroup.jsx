import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import FundOverviewBarGroup from './fundOverviewBarGroup.jsx'
import FundOverviewBarCategory from './fundOverviewBarCategory.jsx';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { addCategory } from '../action/groupActions'
import { initializeCategory } from '../action/fundActions'
import { useHeaderHeight } from '@react-navigation/stack';
import { FlatList } from 'react-native-gesture-handler';
function FundOverviewGroup(props) {
    const { groupID } = props

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


    function addingAction() {

        props.addCategory({ itemStatus: 'new' }, groupID)

        props.initializeCategory(groupID, props.currentGroup.currentCategoryID + 1)

    }

    const [data, setData] = useState(Object.entries(props.groups).map(([key, value]) => ({ key: key, value: value })))

    const renderItem = (itemData) => (

        <FundOverviewBarCategory key={itemData.item.key} groupID={groupID}type={itemData.item.value.itemStatus} id={itemData.item.key} amount={props.groupFund[itemData.item.key].available} categoryID={itemData.item.key} name={itemData.item.value.name} groupID={groupID} />
    );

    useEffect(() => { setData(Object.entries(props.groups).map(([key, value]) => ({ key: key, value: value }))) }, [props.groups])
    return (

        <View style={styles.container}>


            <View style={styles.addButton}>
                <Icon.Button
                    backgroundColor='#98B0D3'
                    name="add"
                    onPress={addingAction}
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
                    <FlatList
                    initialNumToRender={15}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.key}
                    />
                </View>


            </View>

        </View>
    )

}

const mapStateToProps = (state, ownProps) => {
    const { groupData, fund } = state
    const { groupID } = ownProps
    return {
        groups: groupData.groups[groupID].categories,
        currentGroup: groupData.groups[groupID],
        groupFund: fund.groups[groupID].categories


    }
};

const mapDispatchToProps = (dispatch) => {
    return {

        addCategory: (data, groupID) => dispatch(addCategory(data, groupID)),
        initializeCategory: (groupID, categoryID) => dispatch(initializeCategory(groupID, categoryID)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FundOverviewGroup)


