import React from "react";
import axios from "axios";
import ListAllPlaylists from "./components/playlist/list-playlist";
import AddPlaylist from "./components/playlist/add-playlist";
import styled from "styled-components";
import "../src/App.css";

const config = {
  headers: { Authorization: "natasha-reis-hooks" },
};

const TextHome = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e91e63;
  font-size: 58px;
`;

class App extends React.Component {
  state = {
    currentView: "AddPlaylist",
    viewPlaylists: [],
  };

  getPlaylistsFromApi = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        config
      )
      .then((response) => {
        this.setState({
          viewPlaylists: response.data.result.list,
        });
      })
      .catch((error) => {
        alert("Algo deu errado :(");
      });
  };

  deletePlaylist = (playlistId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
        config
      )
      .then((response) => {
        this.getPlaylistsFromApi();
      })
      .catch((error) => {
        alert("Algo deu errado :(");
      });
  };

  addPlaylist = (name) => {
    const body = {
      name,
    };

    const config = {
      headers: { Authorization: "natasha-reis-hooks" },
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        config
      )
      .then((response) => {
        this.getPlaylistsFromApi();
        this.setState({ valueNamePlaylist: "" });
      })
      .catch((error) => {
        alert("Algo deu errado :(");
      });
  };

  render = () => (
    <div>
      <TextHome>LABEFY</TextHome>
      <AddPlaylist addPlaylist={this.addPlaylist} />
      <ListAllPlaylists
        viewPlaylists={this.state.viewPlaylists}
        getPlaylists={this.getPlaylistsFromApi}
        deletePlaylist={this.deletePlaylist}
      />
    </div>
  );
}

export default App;
