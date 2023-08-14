import React, { Component } from 'react';
import './App.css';
import TrackList from './Tracklist';

class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Search Results</h2>
        <TrackList
          tracks={this.props.searchResults}
          onAdd={this.props.onAdd}
          isRemoval={false}
        />
      </div>
    );
  }
}

export default SearchResults;
