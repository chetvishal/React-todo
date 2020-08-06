import React, { Component } from 'react';
import Todos from './Todos';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';

class TodoList extends Component {
    render() {
        // console.log(this.props.todos)
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

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        todos: state.firestore.ordered.todos
      }
}

 export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      {collection: 'todos',orderBy: ['createdAt','asc']}
    ])
    )(TodoList);