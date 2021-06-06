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
            let groupArray = makeGroupArray()

            return groupArray.map((value, key) => <CategoryListItem  setEditing={props.setEditing} key={key} id={value.groupID}
                                                                                            name={value.name}
                                                                                            amount={props.groupFunds[value.groupID].available}
                                                                                            item={'group'}
                                                                                            type={value.itemStatus}/>);
        }
        else if (props.data.page === 'group')
        {

            let categoryArray = makeCategoryArray()
            return categoryArray.map((value, key) =>
                <CategoryListItem setEditing={props.setEditing} key={key} id={value.categoryID} type={value.itemStatus} groupID={props.data.groupID}
                                  amount={props.groupFunds[props.data.groupID].categories[value.categoryID].available}
                                  name={value.name} item={'category'}/>);
        }
    }

    function makeGroupArray()
    {
        let temp = [];
        for (let key in props.groupList)
        {

            let tempItem = props.groupList[key];
            tempItem = {
                ...tempItem,
                groupID: key,
            };
            temp.push(tempItem);

        }
        temp.sort((a, b) => parseInt(b.lastTransaction) - parseInt(a.lastTransaction));

        return temp;
    }

    function makeCategoryArray()
    {
        let temp = [];
        for (let key in props.groupList[props.data.groupID].categories)
        {

            let tempItem = props.groupList[props.data.groupID].categories[key];
            tempItem = {
                ...tempItem,
                categoryID: key,
            };
            temp.push(tempItem);

        }
        temp.sort((a, b) => parseInt(b.lastTransaction) - parseInt(a.lastTransaction));

        return temp;
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


