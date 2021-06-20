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

export function allocateToCategory(amount, categoryID)
{
    return {
        type: 'ALLOCATE_TO_CATEGORY',

        categoryID,
        amount,

    };
}

export function deallocateCategory(amount, categoryID)
{
    return {
        type: 'DEALLOCATE_CATEGORY',

        categoryID,
        amount,

    };
}


export function addToUnallocated(amount)
{
    return {
        type: 'ADD_UNALLOCATED',
        amount,

    };
}





export function spendCategory(amount, categoryID)
{
    return {
        type: 'SPEND_CATEGORY',

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



export function removeSpendCategory(amount, categoryID)
{
    return {
        type: 'REMOVE_SPEND_CATEGORY',
        categoryID,
        amount,

    };
}


export function initializeCategory( categoryID)
{
    return {
        type: 'INITIALIZE_CATEGORY',

        categoryID,

    };
}




export function addLastTransactionTime(categoryID, time)
{
    return {
        type: 'SET_TRANSACTION_TIME',
        categoryID,
        time,
    };
}


export function startOfMonthDataResetCategory(categoryID)
{
    return {
        type: 'START_OF_MONTH_RESET_CATEGORY',
        categoryID,

    };
}

export function setGoalAmount(categoryID, amount)
{
    return {
        type: 'SET_CATEGORY_GOAL',

        categoryID,
        amount,
    };
}

export function startOfMonthCategoryNegative(categoryID, amount)
{
    return {
        type: 'START_OF_MONTH_CATEGORY_NEGATIVE',

        categoryID,
        amount,
    };
}



/*

export function categoryRemovedFundAction(groupID, categoryID)
{
    return {
        type: 'CATEGORY_REMOVED',
        groupID,
        categoryID,


    };
}


export function startOfMonthDataResetGroup(groupID)
{
    return {
        type: 'START_OF_MONTH_RESET_GROUP',
        groupID,

    };
}

export function initializeGroup(groupID)
{
    return {
        type: 'INITIALIZE_GROUP',
        groupID,

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
export function spendOnlyCategory(amount, groupID, categoryID)
{
    return {
        type: 'SPEND_ONLY_CATEGORY',
        groupID,
        categoryID,
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

 */
