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
    expect(routes.get(2).props.path).toBe('/university-posts');
    expect(routes.get(3).props.path).toBe('/subjects-chart');
    expect(routes.get(4).props.path).toBe('/my-subject-chart');
    expect(routes.get(5).props.path).toBe('/feelings');
    expect(routes.get(6).props.path).toBe('/create-feelings');
    expect(routes.get(7).props.path).toBe('/feelings-timeline');
    expect(routes.get(8).props.path).toBe('/subject-timeline');
  });

  it('has 9 routes', () => {
    const wrapper = shallow(<Routes
      user={initialState.user}
    />);

    expect(wrapper.find('Route')).toHaveLength(9);
  });
});
