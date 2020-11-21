// implement MovieLibrary component here
import React, { Component } from 'react';
import Proptype from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from '../pages/MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.searchTextChange = this.searchTextChange.bind(this);
    this.bookmarkedOnlyChange = this.bookmarkedOnlyChange.bind(this);
    this.slectedGenreChange = this.slectedGenreChange.bind(this);
    this.AddNewMovie = this.AddNewMovie.bind(this);
  }

  searchTextChange({ target }) {
    const { movies } = this.state;
    const { value } = target;
    const showMovie =
      value !== 'undefined'
        ? movies.filter(
            movie =>
              movie.title.includes(value) ||
              movie.subtitle.includes(value) ||
              movie.storyline.includes(value),
          )
        : movies;
    this.setState({
      searchText: value,
      movies: showMovie,
    });
  }

  bookmarkedOnlyChange({ target }) {
    const { movies } = this.state;
    const { checked } = target;
    const favoriteMovies = checked
      ? movies.filter(movie => movie.bookmarked)
      : movies;
    this.setState({
      bookmarkedOnly: checked,
      movies: favoriteMovies,
    });
  }

  slectedGenreChange({ target }) {
    const { movies } = this.state;
    const { value } = target;
    const genreMovies =
      value !== '' ? movies.filter(movie => movie.genre === value) : movies;

    this.setState({
      selectedGenre: value,
      movies: genreMovies,
    });
  }

  AddNewMovie(movie) {
    this.setState(estadoAnterior => ({
      movies: [...estadoAnterior.movies, movie],
    }));
  }

  render() {
    return (
      <div>
        <h1>Movie Library</h1>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.searchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.bookmarkedOnlyChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.slectedGenreChange}
        />
        <MovieList />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: Proptype.arrayOf(Proptype.object).isRequired,
};

export default MovieLibrary;
