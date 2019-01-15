import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ movie }) => <li className="list-group-item">{movie.title}</li>;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Movie;
