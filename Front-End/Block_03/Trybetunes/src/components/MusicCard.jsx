import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import LoadingComponent from './LoadingComponent';

export default class MusicCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  render() {
    const {
      trackInfo: { previewUrl, trackName, trackId },
      handleChange,
      isChecked,
    } = this.props;
    const { loading } = this.state;

    return loading ? (
      <LoadingComponent />
    ) : (
      <section>
        <h3>{trackName}</h3>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>

        <label htmlFor="favoriteSong">
          Favorita
          <input
            type="checkbox"
            name="favoriteSong"
            id="favoriteSong"
            value={ trackId }
            onChange={ handleChange }
            checked={ isChecked }
            data-testid={ `checkbox-music-${trackId}` }
          />
        </label>
      </section>
    );
  }
}

MusicCard.propTypes = {
  trackInfo: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};
