/*
possible fields: 

total: 
group: 
category:
*/

const initialState = {
    available: 0,
    unallocated: 0,
    groups: {
       

    }
}
export function fundReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TOTAL_AVAILABLE':
            return {
                ...state,
                available: state.available + action.amount,
                unallocated: state.unallocated + action.amount,
            }
        case 'REMOVE_TOTAL_AVAILABLE':
            return {
                ...state,
                available: state.available - action.amount,
                unallocated: state.unallocated - action.amount,
            }
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

                        }
                    }
                    }

                }
            }
        case 'INITIALIZE_GROUP':
            return {
                ...state,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        available: 0,
                        allocated: 0,
                    }

                }
            }
        case 'ALLOCATE_TO_CATEGORY':
            return {
                ...state,
                unallocated: state.unallocated - parseInt(  action.amount),
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        available: parseInt( state.groups[action.groupID].available) +parseInt(  action.amount),
                        allocated: parseInt( state.groups[action.groupID].allocated )+ parseInt( action.amount),
                        categories: {
                            ...state.groups[action.groupID].categories,
                        [action.categoryID]: {
                            ...state.groups[action.groupID].categories[action.categoryID],
                            available: parseInt( state.groups[action.groupID].categories[action.categoryID].available) + parseInt( action.amount),
                            allocated: parseInt( state.groups[action.groupID].categories[action.categoryID].allocated )+ parseInt( action.amount),

                        }
                        }
                    }

                }
            }
        case 'DEALLOCATE_CATEGORY':
            allocatedToGroup = state.groups[action.groupID].allocated - action.amount
            allocatedToCategory = state.groups[action.groupID].categories[action.categoryID].allocated - action.amount
            if (allocatedToGroup < 0) {
                allocatedToGroup = 0
            }
            if (allocatedToCategory < 0) {
                allocatedToCategory = 0
            }
            return {
                ...state,
                unallocated: state.unallocated + action.amount,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        available: state.groups[action.groupID].available - action.amount,
                        allocated: allocatedToGroup,
                        categories: {
                            ...state.groups[action.groupID].categories,
                        [action.categoryID]: {
                            ...state.groups[action.groupID].categories[action.categoryID],
                            available: state.groups[action.groupID].categories[action.categoryID].available - action.amount,
                            allocated: allocatedToCategory,

                        }
                    }
                    }

                }
            }
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

                            }
                        }
                    }

                }
            }
        case 'REMOVE_SPEND_CATEGORY':
            return {
                ...state,
                available: state.available + action.amount,
                groups: {
                    ...state.groups,
                    [action.groupID]: {
                        ...state.groups[action.groupID],
                        available: state.groups[action.groupID].available + amount,
                        categories: {
                            ...state.groups[action.groupID].categories,
                            [action.categoryID]: {
                                ...state.groups[action.groupID].categories[action.categoryID],
                                available: state.groups[action.groupID].categories[action.categoryID].available + amount,

                            }
                        }
                    }

                }
            }
        default:
            return state

    }
}
