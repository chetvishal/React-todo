import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPg from './Components/MainPg/MainPg'
import Todos from './Components/MainPg/Todos';
import AddTodo from './Components/MainPg/AddTodo';
import {connect} from 'react-redux';
import TodoList from './Components/MainPg/TodoList';

class App extends Component {

  render() {
    console.log('from app.js')
    console.log(this.props.todos.todos.length)

    return (
      <div className="App">
        <MainPg />
        {/* <Todos name="Wash dishes" />
        <Todos name="Drive car" />
        <Todos name="Give water to plants" /> */}
        <TodoList props={this.props}/>
        <AddTodo length={this.props.todos.todos.length}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    todos: state.project
  }
}

export default connect(mapStateToProps)(App);
