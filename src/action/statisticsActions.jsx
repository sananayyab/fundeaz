export function addCategoryStatistics(groupID, categoryID, data)
{
    return {
        type: 'ADD_CATEGORY_STATISTICS',
        data,
        categoryID,
        groupID,
    };
}

export function resetCategoryStatistics(categoryID, groupID)
{
    return {
        type: 'RESET_CATEGORY_STATISTICS',
        categoryID,
        groupID,
    };
}

export function addCategoryAllocated(data, groupID, categoryID)
{
    return {
        type: 'ADD_CATEGORY_ALLOCATED',
        categoryID,
        data,
        groupID,

    };
}

export function removeCategoryAllocated(data, groupID, categoryID)
{
    return {
        type: 'REMOVE_CATEGORY_ALLOCATED',
        categoryID,
        data,
        groupID,

    };
}

export function addCategorySpent(data, groupID, categoryID)
{
    return {
        type: 'ADD_CATEGORY_SPENDING',
        categoryID,
        data,
        groupID,

    };
}

export function removeCategorySpent(data, groupID, categoryID)
{
    return {
        type: 'REMOVE_CATEGORY_SPENDING',
        categoryID,
        data,
        groupID,

    };
}

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
