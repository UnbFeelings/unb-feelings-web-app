import initialState from '../initial-state';
import { SET_USER } from '../types';

const userReducer = (userState = initialState.user, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...action.user };

    default:
      return { ...userState };
  }
};

export default userReducer;
