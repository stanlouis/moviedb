/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Overdrive from 'react-overdrive';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMovie, resetMovie } from '../../actions';
import { Poster } from './Movie';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  componentDidMount() {
    const { getMovie, match } = this.props;

    getMovie(match.params.id);
  }

  componentWillUnmount() {
    this.props.resetMovie();
  }

  render() {
    const { movie } = this.props;
    if (!movie.id) return null;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <Poster
              src={`${POSTER_PATH}${movie.poster_path}`}
              alt={movie.title}
            />
          </Overdrive>
          <div className="card border-light">
            <div className="card-body">
              <h1 className="card-title">{movie.title}</h1>
              <h3 className="card-subtitle text-muted">{movie.release_date}</h3>
              <p className="card-text">{movie.overview}</p>
            </div>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movies.movie,
  isLoaded: state.movies.movieLoaded,
});

export default connect(
  mapStateToProps,
  { getMovie, resetMovie }
)(MovieDetail);

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
  
  @media (max-width: 768px) {
    background: url(${props => props.backdrop}) no-repeat;
    background-size: 100% auto;
    background-color: white;
  }
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

  @media (max-width: 480px) {
    img {
      display: none;
    }
    > div {
      margin: 0 auto;
    }
  }
`;
