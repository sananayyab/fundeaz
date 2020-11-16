//add initial state 
const initialState = {


    currentIndex: 0,
    GroupInformation: {
        'testOne': {
            'Available': 100,
            'unallocated': 100,
            Categories: [
                { id: 0, name: 'testOneCategoryOne', Amount: 100 },
                { id: 1, name: 'testOneCategoryTwo', Amount: 200 }
            ],
            Transactions: {
                lastId: 1,
                instances: [
                    { id: 0, category: 'testOneCategoryOne', Amount: 100 },
                    { id: 1, category: 'testOneCategoryOne', Amount: 300 }
                ]
            }

        },
        'testTwo': {

        },
        'testThree': {

        }
    }
}

export function groupPageReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                GroupInformation: {
                    ...state.GroupInformation,
                    [action.group]: {
                        ...state.GroupInformation[action.group],
                        Transactions: {...state.GroupInformation[action.group].Transactions,
                        lastId: ++state.GroupInformation[action.group].Transactions.lastId,
                        instances: [
                            ...state.GroupInformation[action.group].Transactions.instances,
                            {id: state.GroupInformation[action.group].Transactions.lastId, category: action.category, amount:action.amount}
                        ]
                        }

                    }
                }
            };
            break;
        case 'ADD_CATEGORY':
            return {
                ...state,
                id: ++state.id,
                GroupInformation: [...state.GroupInformation,
                {
                    id: state.id,
                    name: action.name
                }]
            };
            break;
            case 'UPDATE_INDEX':
                return {
                    ...state,
                    currentIndex: action.newIndex
                };
                break;
        default:
            return state
    }
}