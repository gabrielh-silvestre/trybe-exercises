import React, { Component } from 'react';
import Header from '../components/Header';
import LoadingComponent from '../components/LoadingComponent';
import MusicCard from '../components/MusicCard';
import {
  getFavoriteSongs,
  addSong,
  removeSong,
} from '../services/favoriteSongsAPI';

export default class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: new Set(),
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.fetchFavoriteSongs = this.fetchFavoriteSongs.bind(this);
    this.renderMusics = this.renderMusics.bind(this);
  }

  componentDidMount() {
    this.fetchFavoriteSongs();
  }

  handleChange(song) {
    this.handleFavorite(song);
  }

  handleFavorite(song) {
    // Inspiração da função: https://github.com/tryber/sd-016-b-project-trybetunes/pull/8/files | Arquivo: Album.js linha: 50
    const { favorites } = this.state;

    this.setState({ loading: true }, async () => {
      if (!favorites.has(song)) {
        await addSong(song);
        favorites.add(song);
      } else {
        await removeSong(song);
        favorites.delete(song);
      }
      this.setState({ loading: false, favorites });
    });
  }

  fetchFavoriteSongs() {
    this.setState({ loading: true }, async () => {
      const favorites = await getFavoriteSongs();
      this.setState({ favorites: new Set(favorites), loading: false });
    });
  }

  renderMusics() {
    const { favorites } = this.state;
    const favoritesArr = Array.from(favorites);

    return favoritesArr.map((music) => (
      <MusicCard
        key={ music.trackId }
        trackInfo={ music }
        isChecked={ favorites.has(music) }
        handleChange={ () => this.handleChange(music) }
      />
    ));
  }

  render() {
    const { loading } = this.state;

    return (
      <div data-testid="page-favorites">
        <Header />
        {loading ? <LoadingComponent /> : this.renderMusics()}
      </div>
    );
  }
}
