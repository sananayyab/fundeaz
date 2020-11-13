//add initial state 
const initialState = {
    Groups: [
        {id: 0, name: 'testOne'},
        {id: 1, name: 'testTwo'},
        {id: 2, name: 'testThree'}
    ]
}

export default function homepageReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_GROUP':
            return {...state,
            Groups: [...state.Groups,
            {
                id: action.id,
                name: action.name
            }]};
        default: 
        return state
    }
}