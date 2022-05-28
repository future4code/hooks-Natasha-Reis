import React from "react";
import AddPlaylist from "./components/add-playlist";
import ViewPlaylist from "./components/view-playlists";
import axios from "axios";

const config = {
  headers: { Authorization: "natasha-reis-hooks" },
};

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
      {/* {this.state.currentView === "AddPlaylist" ? <AddPlaylist /> : null} */}
      <AddPlaylist addPlaylist={this.addPlaylist} />
      <ViewPlaylist
        viewPlaylists={this.state.viewPlaylists}
        getPlaylists={this.getPlaylistsFromApi}
        deletePlaylist={this.deletePlaylist}
      />
    </div>
  );
}

export default App;
