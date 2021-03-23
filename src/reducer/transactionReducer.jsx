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
    currentID: 1,
    transactions: {
      
    }
}
export function transactionReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                currentID: ++state.currentID,
                transactions: {
                    ...state.transactions,
                    [state.currentID]: {...action.data}
                }
            }
        case 'REMOVE_TRANSACTION':
            return {
                ...state,
                transactions: Object.fromEntries(Object.entries(state.transactions).filter(([key,value]) => key !== action.id)) 
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
