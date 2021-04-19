const initialState = {
    monthStart: 14,
    lastDateChecked: 1,    
}
export function applicationDataReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_START_DATE':
            return{
                ...state,
                monthStart: action.date
            }
        case 'SET_LAST_CHECKED':
            return{
                ...state,
                lastDateChecked: action.date
            }
            default:
                return state
}

}