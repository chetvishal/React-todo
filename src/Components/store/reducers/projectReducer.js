
const initState = {
    //In arrays id is important, we have to use it as key's
    todos: [
        { todo: 'eat food' },
        { todo: 'get groceries' },
        { todo: 'enjoy' }
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer;