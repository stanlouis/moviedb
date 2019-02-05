import movieDb from '../api/moviedb';

export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';
export const GET_MOVIES = 'GET_MOVIES';

export const toggleMessage = () => ({ type: TOGGLE_MESSAGE });

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
