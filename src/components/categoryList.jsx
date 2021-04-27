import React from 'react';
import CategoryListItem from './categoryListItem.jsx';
import {ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

function CategoryList(props)
{

    /*

    where not used, keeping in case it will be needed
   function navigationToDetails() {
        props.navigation.navigate('GroupPage')

    }

    const [data, setData] = useState(loadData())

*/
    function loadData()
    {
        if (props.data.page === 'home')
        {
            return (Object.entries(props.groupList).map(([key, value]) => <CategoryListItem key={key} id={key}
                                                                                            name={value.name}
                                                                                            amount={props.groupFunds[key].available}
                                                                                            item={'group'}
                                                                                            type={value.itemStatus}/>));
        } else if (props.data.page === 'group')
        {

            return (Object.entries(props.groupList[props.data.groupID].categories).map(([key, value]) =>
                <CategoryListItem key={key} id={key} type={value.itemStatus} groupID={props.data.groupID}
                                  amount={props.groupFunds[props.data.groupID].categories[key].available}
                                  name={value.name} item={'category'}/>));
        }
    }

    const styles = StyleSheet.create({
        container: {

            flex: 1,
            marginTop: '3%',
            marginLeft: '2%',
            marginRight: '2%',
            borderRadius: 10,
            flexDirection: 'column',


        },
    });
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {loadData()}
        </ScrollView>
    );
}

const mapStateToProps = (state) =>
{
    const {groupData, fund} = state;

    return {
        groupList: groupData.groups,
        groupFunds: fund.groups,
    };
};
export default connect(mapStateToProps)(CategoryList);


