import React from 'react'
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={props.icone} />
            <div className= "nome-descricao-container">
                <b>{props.nome}</b>
                <p>{props.descricao}</p>
            </div>
        </div>
    )
}

export default CardPequeno
