import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

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
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/" onClick={this.deleteMovie}>
          DELETAR
        </Link>
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
