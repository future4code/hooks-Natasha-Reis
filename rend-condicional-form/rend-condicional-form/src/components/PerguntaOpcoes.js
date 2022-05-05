const PerguntaOpcoes = (props) => {
    return (
        <div>
            {props.pergunta}
            <select>
                {props.opcoes.map((opcao) => {
                    return <option value={opcao}> {opcao} </option>
                })}
            </select>
        </div>
    )
}

export default PerguntaOpcoes
