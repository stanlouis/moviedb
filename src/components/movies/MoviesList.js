import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getMovies } from '../../actions';
import Movie from './Movie';

export class MoviesList extends PureComponent {
  componentDidMount = () => {
    const { getMovies, isLoaded, moviesLoadedAt } = this.props;
    const oneHour = 60 * 60 * 1000;
    if (!isLoaded || ((new Date()) - new Date(moviesLoadedAt)) > oneHour) {
      getMovies();
    }
  };

  render() {
    const { movies, isLoaded } = this.props;
    if (!isLoaded) return <h1>Loading...</h1>
    return (
      <MovieGrid>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    );
  }
}

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(11.25rem, 1fr));
  grid-row-gap: 1rem;
  justify-items: center;
  align-items: center;
`;

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded,
  moviesLoadedAt: state.movies.moviesLoadedAt,
});

export default connect(
  mapStateToProps,
  { getMovies },
)(MoviesList);
