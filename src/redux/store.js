import { createStore, combineReducers } from 'redux';

import initialState from './initial-state';

import userReducer from './reducers/user';
import coursesReducer from './reducers/courses';
import subjectsReducer from './reducers/subjects';
import diagnosisReducer from './reducers/diagnosis';

const reducers = combineReducers({
  user: userReducer,
  courses: coursesReducer,
  subjects: subjectsReducer,
  diagnosis: diagnosisReducer,
});

const store = createStore(reducers, initialState);

export default store;
