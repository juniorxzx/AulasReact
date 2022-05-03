import React from "react";

export default props => {
    const{min, max} = props; 

    const aleatorio = parseInt(Math.random() * (max - min)) + min

    return (
        <div>
            <h2>Valor aleatório</h2>

            <p><strong>Mínimo = {min}</strong></p>
            <p><strong>Máximo = {max}</strong></p>
            <p><strong>Aleatório = {aleatorio}</strong></p>
        </div>
    )
}
