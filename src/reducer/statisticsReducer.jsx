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

        case 'ADD_CATEGORY_STATISTICS':
            return {
                ...state,
                        [action.categoryID]: {
                            months: 1,
                            allocated: {
                                ...action.data.allocated,
                            },
                            spent: {
                                ...action.data.spent,
                            },
                        },

            };
        case 'RESET_CATEGORY_STATISTICS':
            return {
                ...state,


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

            };
        case 'SET_CATEGORY_ALLOCATED':
            return {
                ...state,


                        [action.categoryID]: {
                            ...state[action.categoryID],
                            allocated: {
                                ...state[action.categoryID].allocated,
                                ...action.category,
                            },
                        },

            };
        case 'SET_CATEGORY_SPENDING':
            return {
                ...state,


                        [action.categoryID]: {
                            ...state[action.categoryID],

                            spent: {
                                ...state[action.categoryID].spent,
                                ...action.category,
                            },
                        },

            };
        case 'START_OF_MONTH_ACTION':
        {
            return {
                ...state,

                        [action.categoryID]: {
                            ...state[action.categoryID],

                            spent: {
                                ...state[action.categoryID].spent,

                                lastMonth: state[action.categoryID].spent.thisMonth,
                                thisMonth: 0,
                            },
                            allocated: {
                                ...state[action.categoryID].allocated,
                                lastMonth: state[action.categoryID].allocated.thisMonth,
                                thisMonth: 0,
                            },
                        },

            }

        }

        /*
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

         */
        default:
            return state;

    }
}
