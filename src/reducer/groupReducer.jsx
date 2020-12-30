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
    currentID: 2,
    groups: {
        1: {
            name: 'test',
            currentCategoryID: 3,
            categories: {
                1: {
                    name: 'test1'
                },
                2: {
                    name: 'test2'
                },
                3: {
                    name: 'test3'
                },
                4: {
                    name: 'test3'
                },
                5: {
                    name: 'test3'
                },
         

            }
        },
        2: {
            name: 'test',
            currentCategoryID: 3,
            categories: {
                1: {
                    name: 'test1'
                },
                2: {
                    name: 'test2'
                },
                3: {
                    name: 'test3'
                },
         

            }
        },
        3: {
            name: 'test',
            currentCategoryID: 3,
            categories: {
                1: {
                    name: 'test1'
                },
                2: {
                    name: 'test2'
                },
                3: {
                    name: 'test3'
                },
         

            }
        }
    }
}
export function groupReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_GROUP':
            return {
                ...state,
                currentID: ++state.currentID,
                groups: {
                    ...state.groups,
                    [state.currentID]: {
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
                        currentCategoryID: ++currentCategoryID,
                        categories: {
                            ...state.groups[action.groupID].categories,
                            [state.currentCategoryID]: { ...action.data }
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
