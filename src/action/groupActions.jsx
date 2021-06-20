/*

export function addGroup(data)
{
    return {
        type: 'ADD_GROUP',
        data,
    };
}

export function removeGroup(groupID)
{
    return {
        type: 'REMOVE_GROUP',
        groupID,
    };
}

export function updateGroup(data, groupID)
{
    return {
        type: 'UPDATE_GROUP',
        groupID,
        data,
    };
}


 */


export function resetGroup()
{
    return {
        type: 'RESET',

    };
}

export function addLastTransactionTimeInGroup( categoryID, time)
{
    return{
        type: 'SET_TRANSACTION_TIME_GROUP',
        categoryID,
        time
    }
}


export function addCategory(data)
{
    return {
        type: 'ADD_CATEGORY',
        data,
    };
}

export function removeCategory(categoryID)
{
    return {
        type: 'REMOVE_CATEGORY',
        categoryID,
    };
}

export function updateCategory(data, categoryID)
{
    return {
        type: 'UPDATE_CATEGORY',
        categoryID,
        data,
    };
}
