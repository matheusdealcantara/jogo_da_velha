import Tabuleiro from "../../components/Tabuleiro";
import Button from "../../components/Button";
import "../../components/Estilo.modules.css";
import { useState } from "react";

import './single.css'

export const Multiplayer = () => {

    return (
        <>
            <div style={{fontFamily:'pixel'}}  className="Objetos">
                <h1 className="P1">Pato  </h1>
                <h1 className="P2">Pato  </h1>
            </div>
            <Tabuleiro />
        </>
    )
}