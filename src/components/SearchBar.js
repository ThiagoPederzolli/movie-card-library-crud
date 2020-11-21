// implement SearchBar component here
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <h1 className="search-title">Barra de Pesquisa</h1>
        <form data-testid="search-bar-form" className="search-form">
          <label htmlFor="searchText" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="searchText"
              name="searchText"
              data-testid="text-input"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>

          <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="bookmarkedOnly"
              name="bookmarkedOnly"
              data-testid="checkbox-input"
              type="checkbox"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
          </label>

          <label htmlFor="selectedGenre" data-testid="select-input-label">
            Filtrar por gênero
            <select
              id="selectedGenre"
              name="selectedGenre"
              data-testid="select-input"
              value={selectedGenre}
              onChange={onSelectedGenreChange}
            >
              <option data-testid="select-option" value="">
                Todos
              </option>
              <option data-testid="select-option" value="action">
                Ação
              </option>
              <option data-testid="select-option" value="comedy">
                Comédia
              </option>
              <option data-testid="select-option" value="thriller">
                Suspense
              </option>
            </select>
          </label>
          <Link className="add-movie" to="/movies/new">
            ADICIONAR CARTÃO
          </Link>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: Proptypes.string.isRequired,
  onSearchTextChange: Proptypes.func.isRequired,
  bookmarkedOnly: Proptypes.bool.isRequired,
  onBookmarkedChange: Proptypes.func.isRequired,
  selectedGenre: Proptypes.string.isRequired,
  onSelectedGenreChange: Proptypes.func.isRequired,
};

export default SearchBar;
