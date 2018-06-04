import initialState from '../initial-state';

import { SET_DIAGNOSIS } from '../types';

const diagnosisReducer = (diagnosisState = initialState.diagnosis, action) => {
  switch (action.type) {
    case SET_DIAGNOSIS:
      return { ...action.diagnosis };

    default:
      return { ...diagnosisState };
  }
};

export default diagnosisReducer;
