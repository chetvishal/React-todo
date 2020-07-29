import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPg from './Components/MainPg/MainPg'
import Todos from './Components/MainPg/Todos';
import AddTodo from './Components/MainPg/AddTodo';
import {connect} from 'react-redux';

class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <MainPg />
        <Todos name="Wash dishes" />
        <Todos name="Drive car" />
        <Todos name="Give water to plants" />
        <AddTodo />
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
