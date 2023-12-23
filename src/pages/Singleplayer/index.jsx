import Button from "../../components/Button";
import { useState } from "react";
import Tabuleiro from "../../components/Tabuleiro";

// Arquivo Css da Página
import './single.css'

export const Singleplayer = () => {

    return (
            <>
                <div style={{fontFamily:'pixel'}} className="Objetos">
                    <h1 className="P1">Pato Trainee</h1>
                    <h1 className="P2">Pato Efetivo</h1>
                </div>
                <Tabuleiro />
            </>
    )
}