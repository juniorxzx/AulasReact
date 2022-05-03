import React from "react";
export default function ComParametro(props) {

  const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
  return (
    <div>
      <h2>{props.titulo} </h2>
      <p>{props.aluno} - {props.nota} = {status}</p>
    </div>
  )

}
