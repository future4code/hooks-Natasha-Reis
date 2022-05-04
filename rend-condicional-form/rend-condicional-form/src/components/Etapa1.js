import PerguntaAberta from './PerguntaAberta'
import PerguntaOpcoes from './PerguntaOpcoes'

const Etapa1 = () => {
    return (
        <div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <PerguntaAberta pergunta={'1. Qual o seu nome?'} />
            <PerguntaAberta pergunta={'2. Qual sua idade?'} />
            <PerguntaAberta pergunta={'3. Qual seu email?'} />
            <PerguntaOpcoes
                pergunta={'4. Qual a sua escolaridade?'}
                opcoes={['Ensino médio incompleto', 'Ensino médio completo', 'Ensino superior incompleto', 'Ensino superior completo']}
            />
        </div>
    )
}

export default Etapa1
