import React from 'react'
import CadastroUsuario from './components/cadastro-usuario'
import ListarUsuarios from './components/listar-usuarios'

class App extends React.Component {
    state = {
        currentView: 'cadastrarUsuario',
    }

    trocarTela = () => {
        let novaView
        if (this.state.currentView === 'cadastrarUsuario') {
            novaView = 'listarUsuarios'
        } else {
            novaView = 'cadastrarUsuario'
        }
        this.setState({ currentView: novaView })
    }

    render = () => (
        <div>
            <button onClick={this.trocarTela}>Trocar de tela</button>

            {this.state.currentView === 'listarUsuarios' ? <ListarUsuarios /> : null}

            {this.state.currentView === 'cadastrarUsuario' ? <CadastroUsuario /> : null}
        </div>
    )
}

export default App
