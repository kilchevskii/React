import logo from './logo.svg';
import './App.css';
import React from 'react';
import{Hello, Content, Chc, FirstName, Pay, Next, End, P} from './task1'
import Mycomp from './task2'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Mycomp firstName = 'Vlad' lastName = 'Kilchevskii' age = {22} exp/>


      </header>
    </div>
  );
}

export default App;

