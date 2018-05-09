import store from '../../redux/store';

import initialState, { WebDataStates } from '../../redux/initial-state';

describe("store", () => {
  it("Set all the initialState to redux", () => {
    expect(store.getState().user.state).toBe(initialState.user.state);
    expect(store.getState().user.data.id).toBe(initialState.user.data.id);

    expect(store.getState().courses.state).toBe(initialState.courses.state);
    expect(store.getState().courses.data.length).toBe(0);

    expect(store.getState().subjects.state).toBe(initialState.subjects.state);
    expect(store.getState().subjects.data.length).toBe(0);
  });
});