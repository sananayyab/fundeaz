nextID = 3;

export function addGroup(name){
    return{
    type: 'ADD_GROUP',
    id: nextID++,
    name: 'AddingTest'
    }
}