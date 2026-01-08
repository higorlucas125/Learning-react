import React from 'react'

const Aleatorio = (props) => {
    const min = props.min;
    const max = props.max;
    const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>Valor mínimo: {min}</p>
            <p>Valor máximo: {max}</p>
            <p>Valor sorteado: {aleatorio}</p>
        </div>
    )
} 

export default Aleatorio;
