import React from "react";
import axios from "axios";

const config = {
  headers: { Authorization: "natasha-reis-hooks" },
};

class ListAllTracksFromPlaylist extends React.Component {
  state = {
    allTracks: [],
  };

  getTracksFromPlaylist = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,
        config
      )
      .then((response) => {
        console.log(response);
        this.setState({
          allTracks: response.data.result.tracks,
        });
      })
      .catch((error) => {
        alert("Algo deu errado :(");
      });
  };

  componentDidMount = () => {
    this.getTracksFromPlaylist();
  };

  render() {
    return (
      <div>
        {this.state.allTracks.map((track) => {
          return (
            <div>
              <div> {track.name}</div>
              <audio controls src={track.url}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListAllTracksFromPlaylist;
