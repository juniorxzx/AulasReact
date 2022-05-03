import React from "react";
import "./App.css"
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/Layout/Card";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";


export default _ => //forma reduzida usando Arrow

    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards" >

            <Card titulo="Mega-Sena" color="#510a18">
               <Mega></Mega>
            </Card>

            <Card titulo="Contador" color="#DF1C44">
               <Contador valorInicial= {10}></Contador>
            </Card>

            <Card titulo="Componente com Filhos" color="#2F2629">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Natalia" />
                    <FamiliaMembro nome="Walter" />
                </Familia>
            </Card>

            <Card titulo='Repetição' color="#10E7D9">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo='Comunicação direta' color="#21E00F">
               <DiretaPai></DiretaPai>
            </Card>

            <Card titulo='Componente controlado' color="#DFFF00">
               <Input></Input>
            </Card>

            <Card titulo='Comunicação indireta' color="#25E00F">
               <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo='Renderização condicional' color="#9E4301">
                <ParOuImpar numero= {17}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando'}}/>
            </Card>

            <Card titulo='Desafio Repetição' color="#11E890" >
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo='Desafio Aleatório' color="#90C7D9">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo='Fragmento' color="#DF8684">
                <Fragmento />
            </Card>

            <Card titulo='Com parâmetro' color="#87E0FF">
                <ComParametro titulo='Situação do Aluno:'
                    aluno='Pedro Silva' nota={9.0} />
            </Card>

            <Card titulo='Primeiro' color="#DFC790">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>


