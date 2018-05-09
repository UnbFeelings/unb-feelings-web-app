import React from 'react';

import { shallow } from 'enzyme';

import TopMenu from '../../../../components/shared/TopMenu';

describe('<TopMenu />', () => {
  it('calls logUserOff when button "Sair" is clicked', () => {
    let userIsLogged = true;
    const logUserOff = () => {userIsLogged = false};

    const wrapper = shallow(
      <TopMenu
        logUserOff={logUserOff}
      />
    );

    const exitButton = wrapper.find("button.btn.btn-primary");

    expect(exitButton.length).toBe(1);

    // it sets userIsLogged to false when clicked
    exitButton.simulate("click");
    expect(userIsLogged).toBe(false);
  });

  it("uses a toggle state on the menu", () => {
    const wrapper = shallow(
      <TopMenu
        logUserOff={() => false}
      />
    );

    // wrapper has a isOpen state
    expect(wrapper.state("isOpen")).toBe(false);

    const toggler = wrapper.find("NavbarToggler");
    expect(toggler.exists()).toBe(true);

    // toggle on clicked toggles TopMenu isOpen state
    toggler.simulate("click");
    expect(wrapper.state("isOpen")).toBe(true);

    toggler.simulate("click");
    expect(wrapper.state("isOpen")).toBe(false);
  });
});