import React from 'react';

import { shallow } from 'enzyme';

import initialState, { WebDataStates } from '../../../../../redux/initial-state';
import Home from '../../../../../components/pages/home/Home';

describe('<Home />', () => {
  const initialUser = initialState.user;

  it('redirects user to /feelings if user is already logged', () => {
    const wrapper = shallow(<Home
      user={{ ...initialUser, state: WebDataStates.SUCCESS }}
      loginUser={() => false}
    />).dive();

    const redirect = wrapper.find('Redirect');

    expect(redirect.exists()).toBe(true);

    expect(redirect.prop('to')).toBe('/feelings');
    expect(redirect.prop('from')).toBe('/');
  });

  it('links to /sign-up', () => {
    const wrapper = shallow(<Home
      user={{ ...initialUser }}
      loginUser={() => false}
    />).dive();

    const link = wrapper.find('#sign-up');
    expect(link.exists()).toBe(true);

    expect(link.prop('to')).toBe('/sign-up');
  });

  it('encapsulates email and password', () => {
    const wrapper = shallow(<Home
      user={{ ...initialUser }}
      loginUser={() => false}
    />).dive();

    expect(wrapper.state('email')).toBe('');
    expect(wrapper.state('password')).toBe('');

    const emailInput = wrapper.find('#email');
    expect(emailInput.exists()).toBe(true);

    const passwordInput = wrapper.find('#password');
    expect(passwordInput.exists()).toBe(true);

    emailInput.simulate('change', {
      target: {
        value: 'test@email.com',
        name: 'email',
      },
    });

    passwordInput.simulate('change', {
      target: {
        value: 'testpass',
        name: 'password',
      },
    });

    expect(wrapper.state('email')).toBe('test@email.com');
    expect(wrapper.state('password')).toBe('testpass');
  });

  it('login user on log button click', () => {
    let userIsLogged = false;

    const wrapper = shallow(<Home
      user={{ ...initialUser }}
      loginUser={() => {
        userIsLogged = true;
      }}
    />).dive();

    const logButton = wrapper.find('#login-user');
    expect(logButton.exists()).toBe(true);

    expect(userIsLogged).toBe(false);
    logButton.simulate('click');
    expect(userIsLogged).toBe(true);
  });
});
