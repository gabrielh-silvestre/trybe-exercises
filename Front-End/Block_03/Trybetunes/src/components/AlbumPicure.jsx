import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AlbumPicure extends Component {
  render() {
    const { artistInfo: { artistName, artworkUrl100, collectionName } } = this.props;
    return (
      <section>
        <img src={ artworkUrl100 } alt={ collectionName } />

        <div>
          <h2 data-testid="album-name">{collectionName}</h2>
          <p data-testid="artist-name">{artistName}</p>
        </div>
      </section>
    );
  }
}

AlbumPicure.propTypes = {
  artistInfo: PropTypes.instanceOf(Object).isRequired,
};
