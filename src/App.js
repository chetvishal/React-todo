import React, { Component } from 'react';
import './App.css';
import MainPg from './Components/MainPg/MainPg';
import AddTodo from './Components/MainPg/AddTodo';
import TodoList from './Components/MainPg/TodoList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MainPg />
        <TodoList />
        <AddTodo />
      </div>
    );
  }
}

export default App;
