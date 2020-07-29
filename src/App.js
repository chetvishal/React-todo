import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPg from './Components/MainPg/MainPg'
import Todos from './Components/MainPg/Todos';
import AddTodo from './Components/MainPg/AddTodo';

function App() {
  return (
    <div className="App">
      <MainPg />
      <Todos name="Wash dishes"/>
      <Todos name="Drive car" />
      <Todos name="Give water to plants" />
      <AddTodo />
    </div>
  );
}

export default App;
