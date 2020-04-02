//reponsável pela comunicação com o DOM
import ReactDOM from 'react-dom'
//necessário para usar o jsx (utilizar "html" dentro do javascript)
import React from 'react'
import PrimeiroComponente from './components/PrimeiroComponente'
import CompAComOutroNome, {CompB as B} from './components/DoisComponentes'
import MultiElementos from './components/MultiElementos'
import FamiliaSilva from './components/FamilliaSilva'
import Familia from './components/Familia'
import Membro from './components/Membro'
import ComponenteComFuncao from './components/ComponenteComFuncao'
import Pai from './components/Pai'
import ComponenteClasse from './components/ComponenteClasse'
import Contador from './components/Contador'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        ------------------------ Atual ------------------------
        <Contador numero={0}></Contador>


        ------------------------ Antigos ------------------------
        <br/>
        <br/>
        <br/>
        ------------------------ Componente Classe ------------------------
        <ComponenteClasse valor="Teste"/>
        ------------------------ Pai ------------------------

        <Pai/>
        ------------------------ Componente com função ------------------------
        <ComponenteComFuncao/>
        ------------------------ Familia 2 ------------------------
        <Familia sobrenome="Pereira">
            <Membro nome="Andre"/>
            <Membro nome="Mariana"/>
        </Familia>
        <Familia sobrenome="Pascoal">
            <Membro nome="Victor"/>
            <Membro nome="Marilia"/>
        </Familia>
        ------------------------ Familia 1------------------------
        <FamiliaSilva sobrenome="Silva Pereira"/>
        ------------------------ MultiElementos ------------------------
        <MultiElementos />
        ------------------------ PrimeiroComponente ------------------------
        <PrimeiroComponente valor="Primeiro Componente!" abc={Math.pow(2,8)}></PrimeiroComponente>
        ------------------------ Componentes ------------------------
        <CompAComOutroNome valor="comp aaa"></CompAComOutroNome>
        <B valor="comp bbbccc"></B>
        
    </div>
    , elemento)

// const jsx = <h1>Olá React</h1>
// ReactDOM.render(jsx, elemento)