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
    categories: {},
};

export function groupReducer(state = initialState, action)
{
    switch (action.type)
    {
        case 'RESET':
            return initialState;

/*
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


 */
        case 'ADD_CATEGORY':
            return {
                ...state,
                currentID: ++state.currentID,
                categories: {
                    ...state.categories,
                    [state.currentID]: {
                        ...action.data,
                        lastTransaction: 0,
                    },


                },

            };
        case 'REMOVE_CATEGORY':
            return {
                ...state,
                categories: Object.fromEntries(Object.entries(state.categories).filter(([key, value]) => key !== action.categoryID)),


            };
        case 'UPDATE_CATEGORY':
            return {

                ...state,
                categories: {
                    ...state.categories,
                    [action.categoryID]: {
                        ...state.categories[action.categoryID],
                        ...action.data,

                    },


                },
            };
        case 'SET_TRANSACTION_TIME_GROUP':
            return {
                ...state,
                categories: {
                    ...state.categories,
                    [action.categoryID]: {
                        ...state.groups[action.categoryID],
                        lastTransaction: action.time,
                    },
                },


            };
        default:
            return state;

    }
}
