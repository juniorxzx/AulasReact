import React from "react";


export default props => {
    const cb = props.qndClicar
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50 //intervalo de 50 a 70

    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => cb('João', gerarIdade(), true)} className="btn-grad">
                Fornecer informações</button>
        </div>
    )
}