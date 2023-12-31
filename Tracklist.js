import React, { Component } from 'react';
import './App.css';
import Track from './Track';

class TrackList extends Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map((track) => (
          <Track
            key={track.id}
            track={track}
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
            isRemoval={this.props.isRemoval}
          />
        ))}
      </div>
    );
  }
}

export default TrackList;
