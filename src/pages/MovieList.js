import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import './MovieList.css';
class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      loading: false,
      movies: [],
    };
    this.searchTextChange = this.searchTextChange.bind(this);
    this.bookmarkedOnlyChange = this.bookmarkedOnlyChange.bind(this);
    this.slectedGenreChange = this.slectedGenreChange.bind(this);
    this.renderMovieList = this.renderMovieList.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({ loading: true }, async () => {
      const requestReturn = await movieAPI.getMovies();
      this.setState(({ movies }) => ({
        loading: false,
        movies: [...movies, ...requestReturn],
      }));
    });
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

  renderMovieList() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <Header />
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.searchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.bookmarkedOnlyChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.slectedGenreChange}
        />

        <div data-testid="movie-list" className="movie-list">
          {this.state.movies.map(movie => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
  render() {
    const { loading } = this.state;

    return (
      <div>
        <div>{loading ? <Loading /> : this.renderMovieList()}</div>
      </div>
    );
  }
}

export default MovieList;
