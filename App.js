import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: [], // Holds search results from Spotify API
      playlistTracks: [], // Holds playlist tracks
      playlistName: '', // Holds the playlist name
    };
  }

  // Method to add a track to the playlist
  addTrack = (track) => {
    const updatedPlaylist = this.state.playlistTracks.concat(track);
    this.setState({ playlistTracks: updatedPlaylist });
  };

  // Method to remove a track from the playlist
  removeTrack = (track) => {
    const updatedPlaylist = this.state.playlistTracks.filter(
      (playlistTrack) => playlistTrack.id !== track.id
    );
    this.setState({ playlistTracks: updatedPlaylist });
  };

  // Method to update the playlist name
  updatePlaylistName = (name) => {
    this.setState({ playlistName: name });
  };

  // Placeholder method for saving playlist to Spotify
  savePlaylist = () => {
    // Implement Spotify API logic here to create and save the playlist
    // You'll need to authenticate the user and make API calls
    // Refer to Spotify Web API documentation
  };

  render() {
    return (
      <div>
        <h1>Jammming</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
