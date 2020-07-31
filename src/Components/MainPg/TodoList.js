import React from 'react';
import Todos from './Todos';


const TodoList = ({todos}) => {
    console.log('log from Todolist')
    // const {todos} = props;
    console.log(todos)
    // console.log(todos.length)
    // console.log(todos.todos.length)

    // let todoList = todos.todos.length ? (
    //     todos.todos.map(todo=>{
    //         return(
    //             <div key={todo.id}>
    //                 <Todos name={todo.todo} id={todo.id} />
    //             </div>
    //             )
    //     })
    //     ) : (
    //     <div className="alert alert-primary" role="alert" >
    //     No Task's
    //     </div>
    // )
    return(
        <div>
            {/* {todoList} */}

             {
                todos && todos.map(todo => {
                    return (
                        <div key={todo.id}>
                            <Todos name={todo.todo} id={todo.id} />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default TodoList;