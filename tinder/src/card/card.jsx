import React from 'react'

const Card = (props) => {
    return (
        <div>
            <button onClick={() => props.history.goBack()} className='back'></button>
            card rep
        </div>
    )
}

export default Card