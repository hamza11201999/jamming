import React, { Component } from 'react';
import './App.css';

class Track extends Component {
  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={() => this.props.onRemove(this.props.track)}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={() => this.props.onAdd(this.props.track)}>
        +
      </button>
    );
  }

  render() {
    const { track } = this.props;
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name}</h3>
          <p>
            {track.artist} | {track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
