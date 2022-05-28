import React from "react";

class ViewPlaylist extends React.Component {
  componentDidMount = () => {
    this.props.getPlaylists();
  };

  render() {
    return (
      <div>
        {this.props.viewPlaylists.map((playlist) => {
          return (
            <div>
              {" "}
              {playlist.name}{" "}
              <span onClick={() => this.props.deletePlaylist(playlist.id)}>
                x
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ViewPlaylist;
