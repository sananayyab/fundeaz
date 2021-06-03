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

export function categoryRemovedFundAction(groupID, categoryID)
{
    return {
        type: 'CATEGORY_REMOVED',
        groupID,
        categoryID,


    };
}
export function addToUnallocated(amount)
{
    return {
        type: 'ADD_UNALLOCATED',
        amount,

    };
}


export function unallocatedFromGroup(amount, groupID)
{
    return {
        type: 'REMOVE_ALLOCATED_GROUP',
        amount,
        groupID,

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


export function addLastTransactionTime(groupID, categoryID, time)
{
    return {
        type: 'SET_TRANSACTION_TIME',
        groupID,
        categoryID,
        time,
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

export function setGoalAmount(groupID, categoryID, amount)
{
    return {
        type: 'SET_CATEGORY_GOAL',
        groupID,
        categoryID,
        amount,
    };
}










