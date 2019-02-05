import React, { PureComponent } from 'react';
import styled from 'styled-components';
import movieDb from './api/moviedb';
import Movie from './Movie';

export class MoviesList extends PureComponent {
  state = {
    movies: [],
  };

  componentDidMount = async () => {
    try {
      const movies = await movieDb.get('/discover/movie', {
        params: {
          sort_by: 'popularity.desc',
          include_adult: false,
          include_video: false,
          page: 1,
        },
      });
      this.setState({ movies: movies.data.results });
    } catch (e) {
      console.log(e); // eslint-disable-line
    }
  };

  render() {
    const { movies } = this.state;
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
  grid-template-columns: repeat(auto-fill, minmax(11.25rem,1fr));
  grid-row-gap: 1rem;
  justify-items: center;
  align-items: center;

`;

export default MoviesList;
