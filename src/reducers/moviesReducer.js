import { GET_MOVIES } from '../actions';

const initialState = {
  movies: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES:
      return { ...state, movies: payload };
    default:
      return state;
  }
};
