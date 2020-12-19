 export function addTransaction(data){
    return{
    type: 'ADD_TRANSACTION',
    data,
    }
}

export function removeTransaction(id){
    return{
    type: 'REMOVE_TRANSACTION',
    id,
    }
}

export function updateTransaction(data, id){
    return{
    type: 'UPDATE_TRANSACTION',
    id,
    data,
    }
}