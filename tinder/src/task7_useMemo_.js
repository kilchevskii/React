import { log } from 'async';
import React,{ useEffect, useState, useRef, useMemo } from 'react'
// import Count from './Count'
// import IsFive from './isFive'

function MemoExample () {
    const [numbers, setNumbers] = useState([1, 2, 3, 4])

    let addNum = () => {
        if(numbers.length % 5 == 0) {
            let i = 0;
            while (i < 700000000) i++;
            console.log('число кратно 5!');
        }
        const nextNumber = numbers[numbers.length - 1] + 1;
        const newArr = [...numbers, nextNumber];
        setNumbers(newArr);
    };

    // let func = () => {

    // }

    return (
        <div>
            <ul>
                {numbers.map((num, index) => (<li key={index}>{num}</li>))}               
            </ul>
            <button onClick = {() => addNum()}>Прибавь</button>
            {/* {func()} */}
        </div>
    )
}

export default MemoExample