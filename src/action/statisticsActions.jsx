export function addCategoryStatistics(groupID,categoryID, data) {
    return {
        type: 'ADD_CATEGORY_STATISTICS',
        data,
        categoryID,
        groupID
    }
}

export function resetCategoryStatistics(categoryID,groupID) {
    return {
        type: 'RESET_CATEGORY_STATISTICS',
        categoryID,
        groupID
    }
}
export function updateCategoryStatistics(data, categoryID,groupID) {
    return {
        type: 'UPDATE_CATEGORY_STATISTICS',
        categoryID,
        data,
        groupID

    }
}
export function addGroupStatistics(groupID, data) {
    return {
        type: 'ADD_GROUP_STATISTICS',
        data,
        groupID,
    }
}

export function resetGroupStatistics(groupID) {
    return {
        type: 'RESET_GROUP_STATISTICS',
        groupID,
    }
}

export function updateGroupStatistics(data, groupID) {
    return {
        type: 'UPDATE_GROUP_STATISTICS',
        groupID,
        data,

    }
}
