import React from 'react';
import Todos from './Todos';


const TodoList = ({props}) => {
    console.log('log from Todolist')
    const {todos} = props;
    console.log(props)
    console.log(todos)

    let todoList = todos.todos.length ? (
        todos.todos.map(todo=>{
            return(
                <div key={todo.id}>
                    <Todos name={todo.todo}/>
                </div>
                )
        })
        ) : (
        <div className="alert alert-primary" role="alert" >
        No Task's
        
    </div>
    )
    return(
        <div>
            {todoList}
        </div>
    )
}

export default TodoList;