import React, { Component } from 'react';
import movieDb from './api/moviedb';

import './App.css';
import logo from './moviedb.png';
import Movie from './Movie';

class App extends Component {
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo " alt="logo" />
        </header>
        <div className="container">
          <h1 className="text-center my-3 display-4">The Movie Database</h1>
          <ul className="list-group">
            {movies.map(movie => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
