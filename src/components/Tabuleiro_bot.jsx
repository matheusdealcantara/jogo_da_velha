import './Estilo.modules.css'
import { useState } from 'react';
import Campo from './Campo'
import Button from './Button';
import { Link } from 'react-router-dom';

const Tabuleiro = () => {
    const [campos, setCampos] = useState(Array(9).fill(null));
    const [jogadorAtual, setJogadorAtual] = useState(true);
    const [placar, setPlacar] = useState([0,0]);

    // Função das Jogadas
    function handleClick(i) {
        const nextCampo = campos.slice();
        if(campos[i]!=null || calculaVencedor(campos)) {
            return;
        }
         
        nextCampo[i] = "X"; 
        setCampos(nextCampo);
        
        // Jogadas do bot
        setTimeout(function(){
            let rand = Math.floor(Math.random() * 9);
            let cont = 1;
            while(nextCampo[rand] != null && cont < 9){
                rand = Math.floor(Math.random() * 9);
                cont++;
            }
            if(nextCampo[rand] != null){
                return;
            }
            nextCampo[rand] = "O";
        
            setCampos(nextCampo);
            setJogadorAtual(!jogadorAtual);
        }, 1000);
    }

    
    // Funções de Reiniciar
    function reiniciaJogo() {
        setCampos(Array(9).fill(null));
        setJogadorAtual(true);
    }

    function reiniciaPlacar() {
        setCampos(Array(9).fill(null));
        setJogadorAtual(true);
        setPlacar([0,0]);
    }

    // Define o vencedor
    const vencedor = calculaVencedor(campos);

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

    // Visualização da Página
    return (
        <>
            <div className='TabuleiroObjetos'>

                <div style={{fontFamily:'pixel'}} className='TabuleiroPontos'>

                    <h1 className='X'>X <br /> {placar[0]/2}</h1>

                    {/* Tabuleiro Do Jogo  */}
                    <div  className="Tabuleiro" onLoad=
                    {reiniciaPlacar}>
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
                    </div>

                    <h1 className='O'>O<br /> {placar[1]/2}</h1>

                </div>

                <div className='OpcoesJogo'>
                    <div className="BoxOpcoes" onClick={reiniciaPlacar}>
                            <Button texto="-Reiniciar Placar-"/>
                    </div>
                    <div className="BoxOpcoes" onClick={reiniciaJogo}>
                            <Button  texto="-Resetar Tabuleiro-"/>
                    </div>
                    <div className="BoxOpcoes">
                        <Link to="/">
                                <Button texto="-Voltar-"/>
                        </Link>
                    </div>
                </div>

                <div style={{fontFamily:'pixel'}} className="resultado">
                {resultado}
                </div>
            </div>
        </>
    )
}

// Função para calcular o empate
function empate(campos){
    for(let i = 0; i < campos.length; i++){
        if(campos[i] == null){
            return false;
        }
    }
    return true;
}

// Função para calcular o vencedor
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