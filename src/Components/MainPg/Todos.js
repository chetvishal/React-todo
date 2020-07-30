import React from 'react'
import {connect} from 'react-redux';




const Todos = (props) => {
    const {name} = props;
    // state = {
    //     todos: []
    // }
    function handleClick(){
        console.log('clicked on remove')
        console.log(props.todos)
        console.log(props.id)

        let todos = props.todos.todos.filter(todo=>{
            return todo.id !==props.id
        })
        props.removeTodo(todos)
    }
    return (
        <div>
            <div className="alert alert-primary" role="alert" >
                {name}
                <span className="text-right"><a href="#" className="alert-link" onClick={handleClick}>Remove</a> </span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        todos: state.project
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
         removeTodo: (todos) => {dispatch({type: 'REMOVE_TODO', todos: todos})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);