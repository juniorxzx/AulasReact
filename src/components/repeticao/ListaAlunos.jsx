import React from "react";
import aluno from "../../data/aluno";

export default props => {

    const lis = aluno.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} - {aluno.nota}
            </li>
        );
    });


    return (
        <div>
            <ul style={{ listStyle: "none" }}>

                {lis}
            </ul>
        </div>

    );
}