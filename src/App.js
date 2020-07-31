import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPg from './Components/MainPg/MainPg'
import Todos from './Components/MainPg/Todos';
import AddTodo from './Components/MainPg/AddTodo';
import {connect} from 'react-redux';
import TodoList from './Components/MainPg/TodoList';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

class App extends Component {
  state = {
    val: 0
  }


  render() {
    console.log('from app.js')
    // console.log(this.props.todos.length)

    let val = 0;
    console.log(val)
    if(this.props.todos){
      console.log(this.props.todos.length)
      val = this.props.todos.length
      // this.setState({
      //   val: val
      // })
    }
    console.log(val)

    // function findId() {
    //   {this.props.todos && this.props.todos.map(todo => {
    //     console.log('one' )
    // })}
    // }
    // findId()
    
    return (
      <div className="App">
        <MainPg />
        <TodoList todos={this.props.todos}/>
        {/* <AddTodo /> */}
        {/* <AddTodo length={this.props.todos.todos.length}/> */}
        <AddTodo length={val}/>
        {val}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('from appjs')
  console.log(state)
  return{
    // todos: state.project
    todos: state.firestore.ordered.todos,
    // length: state.firestore.ordered.todos.length
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'todos'}
  ])
  )(App);
