import logo from './logo.svg';
import './App.css';
import React from 'react';
// import{Hello, Content, Chc, FirstName, Pay, Next, End, P} from './task1'
import Mycomp from './task2'
import {MyHook, MyState} from './task3'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Mycomp firstName = {'Vlad'} lastName = {'Kilchevskii'} age = {22} exp education = {'ReDev'}/> */}
        {/* <MyHook name = 'Vlad' /> */}
        <MyState name = 'Vlad' />
      </header>
    </div>
  );
}

export default App;

