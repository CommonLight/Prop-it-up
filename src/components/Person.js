import React from 'react'

const PersonCard = (props) => {
    return (
        <div>
            <h2> { props.lastName }, { props.firstName }</h2>
            <p> AKA: { props.aka } </p>
            <p> Age: { props.age } </p>
            <p> Hair: { props.hairColor } </p>
            <p> Eyes: { props.eyeColor } </p>
            <p> Super Power: { props.superPower } </p>
        </div>
    )
}

export default PersonCard