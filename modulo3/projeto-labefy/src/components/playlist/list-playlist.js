import React from "react";
import styled from "styled-components";
import AddTrack from "./add-track";
import ListAllTracksFromPlaylist from "./list-tracks";

const PlaylistContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const TextAllPlaylists = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ff94a9;
`;

const TextPlaylistName = styled.h4`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class ListAllPlaylists extends React.Component {
  componentDidMount = () => {
    this.props.getPlaylists();
  };

  render() {
    return (
      <div>
        <br></br>
        <TextAllPlaylists> Todas as Playlists:</TextAllPlaylists>
        <br />
        <br />
        <PlaylistContainer>
          {this.props.viewPlaylists.map((playlist) => {
            return (
              <div>
                <div>
                  <TextPlaylistName>
                    {" "}
                    Nome da playlist: {playlist.name}
                  </TextPlaylistName>
                  <br />
                  <br />
                  <ButtonStyled>
                    <button
                      onClick={() => this.props.deletePlaylist(playlist.id)}
                    >
                      <b> Deletar Playlist</b>
                    </button>
                  </ButtonStyled>
                </div>
                Musicas:
                <ListAllTracksFromPlaylist playlistId={playlist.id} />
                <AddTrack playlistId={playlist.id} />
              </div>
            );
          })}
        </PlaylistContainer>
      </div>
    );
  }
}

export default ListAllPlaylists;
