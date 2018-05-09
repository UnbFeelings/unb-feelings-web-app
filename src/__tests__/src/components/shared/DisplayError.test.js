import React from 'react';

import { shallow } from 'enzyme';

import DisplayError from '../../../../components/shared/DisplayError';

describe('<DisplayError />', () => {
  it('renders a span with a message if the check pass', () => {
    const wrapper = shallow(
      <DisplayError
      check={true}
      message={() => "Hey this is the test message !"}
      />
    );

    const span = wrapper.find("span");

    expect(span.length).toBe(1);
    expect(span.text()).toBe("Hey this is the test message !");
  });

  it('wont render null if the chack fail', () => {
    const wrapper = shallow(
      <DisplayError
      check={false}
      message={() => "Hey this is the test message !"}
      />
    );

    const span = wrapper.find("span");

    expect(span.exists()).toBe(false);
    expect(wrapper.isEmptyRender()).toBe(true);
  });
});