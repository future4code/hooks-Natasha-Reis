import React from "react";
import styled from "styled-components";
import axios from "axios";

const NameTrack = styled.input``;
const ButtonAdd = styled.button``;
const NameArtist = styled.input``;
const Url = styled.input``;

const AddTrackContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class AddTrack extends React.Component {
  state = {
    valueNameTrack: "",
    valueNameArtist: "",
    valueUrl: "",
  };

  handleInputChange = (event, addInput) => {
    this.setState({
      [addInput]: event.currentTarget.value,
    });
  };

  addTrack = () => {
    const body = {
      name: this.state.valueNameTrack,
      artist: this.state.valueNameArtist,
      url: this.state.valueUrl,
    };

    const config = {
      headers: { Authorization: "natasha-reis-hooks" },
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,
        body,
        config
      )
      .then((response) => {})
      .catch((error) => {
        alert("Algo deu errado :(");
      });
  };

  handleButtonClick = () => {
    this.addTrack();
  };

  render() {
    return (
      <AddTrackContainer>
        <NameTrack
          value={this.state.valueNameTrack}
          onChange={(event) => this.handleInputChange(event, "valueNameTrack")}
          placeholder="Nome"
        />
        <NameArtist
          value={this.state.valueNameArtist}
          onChange={(event) => this.handleInputChange(event, "valueNameArtist")}
          placeholder="Artista"
        />

        <Url
          value={this.state.valueUrl}
          onChange={(event) => this.handleInputChange(event, "valueUrl")}
          placeholder="URL"
        />

        <ButtonAdd onClick={this.handleButtonClick}>Adicionar música</ButtonAdd>
      </AddTrackContainer>
    );
  }
}
export default AddTrack;
