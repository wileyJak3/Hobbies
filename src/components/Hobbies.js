import React from 'react'

function Card(props) {
    return (
        <div>
            <h2>My favorite hobby is...</h2>
            <h3>{props.hobby}</h3>
            <img src = {props.img}/>
            <p>{props.details}</p>            
        </div>
    )
}

export default Card
