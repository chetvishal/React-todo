import React, { Component } from 'react';
import './App.css';
import MainPg from './Components/MainPg/MainPg'
import AddTodo from './Components/MainPg/AddTodo';
import {connect} from 'react-redux';
import TodoList from './Components/MainPg/TodoList';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

class App extends Component {

  render() {

    return (
      <div className="App">
        <MainPg />
        <TodoList todos={this.props.todos}/>
        <AddTodo />
      </div>
    );
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
  )(App);
