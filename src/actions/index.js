import movieDb from '../api/moviedb';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';


export const getMovies = () => async dispatch => {
  const movies = await movieDb.get('/discover/movie', {
    params: {
      sort_by: 'popularity.desc',
      include_adult: false,
      include_video: false,
      page: 1,
    },
  });
  dispatch({ type: GET_MOVIES, payload: movies.data.results });
};

export const getMovie = id => async dispatch => {
  const movie = await movieDb.get(`/movie/${id}`);
  dispatch({ type: GET_MOVIE, payload: movie.data });
};

export const resetMovie = () => ({
  type: RESET_MOVIE,
});
