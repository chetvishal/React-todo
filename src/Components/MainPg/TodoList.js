import React, { Component } from 'react';
import Todos from './Todos';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';
import AddTodo from './AddTodo';
import {Redirect} from 'react-router-dom';

class TodoList extends Component {
    render() {
        // console.log(this.props.todos)
        // console.log(this.props)
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        return (
            <div className='todolist'>
                {
                    this.props.todos && this.props.todos.map(todo => {
                        return (
                            <div key={todo.id}>
                                <Todos name={todo.todo} id={todo.id} />
                            </div>
                        )
                    })
                }
                <AddTodo />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        todos: state.firestore.ordered.todos,
        auth: state.firebase.auth
      }
}

 export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      {collection: 'todos',orderBy: ['createdAt','asc']}
    ])
    )(TodoList);