import { useEffect, useState, useRef } from "react"
import './index.css';

function Ref() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
    const timerRef = useRef();
    // console.log(ulRef);
    const addNumber = () => {
        // const next = numbers[numbers.length - 1];
        // const newArr = [...numbers, next + 1]
        setNumbers((prev) => [...prev, prev[prev.length - 1] + 1])
    };
    const start = () => {
        timerRef.current = setInterval(addNumber, 1000);
    }
    const stop = () => {
        console.log(timerRef.current);
        clearInterval(timerRef.current)
    }
    // const handleScroll = () => {
        // console.log('Scroll!');
    // };

    // useEffect (() => {
    //     ulRef.current.addEventListener('scroll', handleScroll);
    // }, []);

    // const removeScroll = () => {
        // ulRef.current.removeEventListener('scroll', handleScroll)
    // };

    return (
        <div>
            <ul>
                {numbers.map((num, index) => (
                    <li key ={index}>{num}</li>
                 ))}
            </ul>
            <button onClick = {addNumber}>Нажмите</button>
            <button onClick = {start}>Старт</button>
            <button onClick = {stop}>Стоп</button>
            {/* <button onClick = {removeScroll}>Не следить</button> */}
        </div>
    )
}



export default Ref