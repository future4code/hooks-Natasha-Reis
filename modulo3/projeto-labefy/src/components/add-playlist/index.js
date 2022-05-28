import React from "react";
import styled from "styled-components";
import axios from "axios";

const NamePlaylist = styled.input``;
const ButtonAdd = styled.button``;

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
        <NamePlaylist
          value={this.state.valueNamePlaylist}
          onChange={(event) =>
            this.handleInputChange(event, "valueNamePlaylist")
          }
          placeholder="Dê um nome à sua playlist"
        />
        <ButtonAdd onClick={this.handleButtonClick}>
          Adicionar playlist
        </ButtonAdd>
      </div>
    );
  }
}
export default AddPlaylist;
