import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

class ListarUsuarios extends React.Component {
    state = {
        usersList: [],
    }

    componentDidMount = () => {
        this.getUsersFromApi()
    }

    getUsersFromApi = () => {
        const config = {
            headers: { Authorization: 'natasha-reis-hooks' },
        }
        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', config)
            .then((response) => {
                this.setState({
                    usersList: response.data,
                })
            })
            .catch((error) => {
                alert('Algo deu errado :(')
            })
    }

    render() {
        return (
            <div>
                {this.state.usersList.map((usuario) => {
                    return <div> {usuario.name}</div>
                })}
            </div>
        )
    }
}

export default ListarUsuarios
