export function addCategoryStatistics( categoryID, data)
{
    return {
        type: 'ADD_CATEGORY_STATISTICS',
        data,
        categoryID,
    };
}

export function resetCategoryStatistics(categoryID)
{
    return {
        type: 'RESET_CATEGORY_STATISTICS',
        categoryID,

    };
}


export function setCategoryAllocated( category, categoryID)
{
    return {
        type: 'SET_CATEGORY_ALLOCATED',
        categoryID,

        category,


    };
}
export function setCategorySpent( category, categoryID)
{
    return {
        type: 'SET_CATEGORY_SPENDING',
        categoryID,

        category,


    };
}



export function startOfMonthAction(categoryID)
{
    return {type: 'START_OF_MONTH_ACTION',

    categoryID}
}


/*
export function addGroupStatistics(groupID, data)
{
    return {
        type: 'ADD_GROUP_STATISTICS',
        data,
        groupID,
    };
}

export function resetGroupStatistics(groupID)
{
    return {
        type: 'RESET_GROUP_STATISTICS',
        groupID,
    };
}

export function updateGroupStatistics(data, groupID)
{
    return {
        type: 'UPDATE_GROUP_STATISTICS',
        groupID,
        data,

    };
}

 */
