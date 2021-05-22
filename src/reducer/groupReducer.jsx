//add initial state
/*Transaction data model
[id]: {
    name:
    currentID:
    categories: {
       [id]:{
        name:
        id:
       }
    }
}

*/
const initialState = {
    currentID: 0,
    groups: {},
};

export function groupReducer(state = initialState, action)
{
    switch (action.type)
    {
        case 'RESET':
            return initialState;
        case 'ADD_GROUP':
            return {
                ...state,
                currentID: state.currentID + 1,
                groups: {
                    ...state.groups,
                    [state.currentID + 1]: {
                        ...action.data,
                        currentCategoryID: 0,
                        categories: {},
                        lastTransaction: 0,
                    },
                },
            };
        case 'REMOVE_GROUP':
            return {
                ...state,
                groups: Object.fromEntries(Object.entries(state.groups).filter(([key, value]) => key !== action.groupID)),

            };
        case 'UPDATE_GROUP':
            return {
                ...state,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        ...action.data,

                    },
                },
            };
        case 'ADD_CATEGORY':
            return {
                ...state,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        currentCategoryID: ++state.groups[action.groupID].currentCategoryID,
                        categories: {
                            ...state.groups[action.groupID].categories,
                            [state.groups[action.groupID].currentCategoryID + 1]: {
                                ...action.data,
                                lastTransaction: 0,
                            },
                        },


                    },
                },
            };
        case 'REMOVE_CATEGORY':
            return {
                ...state,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        categories: Object.fromEntries(Object.entries(state.groups[action.groupID].categories).filter(([key, value]) => key !== action.categoryID)),

                    },


                },
            };
        case 'UPDATE_CATEGORY':
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
                                ...action.data,
                            },
                        },


                    },
                },
            };
        case 'SET_TRANSACTION_TIME_GROUP':
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
        default:
            return state;

    }
}
