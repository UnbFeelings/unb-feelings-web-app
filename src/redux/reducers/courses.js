import initialState from '../initial-state';

import { SET_COURSES } from '../types';

const coursesReducer = (coursesState=initialState.courses, action) => {
  switch(action.type) {
    case SET_COURSES:
      return {...action.courses};

    default:
      return {...coursesState};
  }
}

export default coursesReducer;