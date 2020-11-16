//add initial state 
const initialState = {


    //change name to groupname 
    id: 3,
    Groups: [
        {id: 0, name: 'testOne'},
        {id: 1, name: 'testTwo'},
        {id: 2, name: 'testThree'}
    ]
}

export function homepageReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_GROUP':
            return {...state,
                id: ++state.id,
            Groups: [...state.Groups,
            {
                id: state.id,
                name: action.name
            }]};
        default: 
        return state
    }
}