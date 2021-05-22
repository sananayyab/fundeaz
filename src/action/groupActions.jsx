export function addGroup(data)
{
    return {
        type: 'ADD_GROUP',
        data,
    };
}

export function resetGroup()
{
    return {
        type: 'RESET',

    };
}

export function addLastTransactionTimeInGroup(groupID, categoryID, time)
{
    return{
        type: 'SET_TRANSACTION_TIME_GROUP',
        groupID,
        categoryID,
        time
    }
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


export function addCategory(data, groupID)
{
    return {
        type: 'ADD_CATEGORY',
        groupID,
        data,
    };
}

export function removeCategory(categoryID, groupID)
{
    return {
        type: 'REMOVE_CATEGORY',
        categoryID,
        groupID,
    };
}

export function updateCategory(data, categoryID, groupID)
{
    return {
        type: 'UPDATE_CATEGORY',
        categoryID,
        groupID,
        data,
    };
}
