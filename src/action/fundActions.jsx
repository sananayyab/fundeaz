export function addTotalAvailable(amount)
{
    return {
        type: 'ADD_TOTAL_AVAILABLE',
        amount,

    };
}

export function removeTotalAvailable(amount)
{
    return {
        type: 'REMOVE_TOTAL_AVAILABLE',
        amount,

    };
}

export function allocateToCategory(amount, groupID, categoryID)
{
    return {
        type: 'ALLOCATE_TO_CATEGORY',
        groupID,
        categoryID,
        amount,

    };
}

export function deallocateCategory(amount, groupID, categoryID)
{
    return {
        type: 'DEALLOCATE_CATEGORY',
        groupID,
        categoryID,
        amount,

    };
}


export function spendCategory(amount, groupID, categoryID)
{
    return {
        type: 'SPEND_CATEGORY',
        groupID,
        categoryID,
        amount,

    };
}

export function resetFund()
{
    return {
        type: 'RESET',

    };
}

export function spendOnlyCategory(amount, groupID, categoryID)
{
    return {
        type: 'SPEND_ONLY_CATEGORY',
        groupID,
        categoryID,
        amount,

    };
}


export function removeSpendCategory(amount, groupID, categoryID)
{
    return {
        type: 'REMOVE_SPEND_CATEGORY',
        groupID,
        categoryID,
        amount,

    };
}

export function removeSpendOnlyCategory(amount, groupID, categoryID)
{
    return {
        type: 'REMOVE_SPEND_ONLY_CATEGORY',
        groupID,
        categoryID,
        amount,

    };
}


export function initializeCategory(groupID, categoryID)
{
    return {
        type: 'INITIALIZE_CATEGORY',
        groupID,
        categoryID,

    };
}

export function initializeGroup(groupID)
{
    return {
        type: 'INITIALIZE_GROUP',
        groupID,

    };
}

export function startOfMonthDataResetGroup(groupID)
{
    return {
        type: 'START_OF_MONTH_RESET_GROUP',
        groupID,

    };
}

export function startOfMonthDataResetCategory(groupID, categoryID)
{
    return {
        type: 'START_OF_MONTH_RESET_CATEGORY',
        groupID,
        categoryID,

    };
}









