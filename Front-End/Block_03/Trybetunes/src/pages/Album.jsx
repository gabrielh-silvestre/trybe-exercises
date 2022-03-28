import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import AlbumPicure from '../components/AlbumPicure';
import getMusics from '../services/musicsAPI';
import {
  getFavoriteSongs,
  addSong,
  removeSong,
} from '../services/favoriteSongsAPI';
import LoadingComponent from '../components/LoadingComponent';

export default class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artistMusics: [],
      artist: {},
      loading: false,
      favorites: new Set(),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.fetchMusics = this.fetchMusics.bind(this);
    this.fetchFavoriteMusics = this.fetchFavoriteMusics.bind(this);
    this.renderMusics = this.renderMusics.bind(this);
  }

  componentDidMount() {
    this.fetchMusics();
    this.fetchFavoriteMusics();
  }

  handleChange(song) {
    this.handleFavorite(song);
  }

  handleFavorite(song) {
    // Inspiração da função: https://github.com/tryber/sd-016-b-project-trybetunes/pull/8/files | Arquivo: Album.js linha: 50
    const { favorites } = this.state;

    this.setState({ loading: true }, async () => {
      if (!favorites.has(song.trackId)) {
        await addSong(song);
        favorites.add(song.trackId);
      } else {
        await removeSong(song);
        favorites.delete(song.trackId);
      }
      this.setState({ loading: false, favorites });
    });
  }

  async fetchMusics() {
    const { params } = this.props;
    const musics = await getMusics(params.id);

    this.setState({ artistMusics: musics, artist: musics[0] });
  }

  async fetchFavoriteMusics() {
    const resFavorites = await getFavoriteSongs();
    const favoriteMusics = resFavorites.map(({ trackId }) => trackId);

    if (favoriteMusics.length !== 0) {
      this.setState({ favorites: new Set(favoriteMusics) });
    }
  }

  renderMusics() {
    const { artistMusics, favorites } = this.state;

    return artistMusics
      .filter(({ kind }) => kind === 'song')
      .map((art) => (
        <MusicCard
          key={ art.trackId }
          trackInfo={ art }
          isChecked={ favorites.has(art.trackId) }
          handleChange={ () => this.handleChange(art) }
        />
      ));
  }

  render() {
    const { artist, loading } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        {loading && <LoadingComponent />}
        <article>
          <AlbumPicure artistInfo={ artist } />
        </article>
        {this.renderMusics()}
      </div>
    );
  }
}

Album.propTypes = {
  params: PropTypes.instanceOf(Object).isRequired,
};
