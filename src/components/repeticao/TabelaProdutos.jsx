import React from "react";
import  "./TabelaProdutos.css"
import produtos from "../../data/produtos";

export default props => {


    const prod = produtos.map((produtos, i) => {
        return (
            <tr key= {produtos.id} className={i % 2 === 0 ? 'Par' : 'Impar' }>
                <td>
                    {produtos.id}
                </td>
                <td>
                    {produtos.nome}
                </td>
                <td>
                    {produtos.preco.toFixed(2).replace('.', ',')}
                </td>
            </tr>
        )


    });
    return (
        <div className="desafiotabela">
            <table>
                <thead>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                </thead>
                <tr key={produtos.id}>
                    {produtos.id}
                </tr>
                {prod}

            </table>


        </div >
    );
}