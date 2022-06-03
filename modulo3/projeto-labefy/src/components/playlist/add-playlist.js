import React from "react";
import styled from "styled-components";

const TextAddPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NamePlaylist = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  border-radius: 12px;
`;

const ButtonAdd = styled.button`
display: 'flex',
flex-direction: column;
margin-top: 12px;`;

class AddPlaylist extends React.Component {
  state = {
    valueNamePlaylist: "",
  };

  handleInputChange = (event, addInput) => {
    this.setState({
      [addInput]: event.currentTarget.value,
    });
  };

  handleButtonClick = () => {
    this.props.addPlaylist(this.state.valueNamePlaylist);
  };

  render() {
    return (
      <div>
        <TextAddPlaylist>
          <NamePlaylist
            value={this.state.valueNamePlaylist}
            onChange={(event) =>
              this.handleInputChange(event, "valueNamePlaylist")
            }
            placeholder="Dê um nome à sua playlist"
          />
          <ButtonAdd onClick={this.handleButtonClick}>Adicionar</ButtonAdd>
        </TextAddPlaylist>
      </div>
    );
  }
}
export default AddPlaylist;
