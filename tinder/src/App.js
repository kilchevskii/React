// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useMemo, memo} from 'react';
// import LifeCycle from './task4'
// import {MyHook, MyState}from './task3'
import Effect from './task5_useEffect_'
 


function App() {
  let [isVisible, setVisible] = useState(true)
  let Hide = () => {
    setVisible((isVisible) = !isVisible)
  }

    return <>
    {isVisible && <Effect/>}
    <div>
     <button className ='toggle' onClick = {() => Hide()}>Спрятать/показать</button>
    </div>
    </>
}

export default App;

