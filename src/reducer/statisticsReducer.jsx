//add initial state 
/*Transaction data model
{
    average: 0,
    lastMonth: 0,
    thisMonth: 0,
}
*/


const initialState = {

}
export function statisticsReducer(state = initialState, action) {
    switch (action.type) {
        //TODO: add statistics per month
        case 'ADD_GROUP_STATISTICS':
            return {
                ...state,
                [action.groupID]: {
                    allocated: {
                        ...action.data.allocated
                    },
                    spent: {
                        ...action.data.spent
                    }

                }
            }
        case 'RESET_GROUP_STATISTICS':
            return {
                ...state,
                [action.groupID]: {
                    ...state[action.groupID],
                    allocated: {
                        average: 0,
                        lastMonth: 0,
                        thisMonth: 0,
                    },
                    spent: {
                        average: 0,
                        lastMonth: 0,
                        thisMonth: 0,
                    }

                }
            }
        case 'UPDATE_GROUP_STATISTICS':
            return {
                ...state,
                [action.groupID]: {
                    allocated: {
                        ...state[action.groupID].allocated,
                        ...action.data.allocated
                    },
                    spent: {
                        ...state[action.groupID].spent,
                        ...action.data.spent
                    }

                }
            }
        case 'ADD_CATEGORY_STATISTICS':
            return {
                ...state,
                [action.groupID]: {
                    ...state[action.groupID],
                    [action.categoryID]: {
                        allocated: {
                            ...action.data.allocated
                        },
                        spent: {
                            ...action.data.spent
                        }
                    }
                }
            }
        case 'RESET_CATEGORY_STATISTICS':
            return {
                ...state,
                [action.groupID]: {
                    ...state[action.groupID],
                    [action.categoryID]: {
                        allocated: {
                            average: 0,
                            lastMonth: 0,
                            thisMonth: 0,
                        },
                        spent: {
                            average: 0,
                            lastMonth: 0,
                            thisMonth: 0,
                        }
                    }
                }
            }
        case 'UPDATE_CATEGORY_STATISTICS':
            return {
                ...state,
                [action.groupID]: {
                    ...state[action.groupID],
                    [action.categoryID]: {
                        allocated: {
                            ...state[action.groupID][action.categoryID].allocated,
                            ...action.data.allocated
                        },
                        spent: {
                            ...state[action.groupID][action.categoryID].spent,
                            ...action.data.spent
                        }
                    }
                }
            }
        default:
            return state

    }
}
