import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const InputUsuario = styled.input``
const InputEmail = styled.input``
const ButtonEnviar = styled.button``

class CadastroUsuario extends React.Component {
    state = {
        valueInputUsuario: '',
        valueInputEmail: '',
    }

    handleInputChange = (event, selectedInput) => {
        this.setState({
            [selectedInput]: event.currentTarget.value,
        })
    }

    handleButtonClick = () => {
        const body = {
            name: this.state.valueInputUsuario,
            email: this.state.valueInputEmail,
        }

        const config = {
            headers: { Authorization: 'natasha-reis-hooks' },
        }
        axios
            .post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, config)
            .then((response) => {
                alert('Sucesso!!!')
            })
            .catch((error) => {
                alert('Algo deu errado :(')
            })
    }

    render() {
        return (
            <div>
                <InputUsuario
                    value={this.state.valueInputUsuario}
                    onChange={(event) => this.handleInputChange(event, 'valueInputUsuario')}
                    placeholder="Nome"
                />
                <InputEmail
                    value={this.state.valueInputEmail}
                    onChange={(event) => this.handleInputChange(event, 'valueInputEmail')}
                    placeholder="E-mail"
                />
                <ButtonEnviar onClick={this.handleButtonClick}>Criar usuário</ButtonEnviar>
            </div>
        )
    }
}

export default CadastroUsuario
