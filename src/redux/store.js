import { createStore, combineReducers } from 'redux';

import initialState from './initial-state';

import userReducer from './reducers/user';
import coursesReducer from './reducers/courses';
import subjectsReducer from './reducers/subjects';

const reducers = combineReducers({
  user: userReducer,
  courses: coursesReducer,
  subjects: subjectsReducer
});

const store = createStore(reducers, initialState);

export default store;