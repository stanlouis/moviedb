import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getMovies } from '../../actions';
import Movie from './Movie';

export class MoviesList extends PureComponent {
  componentDidMount = () => {
    const { getMovies } = this.props;
    getMovies();
  };

  render() {
    const { movies } = this.props;
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

const mapStateToProps = state => ({ movies: state.movies.movies });

export default connect(
  mapStateToProps,
  { getMovies }
)(MoviesList);
