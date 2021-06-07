
import react, { useState } from 'react';
import './UseState.css';

const UseState = props => {

    const [ nome, setNome ] = useState("")
    const [ sobrenome, setSobrenome ] = useState("")
    const [ mensagem, setMensagem ] = useState("")

    return (
        <div>
            <div className = "titulo">
                <h1>UseState</h1>
                <h2>Manipula Estados em componentes funcionais</h2>
            </div>

            <div className = "conteudo">

                <input 
                    className = "campo"
                    type = "text" 
                    value = {nome}
                    placeholder = "Digite Seu Nome"
                    onChange = { e => setNome(e.target.value)}
                />

                <input 
                    className = "campo"
                    type = "text" 
                    value = {sobrenome}
                    placeholder = "Digite Seu Sobrenome"
                    onChange = { e => setSobrenome(e.target.value)}
                />

                <button
                    className = "botao"
                    onClick = { () => setMensagem('Olá ' + nome + ' ' + sobrenome + ', Seja Bem Vindo(a)!') }
                > OK </button>

                <p className = "campo"> {mensagem} </p> 
                
            </div>

        </div>
    )
}

export default UseState;