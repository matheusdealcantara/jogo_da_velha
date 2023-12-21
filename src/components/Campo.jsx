import './Estilo.modules.css'
import { useState } from 'react';

const Campo = ({jogador, onCampoClick}) => {

  return (
    <button className="campo" onClick={onCampoClick}>{jogador}</button>
  )
}

export default Campo