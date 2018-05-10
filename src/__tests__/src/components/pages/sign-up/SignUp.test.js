import React from 'react';

import { shallow } from 'enzyme';

import initialState, { WebDataStates } from '../../../../../redux/initial-state';
import SignUp from '../../../../../components/pages/sign-up/SignUp';

describe('SignUp />', () => {
  it('calls for requestCourses when mounted', () => {
    let requestCoursesIsCalled = false;

    const requestCourses = () => {
      requestCoursesIsCalled = true;
    };

    shallow(<SignUp
      courses={initialState.courses}
      user={initialState.user}
      requestCourses={requestCourses}
    />);

    expect(requestCoursesIsCalled).toBe(true);
  });

  it('handles its form state', () => {
    const wrapper = shallow(<SignUp
      courses={initialState.courses}
      user={initialState.user}
      requestCourses={() => false}
    />);

    expect(wrapper.state('email')).toBe('');
    expect(wrapper.state('password')).toBe('');
    expect(wrapper.state('course')).toBe('');

    const email = wrapper.find('input#userEmail');
    const password = wrapper.find('input#userPass');
    const course = wrapper.find('select#userCourse');

    email.simulate('change', {
      target: {
        value: 'test@email.com',
        name: 'email',
      },
    });

    password.simulate('change', {
      target: {
        value: 'testpass',
        name: 'password',
      },
    });

    course.simulate('change', {
      target: {
        value: 'ENGENHARIA',
        name: 'course',
      },
    });

    expect(wrapper.state('email')).toBe('test@email.com');
    expect(wrapper.state('password')).toBe('testpass');
    expect(wrapper.state('course')).toBe('ENGENHARIA');
  });
});
