import React from 'react'


function Example()  {
    const[numbers, setNumbers] = React.useState([1, 555, 3]);
    const[count, setCount] = React.useState(0);


    const addNumber = () => {
        const nextNumber = numbers[numbers.length - 1];
        const newArr = [...numbers, nextNumber + 1];
        let i = 0;
        while (i < 1000000000) i++;
        setNumbers(newArr);
    }

    React.useEffect (() => {
        console.log('Компонент добавлен');
        return () => {
            console.log('Компонент удалён');
        }
    }, []);
    React.useEffect (() => {
        console.log('Компонент обновлён');
    }, [numbers, count])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick ={() => setCount(count + 1)}>+</button>
            <ul>
                {numbers.map((num, index) => (
                    <li key ={index}>{num}</li>
                ))}
            </ul>
            <button onClick ={addNumber}>Новое число</button>
        </div>
    )
}

// class Example extends React.Component {
//     state = {
//         numbers: [1, 2, 3]
//     }

//     addRandomNumber = () => {
//         const randNumber = Math.round(Math.random() * 10);
//         this.setState({
//             numbers: [...this.state.numbers, randNumber]
//         })
//     }

//     componentDidMount() {
    // console.log('Компонент добавлен');
    //     }
//     componentDidUpdate(prevProps, prevState) {
//         // console.log({prevProps, prevState, nextProps: this.props, nextState: this.state});
//         if(this.state.numbers.length !== prevState.numbers.length) {
    // console.log('Компонент обновлён');
    //         }
//     }
//     componentWillUnmount() {
    // console.log('Компонент удалён');
    //     }

//     render () {
//         return (
//             <div>
//              <ul>
//                 {this.state.numbers.map((num, index) => (
//                     <li key ={index}>{num}</li>
//                 ))}
//              </ul>
//             <button onClick ={this.addRandomNumber}>Новое число</button>
//          </div>
//         )
//     }
// }

export default Example













