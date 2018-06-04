import React from 'react';

import { shallow } from 'enzyme';

import initialState, { WebDataStates } from '../../../../../redux/initial-state';
import CreateFeeling from '../../../../../components/pages/create-feeling/CreateFeeling';

describe('<CreateFeeling />', () => {
  it('redirects user if he/she is not logged', () => {
    const wrapper = shallow(<CreateFeeling
      subjects={initialState.subjects}
      user={initialState.user}
      requestSubjects={() => false}
    />).dive();

    const redirect = wrapper.find('Redirect');
    const postSubject = wrapper.find('#postSubject');

    expect(redirect.exists()).toBe(true);
    expect(postSubject.exists()).toBe(false);
  });

  it('does not redirects user if he/she is logged', () => {
    const user = { ...initialState.user };
    user.state = WebDataStates.SUCCESS;


    const wrapper = shallow(<CreateFeeling
      subjects={initialState.subjects}
      user={user}
      requestSubjects={() => false}
    />).dive();

    const redirect = wrapper.find('Redirect');
    const postSubject = wrapper.find('#postSubject');

    expect(redirect.exists()).toBe(false);
    expect(postSubject.exists()).toBe(true);
  });

  it('calls for requestSubjects when mounted', () => {
    let requestSubjectsCalled = false;

    const requestSubjects = () => {
      requestSubjectsCalled = true;
    };

    shallow(<CreateFeeling
      subjects={initialState.subjects}
      user={initialState.user}
      requestSubjects={requestSubjects}
    />).dive();

    expect(requestSubjectsCalled).toBe(true);
  });

  it('handles its form state', () => {
    const user = { ...initialState.user };
    user.state = WebDataStates.SUCCESS;

    const wrapper = shallow(<CreateFeeling
      subjects={initialState.subjects}
      user={user}
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
