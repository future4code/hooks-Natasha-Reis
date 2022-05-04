import React from 'react'
import styled from 'styled-components'

import './App.css'

import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'

const NextButton = styled.button``

class App extends React.Component {
    state = { etapaAtual: 1 }

    mudarEtapa = () => {
        this.setState({ etapaAtual: this.state.etapaAtual + 1 })
    }

    renderStep = () => {
        switch (this.state.etapaAtual) {
            case 1:
                return <Etapa1 />

            case 2:
                return <Etapa2 />

            case 3:
                return <Etapa3 />

            case 4:
                return <Final />
            default:
        }
    }

    render = () => (
        <div>
            {this.renderStep()}
            {this.state.etapaAtual !== 4 ? <NextButton onClick={this.mudarEtapa}>Próximo </NextButton> : null}
        </div>
    )
}

export default App
