import React from 'react';

import { shallow } from 'enzyme';

import UnbFeelingsLogo from '../../../../components/shared/UnbFeelingsLogo';

describe('<UnbFeelingsLogo />', () => {
  it('renders an image', () => {
    const wrapper = shallow(<UnbFeelingsLogo />);

    expect(wrapper.find('img').length).toBe(1);
  });
});
