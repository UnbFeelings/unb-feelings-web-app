import React from 'react';
import { shallow } from 'enzyme';

import Routes from '../../../../components/structural/Routes';
import initialState from '../../../../redux/initial-state';

describe('<Routes />', () => {
  it('has routes', () => {
    const wrapper = shallow(<Routes
      user={initialState.user}
    />);

    const routes = wrapper.children();

    expect(routes.get(0).props.path).toBe('/');
    expect(routes.get(1).props.path).toBe('/sign-up');
    expect(routes.get(2).props.path).toBe('/feelings');
  });

  it('has 2 normal routes and 1 private route', () => {
    const wrapper = shallow(<Routes
      user={initialState.user}
    />);

    expect(wrapper.find('Route')).toHaveLength(2);
    expect(wrapper.find('PrivateRoute')).toHaveLength(1);
  });
});
