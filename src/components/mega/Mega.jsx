import React, { useState } from "react";
import "./Mega.css"

export default props => {

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ?
            gerarNumeroNaoContido(min, max, array) :
            aleatorio
    } //verificar e gerar se no array não tem numero repetido

    function gerarNumeros(qtd) {

        const numeros = Array(qtd)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [...nums, novoNumero]

            }, [])
            .sort((n1, n2) => n1 - n2)

        return numeros
    }
    const [qtd, setQtd] = useState(props.qtd || 6)
    const numerosIniciais = Array(qtd).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)
    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>

            <div>
                <label>Quantidade de números: </label>
                <input type="number" value={qtd} onChange={
                    (e) => {
                        setQtd(+e.target.value) 
                        setNumeros(gerarNumeros(+e.target.value))}} 
                        min={1} max={60} />

            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtd))}>Gerar números</button>
        </div>
    )
}