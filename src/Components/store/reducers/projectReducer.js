
const initState = {
    //In arrays id is important, we have to use it as key's
    todos: [
        { id: 1, todo: 'eat food' },
        { id: 2, todo: 'get groceries' },
        { id: 3, todo: 'enjoy' },
        { id: 4, todo: 'cut nails' }
    ]
}
const projectReducer = (state = initState, action) => {
    switch(action.type){

        case 'ADD_TODO': 
            console.log('ADDED A TODO')
            console.log(action.todo)
            return state;

        case 'REMOVE_TODO': 
            return state;

        default: 
            return state;
    }
}
export default projectReducer;