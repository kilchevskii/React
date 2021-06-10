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
  class Chc extends React.Component {
    render () {
      const sp = <span>Ошибочка</span>
      return (
        <div>
          {this.props.isVisible && sp}
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
  let End = props => {
    if (props.chetko === true) {
      return <p>Красавчик</p>
    } else {
      return <p>Не Красавчик</p>
    }
  }
  
  let P = props => {
    const pa = <p>Гайз</p>
    return (
      <div>
      {props.isVisible && pa}
      </div>
    )
  }

export{Hello, Content, Chc, FirstName, Pay, Next, End, P}



