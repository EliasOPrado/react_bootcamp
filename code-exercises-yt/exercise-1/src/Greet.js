import React from 'react'

function Greet(props) {
    // desctructuring props
    const {name, heroName} = props
    return (
        <div>
            <h1> Hello {props.name}</h1>
            <h2>I am {props.heroName}</h2>
        </div>
    )
}

export default Greet
