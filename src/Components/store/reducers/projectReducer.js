
const initState = {
    //In arrays id is important, we have to use it as key's
    todos: [
        { id: 1, todo: 'eat food' },
        { id: 2, todo: 'get groceries' },
        { id: 3, todo: 'enjoy' },
        { id: 4, todo: 'cut nails' }
    ]
}

// const idCreator = () => {
//     let n=initState.todos.length
//     return n+1;
// }

// console.log(idCreator())

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_TODO': 
            console.log('ADDED A TODO')
            // action.todo.id = idCreator();
            console.log(action.todo)
            // state = [...state.todos, action.todo]
            // this.setState({
            //     todos: todos
            // })
            console.log(state)
            
            return {
                todos: [...state.todos, action.todo]
            }
            case 'REMOVE_TODO': 
                return{
                    todos: action.todos
                }
        default: 
            return state;
    }
    
}

export default projectReducer;