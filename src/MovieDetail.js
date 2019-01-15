import React, { Component } from 'react';
import movieDb from './api/moviedb';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movieInfo: {},
  };

  componentDidMount = async () => {
    // eslint-disable-next-line react/destructuring-assignment
    const { id } = this.props.match.params;
    try {
      const res = await movieDb.get(`/movie/${id}`);
      const movieInfo = res.data;
      this.setState({ movieInfo });
    } catch (e) {
      console.log(e); // eslint-disable-line
    }
  };

  render() {
    const { movieInfo } = this.state;
    return (
      <div>
        <div className="jumbotron">
          <img src={`${BACKDROP_PATH}${movieInfo.backdrop_path}`} alt={movieInfo.title} className="img-fluid" />
        </div>

        <img src={`${POSTER_PATH}${movieInfo.poster_path}`} alt={movieInfo.title} />
        <h1>{movieInfo.title}</h1>
        <h3>{movieInfo.release_date}</h3>
        <p>{movieInfo.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;
