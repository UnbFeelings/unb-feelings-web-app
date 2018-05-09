import React from 'react';

import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';

import initialState, { WebDataStates } from '../../../../../redux/initial-state';
import HomeContainer from '../../../../../components/pages/home/HomeContainer';
import Home from '../../../../../components/pages/home/Home';

const shallowWithStore = (component, store) => {
  const context = {
    store,
  };

  return shallow(component, { context });
};

describe('<HomeContainer />', () => {
  it('contained Home component', () => {
    const testState = {
      user: { ...initialState.user },
    };

    const store = createMockStore(testState);
    const container = shallowWithStore(<HomeContainer />, store);
    expect(container).toBeInstanceOf(Object);

    const home = container.dive();

    expect(home.prop('className')).toBe('Home');
  });
});
