//add initial state
/*Transaction data model
{
    average: 0,
    lastMonth: 0,
}
*/


const initialState = {};

export function statisticsReducer(state = initialState, action)
{
    switch (action.type)
    {
        case 'ADD_GROUP_STATISTICS':
            return {
                ...state,
                [action.groupID]: {
                    months: 1,
                    allocated: {
                        ...action.data.allocated,
                    },
                    spent: {
                        ...action.data.spent,
                    },

                },
            };
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
                    },

                },
            };
        case 'UPDATE_GROUP_STATISTICS':
            return {
                ...state,
                [action.groupID]: {
                    ...state[action.groupID],
                    transactions: state[action.groupID].transactions + 1,
                    allocated: {
                        ...state[action.groupID].allocated,
                        ...action.data.allocated,
                    },
                    spent: {
                        ...state[action.groupID].spent,
                        ...action.data.spent,
                    },

                },
            };
        case 'ADD_CATEGORY_STATISTICS':
            return {
                ...state,
                [action.groupID]: {
                    ...state[action.groupID],
                    categories: {
                        ...state[action.groupID].categories,
                        [action.categoryID]: {
                            months: 1,
                            allocated: {
                                ...action.data.allocated,
                            },
                            spent: {
                                ...action.data.spent,
                            },
                        },
                    },
                },
            };
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
                            },
                        },
                    },
                },
            };
        case 'SET_CATEGORY_ALLOCATED':
            return {
                ...state,
                [action.groupID]: {
                    ...state[action.groupID],
                    allocated: {
                        ...state[action.groupID].allocated,
                        ...action.group,
                    },
                    categories: {
                        ...state[action.groupID].categories,
                        [action.categoryID]: {
                            ...state[action.groupID].categories[action.categoryID],
                            allocated: {
                                ...state[action.groupID].categories[action.categoryID].allocated,
                                ...action.category,
                            },
                        },
                    },
                },
            };
        case 'SET_CATEGORY_SPENDING':
            return {
                ...state,
                [action.groupID]: {
                    ...state[action.groupID],
                    spent: {
                        ...state[action.groupID].spent,

                        ...action.group,

                    },
                    categories: {
                        ...state[action.groupID].categories,
                        [action.categoryID]: {
                            ...state[action.groupID].categories[action.categoryID],

                            spent: {
                                ...state[action.groupID].categories[action.categoryID].spent,

                                ...action.category,
                            },
                        },
                    },
                },
            };
        default:
            return state;

    }
}
