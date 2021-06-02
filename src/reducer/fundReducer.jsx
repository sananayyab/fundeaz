/*
possible fields:
total:
group:
category:
*/
const initialState = {
    available: 0,
    unallocated: 0,
    groups: {},
};

export function fundReducer(state = initialState, action)
{
    switch (action.type)
    {
        case 'RESET':
            return initialState;
        case 'ADD_TOTAL_AVAILABLE':
            return {
                ...state,
                available: state.available + action.amount,
                unallocated: state.unallocated + action.amount,
            };
        case 'REMOVE_TOTAL_AVAILABLE':
            return {
                ...state,
                available: state.available - action.amount,
                unallocated: state.unallocated - action.amount,
            };
        case 'INITIALIZE_CATEGORY':
            return {
                ...state,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        categories: {
                            ...state.groups[action.groupID].categories,
                            [action.categoryID]: {
                                available: 0,
                                allocated: 0,
                                goal: 0,
                                lastTransaction: 0,
                            },
                        },
                    },
                },
            };
        case 'INITIALIZE_GROUP':
            return {
                ...state,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        lastTransaction: 0,
                        available: 0,
                        allocated: 0,
                    },
                },
            };
        case 'ALLOCATE_TO_CATEGORY':
            return {
                ...state,
                unallocated: state.unallocated - parseInt(action.amount),
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        available: parseInt(state.groups[action.groupID].available) + parseInt(action.amount),
                        allocated: parseInt(state.groups[action.groupID].allocated) + parseInt(action.amount),
                        categories: {
                            ...state.groups[action.groupID].categories,
                            [action.categoryID]: {
                                ...state.groups[action.groupID].categories[action.categoryID],
                                available: parseInt(state.groups[action.groupID].categories[action.categoryID].available) + parseInt(action.amount),
                                allocated: parseInt(state.groups[action.groupID].categories[action.categoryID].allocated) + parseInt(action.amount),
                            },
                        },
                    },
                },
            };
        case 'DEALLOCATE_CATEGORY':
            let allocatedToGroup = 0;
            let allocatedToCategory = 0;
            let groupAmount = 0;
            let categoryAmount = 0;
            if (action.amount >= 0)
            {
                allocatedToGroup = state.groups[action.groupID].allocated - action.amount;
                allocatedToCategory = state.groups[action.groupID].categories[action.categoryID].allocated - action.amount;
                groupAmount = state.groups[action.groupID].available - action.amount;
                categoryAmount = state.groups[action.groupID].categories[action.categoryID].available - action.amount;
            }
            else
            {
                allocatedToGroup = state.groups[action.groupID].allocated + action.amount;
                allocatedToCategory = state.groups[action.groupID].categories[action.categoryID].allocated + action.amount;
                groupAmount = state.groups[action.groupID].available + action.amount;
                categoryAmount = state.groups[action.groupID].categories[action.categoryID].available + action.amount;

            }

            return {
                ...state,
                unallocated: state.unallocated + action.amount,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        available: groupAmount,
                        allocated: allocatedToGroup,
                        categories: {
                            ...state.groups[action.groupID].categories,
                            [action.categoryID]: {
                                ...state.groups[action.groupID].categories[action.categoryID],
                                available: categoryAmount,
                                allocated: allocatedToCategory,
                            },
                        },
                    },
                },
            };
        case 'SPEND_CATEGORY':
            return {
                ...state,
                available: state.available - action.amount,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        available: state.groups[action.groupID].available - action.amount,
                        categories: {
                            ...state.groups[action.groupID].categories,
                            [action.categoryID]: {
                                ...state.groups[action.groupID].categories[action.categoryID],
                                available: state.groups[action.groupID].categories[action.categoryID].available - action.amount,
                            },
                        },
                    },
                },
            };
        case 'SPEND_ONLY_CATEGORY':
            return {
                ...state,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        categories: {
                            ...state.groups[action.groupID].categories,
                            [action.categoryID]: {
                                ...state.groups[action.groupID].categories[action.categoryID],
                                available: state.groups[action.groupID].categories[action.categoryID].available - action.amount,
                            },
                        },
                    },
                },
            };
        case 'REMOVE_SPEND_CATEGORY':
            return {
                ...state,
                available: state.available + action.amount,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        available: state.groups[action.groupID].available + action.amount,
                        categories: {
                            ...state.groups[action.groupID].categories,
                            [action.categoryID]: {
                                ...state.groups[action.groupID].categories[action.categoryID],
                                available: state.groups[action.groupID].categories[action.categoryID].available + action.amount,
                            },
                        },
                    },
                },
            };
        case 'REMOVE_SPEND_ONLY_CATEGORY':
            return {
                ...state,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        categories: {
                            ...state.groups[action.groupID].categories,
                            [action.categoryID]: {
                                ...state.groups[action.groupID].categories[action.categoryID],
                                available: state.groups[action.groupID].categories[action.categoryID].available + action.amount,
                            },
                        },
                    },
                },
            };
        case 'START_OF_MONTH_RESET_GROUP':
            return {
                ...state,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        allocated: 0,
                    },
                },
            };
        case 'START_OF_MONTH_RESET_CATEGORY':
            return {
                ...state,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        categories: {
                            ...state.groups[action.groupID].categories,
                            [action.categoryID]: {
                                ...state.groups[action.groupID].categories[action.categoryID],
                                allocated: 0,
                            },
                        },
                    },
                },
            };
        case 'SET_TRANSACTION_TIME':
            return {
                ...state,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        lastTransaction: action.time,
                        categories: {
                            ...state.groups[action.groupID].categories,
                            [action.categoryID]: {
                                ...state.groups[action.groupID].categories[action.categoryID],
                                lastTransaction: action.time,
                            },
                        },
                    },
                },


            };
        case 'SET_CATEGORY_GOAL':
            return {
                ...state,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        categories: {
                            ...state.groups[action.groupID].categories,
                            [action.categoryID]: {
                                ...state.groups[action.groupID].categories[action.categoryID],
                                goal: action.amount,
                            },
                        },
                    },
                },


            };
        case 'ADD_UNALLOCATED':
            return {
                ...state,
                unallocated: state.unallocated + action.amount,


            };
        case 'REMOVE_ALLOCATED_GROUP':
            let allocatedAmount =0;
            let availableAmount = 0;
            if(action.amount >= 0)
            {
               allocatedAmount = state.groups[action.groupID].allocated - action.amount

            }
            else {
                allocatedAmount = state.groups[action.groupID].allocated + action.amount
            }
            return {
                ...state,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        allocated: allocatedAmount

                    },
                },
            };
        default:
            return state;
    }
}
