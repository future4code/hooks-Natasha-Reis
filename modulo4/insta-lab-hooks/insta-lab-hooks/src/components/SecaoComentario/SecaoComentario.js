import React, { useState } from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const InputComment = styled.input`
  width: 100%;
  margin-right: 5px;
`;

const SecaoComentario = (props) => {
  const [valueInputComentario, setValueInputComentario] = useState("");

  const onChangeComentario = (event) => {
    setValueInputComentario(event.currentTarget.value);
  };

  return (
    <CommentContainer>
      <InputComment
        className={"input-comentario"}
        placeholder={"Comentário"}
        value={valueInputComentario}
        onChange={onChangeComentario}
      />
      <button
        onClick={() => {
          props.enviarComentario(valueInputComentario);
        }}
      >
        Enviar
      </button>
    </CommentContainer>
  );
};

export default SecaoComentario;
