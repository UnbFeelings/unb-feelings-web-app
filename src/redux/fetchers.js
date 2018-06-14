import axios from '../configs/axios';

import { WebDataStates } from './initial-state';
import { SET_SUBJECTS } from './types';

export const fetchSubjects = async (dispatch) => {
  const { data, status } = await axios.get('/subjects/');

  if (status === 200) {
    dispatch({
      type: SET_SUBJECTS,
      subjects: {
        state: WebDataStates.SUCCESS,
        data: data.results,
      },
    });
  } else {
    dispatch({
      type: SET_SUBJECTS,
      subjects: {
        state: WebDataStates.ERROR,
        data,
      },
    });
  }
};
