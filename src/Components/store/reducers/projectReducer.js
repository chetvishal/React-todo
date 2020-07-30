
const initState = {
    //In arrays id is important, we have to use it as key's
    todos: [
        { id: 1, todo: 'eat food' },
        { id: 2, todo: 'get groceries' },
        { id: 3, todo: 'enjoy' },
        { id: 4, todo: 'cut nails' }
    ]
}

const idCreator = () => {
    let n=initState.todos.length
    return n+1;
}

console.log(idCreator())

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer;