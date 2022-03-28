import React, { Component } from 'react';
import AlbumsList from '../components/AlbumsList';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      artistName: '',
      hasError: true,
      artists: [],
      isSubmited: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
    this.renderArtists = this.renderArtists.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({ searchTerm: value, artistName: value }, () => {
      this.handleError();
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { searchTerm } = this.state;

    const artists = await searchAlbumsAPI(searchTerm);
    this.setState({ searchTerm: '', artists, isSubmited: true });
  }

  handleError() {
    const { searchTerm } = this.state;

    this.setState({ hasError: searchTerm.length < 2 });
  }

  renderArtists() {
    const { artists, artistName } = this.state;

    return artists.length === 0 ? (
      <h4>Nenhum álbum foi encontrado</h4>
    ) : (
      artists.map((art) => (
        <AlbumsList
          key={ art.collectionId }
          artistName={ artistName }
          artworkUrl100={ art.artworkUrl100 }
          collectionId={ art.collectionId }
          collectionName={ art.collectionName }
        />
      ))
    );
  }

  render() {
    const { searchTerm, artistName, isSubmited, hasError } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="searchTerm">
            Nome de usuário:
            <input
              type="text"
              name="searchTerm"
              id="searchTerm"
              value={ searchTerm }
              onChange={ this.handleChange }
              data-testid="search-artist-input"
            />
          </label>

          <button
            type="submit"
            disabled={ hasError }
            onClick={ this.handleSubmit }
            data-testid="search-artist-button"
          >
            Pesquisar
          </button>
        </form>

        {isSubmited && (
          <article>
            <h3>{`Resultado de álbuns de: ${artistName}`}</h3>
            {this.renderArtists()}
          </article>
        )}
      </div>
    );
  }
}
