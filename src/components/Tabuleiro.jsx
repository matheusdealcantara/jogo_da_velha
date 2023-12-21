import './Estilo.modules.css'
import { useState } from 'react';
import Campo from './Campo'


const Tabuleiro = () => {
    const [campos, setCampos] = useState(Array(9).fill(null));
    const [jogadorAtual, setJogadorAtual] = useState(true);

    function handleClick(i) {
        const nextCampo = campos.slice();
        if(campos[i]!=null) {
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

    return (
        <div className="tabuleiro">
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
    )
}

export default Tabuleiro