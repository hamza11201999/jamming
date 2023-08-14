import React, { Component } from 'react';
import './App.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  // Method to handle search input change
  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  // Placeholder method for handling search button click
  handleSearch = () => {
    // Implement Spotify API logic here to search for tracks
    // Update searchResults state in the parent component
  };

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter a song, album, or artist"
          onChange={this.handleSearchChange}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
