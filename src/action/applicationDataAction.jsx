export function setStartDate(date)
{
    return {
        type: 'SET_START_DATE',
        date,
    };
}


export function setLastCheckedDate(date)
{
    return {
        type: 'SET_LAST_CHECKED',
        date,
    };
}
