import initialState from '../initial-state';

import { SET_SUBJECTS } from '../types';

const subjectsReducer = (subjectsState = initialState.subjects, action) => {
  switch (action.type) {
    case SET_SUBJECTS:
      return { ...action.subjects };

    default:
      return { ...subjectsState };
  }
};

export default subjectsReducer;
