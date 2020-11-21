import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';


class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      movies: [],
    };

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

  renderMovieList() {
    return (
      <div data-testid="movie-list">
        {this.state.movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
  render() {
    const { loading } = this.state;

    return (
      <div>
        <div>{loading ? <Loading /> : this.renderMovieList()}</div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
