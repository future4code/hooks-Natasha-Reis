import './App.css'
import styled from 'styled-components'
import Message from './components/message'
import React from 'react'

const Container = styled.div`
    border: 1px solid black;
    max-width: 600px;
    height: 100vh;
    display: flex;
    margin: auto;
    flex-direction: column;
`

const InputUsuario = styled.input`
    width: 100px;
`

const InputMensagem = styled.input`
    width: 100%;
`

const ButttonEnviar = styled.button``

const BottomContainer = styled.div`
    display: flex;
    margin-top: auto;
`

const ContentContainer = styled.div`
    display: flex;
    margin-top: auto;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    padding: 8px;
`

export class App extends React.Component {
    state = {
        valueInputUsuario: '',
        valueInputMensagem: '',
        listMessagesSent: [],
    }

    onChangeInputUsuario = (element) => {
        this.setState({ valueInputUsuario: element.currentTarget.value })
    }

    onChangeInputMensagem = (element) => {
        this.setState({ valueInputMensagem: element.currentTarget.value })
    }

    sendMessage = () => {
        this.state.listMessagesSent.push({
            user: this.state.valueInputUsuario,
            message: this.state.valueInputMensagem,
        })

        this.forceUpdate()

        this.setState({ valueInputMensagem: '' })
    }

    render() {
        return (
            <Container>
                <ContentContainer>
                    {this.state.listMessagesSent.map((messageSent) => {
                        return <Message user={messageSent.user} message={messageSent.message} />
                    })}
                </ContentContainer>

                <BottomContainer>
                    <InputUsuario placeholder="Usuário" value={this.state.valueInputUsuario} onChange={this.onChangeInputUsuario} />

                    <InputMensagem placeholder="Mensagem" value={this.state.valueInputMensagem} onChange={this.onChangeInputMensagem} />
                    <ButttonEnviar onClick={this.sendMessage}>Enviar</ButttonEnviar>
                </BottomContainer>
            </Container>
        )
    }
}

export default App
