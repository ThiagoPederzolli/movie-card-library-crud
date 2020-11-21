import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const {
      id,
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      genre,
    } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <div>
          <img className="movie-card-image" src={imagePath} alt={title} />
        </div>
        <div className="movie-card-body">
          <h1 className="movie-card-title">{title}</h1>
          <h2 className="movie-card-subtitle">{subtitle}</h2>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div>
          <p className="movie-card-footer">
            {genre} <span className="rating">Rating: {rating}</span>
          </p>
        </div>
        <Link className="movie-card-link" to={`movies/${id}`}>
          {' '}
          VER DETALHES{' '}
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
