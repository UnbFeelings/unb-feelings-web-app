import React from 'react';

import { shallow } from 'enzyme';

import initialState from '../../../../../redux/initial-state';
import Feelings from '../../../../../components/pages/feelings/Feelings';

describe('<Feelings />', () => {
  it('calls for requestSubjects when mounted', () => {
    let requestSubjectsCalled = false;

    const requestSubjects = () => {
      requestSubjectsCalled = true;
    };

    shallow(<Feelings
      subjects={initialState.subjects}
      user={initialState.user}
      requestSubjects={requestSubjects}
    />).dive();

    expect(requestSubjectsCalled).toBe(true);
  });

  it('handles its form state', () => {
    const wrapper = shallow(<Feelings
      subjects={initialState.subjects}
      user={initialState.user}
      requestSubjects={() => false}
    />).dive();

    expect(wrapper.state('subject')).toBe('');
    expect(wrapper.state('content')).toBe('');
    expect(wrapper.state('emotion')).toBe('g');

    const postSubject = wrapper.find('#postSubject');
    const postContent = wrapper.find('#postContent');

    postSubject.simulate('change', {
      target: {
        value: 'My subject',
        name: 'subject',
      },
    });

    postContent.simulate('change', {
      target: {
        value: 'My content',
        name: 'content',
      },
    });

    expect(wrapper.state('subject')).toBe('My subject');
    expect(wrapper.state('content')).toBe('My content');
  });
});
