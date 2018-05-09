import React from 'react';

import { shallow } from 'enzyme';

import initialState, { WebDataStates } from '../../../../../redux/initial-state';
import Home from '../../../../../components/pages/home/Home';

describe('<Home />', () => {
  const initialUser = initialState.user;

  it("redirects user to /feelings if user is already logged", () => {
    const wrapper = shallow(
      <Home
        user={{...initialUser, state: WebDataStates.SUCCESS}}
        loginUser={() => false}
      />
    );

    const redirect = wrapper.find("Redirect");

    expect(redirect.exists()).toBe(true);

    expect(redirect.prop("to")).toBe("/feelings");
    expect(redirect.prop("from")).toBe("/");
  });

  it("display the UnbFeelings logo", () => {
    const wrapper = shallow(
      <Home
        user={{...initialUser}}
        loginUser={() => false}
      />
    );

    const logo = wrapper.find("UnbFeelingsLogo");
    expect(logo.exists()).toBe(true);
  });

  it("has a LoginForm", () => {
    const wrapper = shallow(
      <Home
        user={{...initialUser}}
        loginUser={() => false}
      />
    );

    const loginForm = wrapper.find("LoginForm");
    expect(loginForm.exists()).toBe(true);
  });

  it("links to /sign-up", () => {
    const wrapper = shallow(
      <Home
        user={{...initialUser}}
        loginUser={() => false}
      />
    );

    const link = wrapper.find("Link.btn.btn-outline-light.btn-block");
    expect(link.exists()).toBe(true);

    expect(link.prop("to")).toBe("/sign-up");
    expect(link.children().text()).toBe("REGISTRAR");
  });
});