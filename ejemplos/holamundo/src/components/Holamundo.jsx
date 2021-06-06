import React from 'react'

const HolaMundo = () => {
    const Hello = "¡Hola mundo";
    const isTrue = false;
    return (
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso Esencial de Reac</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React"/>
            { isTrue ? <h1>Es verdadero </h1>:<h3>Es Falso</h3> }
            { isTrue && <h4>Soy verdadero</h4>}
        </div>
    )
}

export default HolaMundo;