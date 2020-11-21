import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './MovieForm.css';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div className="edit-form-title">
        <label className="edit-form-title-label" htmlFor="movie_title">
          Título
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate"
            value={title}
            onChange={event => this.updateMovie('title', event.target.value)}
          />
        </label>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div className="edit-form-subtitle">
        <label className="edit-form-subtitle-label" htmlFor="movie_subtitle">
          Subtítulo
          <input
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
            value={subtitle}
            onChange={event => this.updateMovie('subtitle', event.target.value)}
          />
        </label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row edit-form-img">
        <label className="row edit-form-img-label" htmlFor="movie_image">
          Imagem
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            value={imagePath}
            onChange={event =>
              this.updateMovie('imagePath', event.target.value)
            }
          />
        </label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div className="edit-form-storyline">
        <label className=" edit-form-storyline-label" htmlFor="movie_storyline">
          Sinopse
          <textarea
            id="movie_storyline"
            value={storyline}
            rows="4"
            cols="50"
            onChange={event =>
              this.updateMovie('storyline', event.target.value)
            }
          />
        </label>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <div className="edit-form-genre">
        <label className="edit-form-genre-label" htmlFor="movie_genre">
          Gênero
          <select
            id="movie_genre"
            value={genre}
            onChange={event => this.updateMovie('genre', event.target.value)}
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>
        </label>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <div className="edit-form-rating">
        <label className="edit-form-rating-label" htmlFor="movie_rating">
          Avaliação
          <input
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            step={0.1}
            min={0}
            max={5}
            value={rating}
            onChange={event => this.updateMovie('rating', event.target.value)}
          />
        </label>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div className="edit-form-buttons">
        <Link className="movie-details-link" to="/">
          VOLTAR
        </Link>
        <button
          className="edit-form-button"
          type="button"
          onClick={this.handleSubmit}
        >
          Enviar alterações
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form className="edit-form">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
