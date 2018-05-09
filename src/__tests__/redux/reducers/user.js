import userReducer from '../../../redux/reducers/user';

import initialState, { WebDataStates } from '../../../redux/initial-state';
import { SET_USER } from '../../../redux/types';

describe("userReducer", () => {
  it("return the user initial state if an invalid type is given", () => {
    const newUser = userReducer(initialState.user, {
      type: "invalid",
      user: {
        state: WebDataStates.ERROR,
        data: {}
      }
    });

    expect(newUser.state).toBe(initialState.user.state);
    expect(newUser.state).toBe(WebDataStates.NOT_REQUESTED);
  });


  it("set all user data", () => {
    const newUser = userReducer(initialState.user, {
      type: SET_USER,
      user: {
        state: WebDataStates.SUCCESS,
        data: {
          id: 123,
          email: "test@user.com",
          token: "abc",
          course: {}
        }
      }
    });

    expect(newUser.state).toBe(WebDataStates.SUCCESS);
    expect(newUser.data.id).toBe(123);
    expect(newUser.data.email).toBe("test@user.com");
    expect(newUser.data.token).toBe("abc");
  });
});