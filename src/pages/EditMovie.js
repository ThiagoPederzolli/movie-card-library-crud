import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const movieId = this.props.match.params.id;
    const movie = await movieAPI.getMovie(movieId);
    this.setState(() => ({
      movie,
      status: '',
    }));
  }

  handleSubmit(updatedMovie) {
    movieAPI
      .updateMovie(updatedMovie)
      .then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EditMovie;
