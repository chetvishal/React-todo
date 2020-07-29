import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPg from './Components/MainPg/MainPg'
import Todos from './Components/MainPg/Todos';

function App() {
  return (
    <div className="App">
      <MainPg />
      <Todos />
      <Todos />
      <Todos />
    </div>
  );
}

export default App;
