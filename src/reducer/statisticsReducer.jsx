//add initial state 
/*Transaction data model
{
    average: 0,
    lastMonth: 0,
}
*/


const initialState = {

}
export function statisticsReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_GROUP_STATISTICS':
            return {
                ...state,
                [action.groupID]: {
                    transactions: 1,
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
                    transactions: 0,
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
                    ...state[action.groupID],
                    transactions: state[action.groupID].transactions + 1,
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
                    categories: {
                        ...state[action.groupID].categories,
                        [action.categoryID]: {
                            transactions: 1,
                            allocated: {
                                ...action.data.allocated
                            },
                            spent: {
                                ...action.data.spent
                            }
                        }
                    }
                }
            }
        case 'RESET_CATEGORY_STATISTICS':
            return {
                ...state,
                [action.groupID]: {
                    ...state[action.groupID],
                    categories: {
                        ...state[action.groupID].categories,
                        [action.categoryID]: {
                            transactions: 0,
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
            }
        case 'UPDATE_CATEGORY_ALLOCATED':
            return {
                ...state,
                [action.groupID]: {
                    ...state[action.groupID],
                    allocated: {
                        ...state[action.groupID].allocated,
                        ...action.data.allocated
                    },
                    categories: {
                        ...state[action.groupID].categories,
                        [action.categoryID]: {
                            allocated: {
                                ...state[action.groupID][action.categoryID].allocated,
                                ...action.data.allocated
                            },
                        }
                    }
                }
            }
        case 'UPDATE_CATEGORY_SPENDING':
            const catAverage = Math.floor( (state[action.groupID].categories[action.categoryID].spent.average + action.data) / state[action.groupID].categories[action.categoryID].transactions)
            const catThisMonth = state[action.groupID].categories[action.categoryID].spent.thisMonth + action.data
            const groupAvg =  Math.floor((state[action.groupID].spent.average + action.data) /  state[action.groupID].transactions )
            const groupThisMonth = state[action.groupID].spent.thisMonth + action.data
            return {
                ...state,
                [action.groupID]: {
                    ...state[action.groupID],
                    transactions: state[action.groupID].transactions + 1,
                    spent: {
                        ...state[action.groupID].spent,
                        average: groupAvg,
                        thisMonth: groupThisMonth
                       
                    },
                    categories: {
                        ...state[action.groupID].categories,
                        [action.categoryID]: {
                            ...state[action.groupID].categories[action.categoryID],
                            transactions: state[action.groupID].categories[action.categoryID].transactions + 1,
                            spent: {
                                ...state[action.groupID].categories[action.categoryID].spent,
                                average: catAverage,
                                thisMonth: catThisMonth
                            }
                        }
                    }
                }
            }
        default:
            return state

    }
}
