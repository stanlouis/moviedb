import { combineReducers } from 'redux';

import toggle from './toggleReducer';
import movies from './moviesReducer';

const rootReducer = combineReducers({ toggle, movies });

export default rootReducer;
