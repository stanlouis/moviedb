/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import styled from 'styled-components';
import movieDb from './api/moviedb';
import { Poster } from './Movie';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movieInfo: {},
  };

  componentDidMount = async () => {
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
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movieInfo.backdrop_path}`}>
        <MovieInfo>
          <Poster src={`${POSTER_PATH}${movieInfo.poster_path}`} alt={movieInfo.title} />
          <div className="card border-light">
            <div className="card-body">
              <h1 className="card-title">{movieInfo.title}</h1>
              <h3 className="card-subtitle text-muted">{movieInfo.release_date}</h3>
              <p className="card-text">{movieInfo.overview}</p>
            </div>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 40px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
