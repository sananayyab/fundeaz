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
    groups: {

    }
}
export function groupReducer(state = initialState, action) {
    switch (action.type) {
        case 'RESET':
            return initialState
        case 'ADD_GROUP':
            return {
                ...state,
                currentID: state.currentID + 1,
                groups: {
                    ...state.groups,
                    [state.currentID + 1]: {
                        ...action.data,
                        currentCategoryID: 0,
                        categories: {}
                    }
                }
            }
        case 'REMOVE_GROUP':
            return {
                ...state,
                groups: state.groups.filter((item, index) => item !== action.groupID)
            }
        case 'UPDATE_GROUP':
            return {
                ...state,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        ...action.data

                    }
                }
            }
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
                            [state.groups[action.groupID].currentCategoryID + 1]: { ...action.data }
                        },


                    }
                }
            }
        case 'REMOVE_CATEGORY':
            return {
                ...state,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        categories: state.groups[groupID].categories.filter((item, index) => item !== action.categoryID)
                    }


                }
            }
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
                            }
                        },


                    }
                }
            }
        default:
            return state

    }
}
