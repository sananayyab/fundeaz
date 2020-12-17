//add initial state 
/*Transaction data model
{
    id,
    GroupID,
    CategoryID,
    CategoryName,
    Amount,
    Date,
    Payee
}
*/
const initialState = {
    currentID: 2,
    transactions: {
        1: {
            groupID: 1,
            categoryID: 1,
            categoryName: 'test1',
            amount: 200,
            payee: 'Nike'
        },
        2: {
            groupID: 1,
            categoryID: 1,
            categoryName: 'test1',
            amount: 200,
            payee: 'Nike'
        },
        3: {
            groupID: 1,
            categoryID: 1,
            categoryName: 'test1',
            amount: 200,
            payee: 'Nike'
        },
        4: {
            groupID: 2,
            categoryID: 1,
            categoryName: 'test2',
            amount: 200,
            payee: 'Nike'
        }
    }
}
export function transactionReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                currentID: ++currentID,
                transactions: {
                    ...state.transactions,
                    [state.currentID]: {...action.data}
                }
            }
        case 'REMOVE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter((item, index) => item !== action.id)
            }
        case 'UPDATE_TRANSACTION':
            return {
                ...state,
                transactions: {
                    ...state.transactions,
                    [action.id]: {
                        ...state.transactions[action.id],
                        ...action.data

                    }
                }
            }
        default:
            return state

    }
}
