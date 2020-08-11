import React, { Component } from 'react';
import './App.css';
import MainPg from './Components/MainPg/MainPg';
import AddTodo from './Components/MainPg/AddTodo';
import TodoList from './Components/MainPg/TodoList';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './Components/MainPg/SignIn';
import SignUp from './Components/MainPg/SignUp';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MainPg />

        <BrowserRouter>
        <div>
          <Switch>
          
            <Route exact path='/' component={TodoList}/>
            {/* <Route path='/' component={AddTodo}/> */}
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>

          </Switch>
        </div>
      </BrowserRouter>



        {/* <TodoList />
        <AddTodo /> */}
      </div>
    );
  }
}

export default App;
