import React from 'react';
import {useState} from 'react';
let MyHook = props => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>Привет {props.name}, а вот и хук!</p>
            <p>Тут у нас есть кнопка, и по ней надо кликать!</p>
            <p>Наш счетчик {count}</p>
            <button onClick={() => setCount(count + 1)}>Нажимай на меня</button>
        </div>
    )
}

class MyState extends React.Component {
constructor(props) {
    super(props) 
    this.state = {
    count: 0
        }
    }
    render () {
        return (
            <div>
            <p>Привет {this.props.name}, а вот и хук!</p>
            <p>Тут у нас есть кнопка, и по ней надо кликать!</p>
            <p>Наш счетчик {this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Нажимай на меня</button>
        </div>  
        )
    }
}
export {MyHook, MyState}

