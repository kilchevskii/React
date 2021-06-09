import logo from './logo.svg';
import './App.css';
import React from 'react';

class Hello extends React.Component {
  render () {
    const sayHi = <p>Эти курсы посвящены реакту</p>
    return (
      <div>
        {this.props.isVisible && sayHi}
      </div>
    )
  }
}
class Content extends React.Component {
  render() {
    const paragraph = <p>Здесь вы узнаете о всех сильных сторонах React</p>
    return (
      <div>
      {this.props.isVisible && paragraph}
      </div>
    )
  }
}
function FirstName(props) {
  return <p>Привет {props.name}</p>
}
function Pay(props) {
  let price = true;
  if (price && props.cost) {
    return <p>Вы уже оплатили подписку, теперь вам предоставлен доступ ко всему курсу</p>
  } else {
    return <p>Вы еще не оплатили курс по React</p>
  }
}
function Next(props) {
  return (
    <p>До встречи на занятиях!</p>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FirstName name = 'Pasha'/>
        <Pay cost = {true} />
        <Hello isVisible/>
        <Content isVisible />
        <Next />
      </header>
    </div>
  );
}

export default App;

