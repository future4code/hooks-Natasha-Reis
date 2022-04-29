import React from 'react'
import styled from 'styled-components'
import Post from './components/Post/Post'

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const NovoNomeInput = styled.input``
const NovaimagemUsuarioInput = styled.input``
const NovaimagemPostInput = styled.input``

class App extends React.Component {
    state = {
        valueTextInputName: '',
        valueTextInputFotoUsuario: '',
        valueTextInputFotoPost: '',

        posts: [
            {
                nomeUsuario: 'thor',
                fotoUsuario: 'https://picsum.photos/50/50',
                fotoPost: 'https://picsum.photos/200/150',
            },
            {
                nomeUsuario: 'bruce',
                fotoUsuario: 'https://picsum.photos/50/51',
                fotoPost: 'https://picsum.photos/200/151',
            },
            {
                nomeUsuario: 'pirulito',
                fotoUsuario: 'https://picsum.photos/50/52',
                fotoPost: 'https://picsum.photos/200/152',
            },
        ],
    }

    onChangeName = (element) => {
        this.setState({ valueTextInputName: element.currentTarget.value })
    }
    onChangeFotoUsuario = (element) => {
        this.setState({ valueTextInputFotoUsuario: element.currentTarget.value })
    }
    onChangeFotoPost = (element) => {
        this.setState({ valueTextInputFotoPost: element.currentTarget.value })
    }

    addPost = () => {
        this.state.posts.push({
            nomeUsuario: this.state.valueTextInputName,
            fotoUsuario: this.state.valueTextInputFotoUsuario,
            fotoPost: this.state.valueTextInputFotoPost,
        })

        this.forceUpdate()
    }

    render() {
        return (
            <MainContainer>
                <div>
                    <NovoNomeInput placeholder={'Nome'} value={this.state.valueTextInputName} onChange={this.onChangeName} />
                    <button onClick={this.addPost}>Adicionar</button>

                    <NovaimagemUsuarioInput
                        placeholder={'Foto Usuário'}
                        value={this.state.valueTextInputFotoUsuario}
                        onChange={this.onChangeFotoUsuario}
                    />

                    <NovaimagemPostInput placeholder={'Foto Post'} value={this.state.valueTextInputFotoPost} onChange={this.onChangeFotoPost} />
                </div>
                {this.state.posts.map((post) => {
                    return <Post nomeUsuario={post.nomeUsuario} fotoUsuario={post.fotoUsuario} fotoPost={post.fotoPost} />
                })}
            </MainContainer>
        )
    }
}

export default App
