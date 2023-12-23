import Tabuleiro from "../../components/Tabuleiro";
import Button from "../../components/Button";
import "../../components/Estilo.modules.css";
import "./style.css"
import { useState } from "react";

export const Multiplayer = () => {

    return (
            <div className="Multiplayer">
                <Tabuleiro />
            </div>
    )
}