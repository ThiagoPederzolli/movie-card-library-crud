import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
      <div data-testid="movie-card">
        <div>
          <img src={imagePath} alt={title} />
        </div>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{storyline}</p>
        </div>
        <div>
          <p>
            {genre} <span>Rating: {rating}</span>
          </p>
        </div>
        <Link to={`movies/${id}`}> VER DETALHES </Link>
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
