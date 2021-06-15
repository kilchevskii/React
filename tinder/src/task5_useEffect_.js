import React, { useEffect, useState, memo, useMemo } from 'react'


function Effect () {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('Компонент был добавлен на страницу')
        return () => {
            console.log('Компонент был удален со страницы')
        }
    }, [])
    useEffect(() => {
        console.log(`Компонент был обновлён ${count} раз!`)
    }, [count])

    return (
        <div>
            <p>Привет, у нас тут кнопка, нажимай на неё</p>
            <h3>{count}</h3>
            <button onClick = {() => setCount(count+1)}>Кликай</button>
        </div>
    )
}

// class Effect extends React.Component {
//     constructor(props) {
//     super(props)
//     this.state = {
//         count : 0
//         }
//     }
//     componentDidMount() {
//         console.log('Компонент был добавлен на страницу')
//     }
//     componentDidUpdate() {
//         console.log(`Компонент был обновлён ${this.state.count} раз!`)
//     }
//     componentWillUnmount() {
//         console.log('Компонент был удален со страницы')
//     }
//     render() {
//         return (
//         <div>
//             <p>Привет, у нас тут кнопка, нажимай на неё</p>
//             <h3>{this.state.count}</h3>
//             <button onClick = {() => this.setState({count: this.state.count+1})}>Кликай</button>
//         </div>   
//         )
//     }
// }

export default Effect











