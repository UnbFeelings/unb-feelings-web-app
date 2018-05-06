import { createStore, combineReducers } from 'redux';

import initialState from './initial-state';

import userReducer from './reducers/user';
import coursesReducer from './reducers/courses';

const reducers = combineReducers({
  user: userReducer,
  courses: coursesReducer
});

const store = createStore(reducers, initialState);

export default store;