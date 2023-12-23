import './Estilo.modules.css'
import { useState } from 'react';

const Campo = ({jogador,onCampoClick}) => {

  return (
    <button style={{fontFamily:'pixel'}} className="campo" onClick={onCampoClick}>{jogador}</button>
  )
}

export default Campo