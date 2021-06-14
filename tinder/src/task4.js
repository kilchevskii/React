import React, {useState, useEffect } from 'react';
import axios from 'axios';
// class LifeCycle extends React.Component {
// constructor(props) {
//     super(props);
//     this.state = {
//         leeds: []
//     }
// }
// fetchData = async () => {
//     const leeds = await axios.get('https://redevcrm.herokuapp.com/leeds')
//     this.setState({leeds : leeds.data})
//     console.log(leeds)
// };

// componentDidMount = () => {
//     this.fetchData()
// }

// render() {
//     const {leeds} = this.state;
//         return (
//             <div> 
//                 {leeds.map(leed => (<h1 key = {leed.id}>{leed.target}</h1>))}
//                 <h2>Start coding!</h2>
//             </div>
//         )
//     }
// }

let LifeCycle = props => {
    let [leeds, setLeeds] = useState([])
    let fetchData = async () => {
        let leeds = await axios.get('https://redevcrm.herokuapp.com/leeds')
        setLeeds(leeds.data)
        console.log(leeds)
        };
    useEffect(() => {
        fetchData()
    }, []); 
        return ( 
       <div>
            {leeds.map(leed => (<h1 key = {leed.id}>{leed.target}</h1>))}
            <h2>Start coding!</h2>
       </div>
    )
} 
export default LifeCycle