import React from 'react';

import { shallow } from 'enzyme';

import initialState, { WebDataStates } from '../../../../../redux/initial-state';
import LoginForm from '../../../../../components/pages/home/LoginForm';

describe('<LoginForm />', () => {
  it('encapsulates email and password', () => {
    const wrapper = shallow(<LoginForm
      loginUser={() => false}
    />);

    expect(wrapper.state('email')).toBe('');
    expect(wrapper.state('password')).toBe('');

    const emailInput = wrapper.find('input#userEmail');
    expect(emailInput.exists()).toBe(true);

    const passwordInput = wrapper.find('input#userPass');
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
    const wrapper = shallow(<LoginForm
      loginUser={() => userIsLogged = true}
    />);

    const logButton = wrapper.find('button.btn.btn-light.btn-block');
    expect(logButton.exists()).toBe(true);

    expect(userIsLogged).toBe(false);
    logButton.simulate('click');
    expect(userIsLogged).toBe(true);
  });
});
