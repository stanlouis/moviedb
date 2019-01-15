import React, { Component } from 'react';
import movieDb from './api/moviedb';
import Movie from './Movie';

export class MoviesList extends Component {
  state = {
    movies: [],
  };

  componentDidMount = async () => {
    try {
      const movies = await movieDb.get('/discover/movie', {
        params: {
          language: 'en-US',
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
      <React.Fragment>
        <ul className="list-group">
          {movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default MoviesList;
