import './Estilo.modules.css'
import { useState } from 'react';
import Campo from './Campo'
import Button from './Button';


const Tabuleiro = () => {
    const [campos, setCampos] = useState(Array(9).fill(null));
    const [jogadorAtual, setJogadorAtual] = useState(true);
    const [placar, setPlacar] = useState([0,0]);

    function handleClick(i) {
        const nextCampo = campos.slice();
        if(campos[i]!=null || calculaVencedor(campos)) {
            return;
        }

        if(jogadorAtual){
            nextCampo[i] = "X";
        } else {
            nextCampo[i] = "O";
        }
        setCampos(nextCampo);
        setJogadorAtual(!jogadorAtual);
    }

    

    function reiniciaJogo() {
        setCampos(Array(9).fill(null));
        setJogadorAtual(true);
    }

    function reiniciaPlacar() {
        setCampos(Array(9).fill(null));
        setJogadorAtual(true);
        setPlacar([0,0]);
    }

    const vencedor = calculaVencedor(campos)

    let resultado;
    if(vencedor) {
        if(vencedor === "X") {
            placar[0]++;
        } else if(vencedor === "O") {
            placar[1]++;
        }
        resultado = "Vencedor: " + vencedor + "!";
    } else if(!empate(campos)){
        resultado = "Jogador Atual: " + (jogadorAtual ? "X" : "O");
    } else {
        resultado = "Empate!";
    }

    return (
        <div className="tabuleiro" onLoad={reiniciaPlacar}>
            <div className="placar">
                <div className="placar_texto">
                    <h1>Placar</h1>
                    <h2>Pontuação X: {placar[0]}</h2>
                    <h2>Pontuação O: {placar[1]}</h2>
                </div>
                <div className="reinicia_placar" onClick={reiniciaPlacar}>
                    <Button texto="Reiniciar Placar"/>
                </div>    
            </div>

            <div className="linha">
                <Campo jogador={campos[0]} onCampoClick={() => handleClick(0)}/>
                <Campo jogador={campos[1]} onCampoClick={() => handleClick(1)}/>
                <Campo jogador={campos[2]} onCampoClick={() => handleClick(2)}/>
            </div>
            <div className="linha">
                <Campo jogador={campos[3]} onCampoClick={() => handleClick(3)}/>
                <Campo jogador={campos[4]} onCampoClick={() => handleClick(4)}/>
                <Campo jogador={campos[5]} onCampoClick={() => handleClick(5)}/>
            </div>
            <div className="linha">
                <Campo jogador={campos[6]} onCampoClick={() => handleClick(6)}/>
                <Campo jogador={campos[7]} onCampoClick={() => handleClick(7)}/>
                <Campo jogador={campos[8]} onCampoClick={() => handleClick(8)}/>
            </div>

            <div className="resultado">
                {resultado}
            </div>

            <div className="reinicia_jogo" onClick={reiniciaJogo}>
                <Button  texto="Reiniciar Jogo"/>
            </div>
        </div>
    )
}

function empate(campos){
    for(let i = 0; i < campos.length; i++){
        if(campos[i] == null){
            return false;
        }
    }
    return true;
}

function calculaVencedor(campos) {
    const linhas = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]
    
    for(let i = 0; i < linhas.length; i++) {
        const [a, b, c] = linhas[i];
        if(campos[a] && campos[a] === campos[b] && campos[a] === campos[c]) {
            return campos[a];
        }
    }

    return null;
}


export default Tabuleiro