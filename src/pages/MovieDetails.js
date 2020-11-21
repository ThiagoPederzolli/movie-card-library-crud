import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MovieDetails.css';

import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import Header from '../components/Header';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: '',
    };
    this.renderMovie = this.renderMovie.bind(this);
    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovieDetails();
  }

  fetchMovieDetails() {
    this.setState({ loading: true }, async () => {
      const { id } = this.props.match.params;
      const movie = await movieAPI.getMovie(id);
      this.setState(() => ({
        movie,
        loading: false,
      }));
    });
  }

  deleteMovie() {
    const { id } = this.props.match.params;
    movieAPI.deleteMovie(id);
  }

  renderMovie({ id, title, storyline, imagePath, genre, rating, subtitle }) {
    return (
      <div>
        <Header />
        <div className="movie-details">
          <img
            className="movie-details-img"
            alt="Movie Cover"
            src={`../${imagePath}`}
          />
          <p className="movie-details-title">
            Título: <span>{title}</span>
          </p>
          <p className="movie-details-subtitle">
            Subtítulo: <span>{subtitle}</span>
          </p>
          <p className="movie-details-storyline">
            Sinopse: <span>{storyline}</span>
          </p>
          <p className="movie-details-genre">
            Gênero: <span>{genre}</span>
          </p>
          <p className="movie-details-rating">
            Avaliação: <span>{rating}</span>
          </p>
          <div className="movie-details-links">
            <Link className="movie-details-link" to="/">
              VOLTAR
            </Link>
            <Link className="movie-details-link" to={`/movies/${id}/edit`}>
              EDITAR
            </Link>
            <Link
              className="movie-details-link"
              to="/"
              onClick={this.deleteMovie}
            >
              DELETAR
            </Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { loading, movie } = this.state;

    return (
      <div data-testid="movie-details">
        <div>{loading ? <Loading /> : this.renderMovie(movie)}</div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieDetails;
