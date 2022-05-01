import styled from 'styled-components'

const UserText = styled.b``

const Message = (props) => {
    return (
        <div>
            <UserText>{props.user}: </UserText>
            {props.message}
        </div>
    )
}

export default Message
