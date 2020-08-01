import React from 'react';
import Todos from './Todos';

const TodoList = ({ todos }) => {
    return (
        <div className='todolist'>

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