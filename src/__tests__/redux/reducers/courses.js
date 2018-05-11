import coursesReducer from '../../../redux/reducers/courses';

import initialState, { WebDataStates } from '../../../redux/initial-state';
import { SET_COURSES } from '../../../redux/types';

describe('coursesReducer', () => {
  it('return the courses initial state if an invalid type is given', () => {
    const newCourses = coursesReducer(initialState.courses, {
      type: 'invalid',
      courses: {
        state: WebDataStates.ERROR,
        data: {},
      },
    });

    expect(newCourses.state).toBe(initialState.courses.state);
    expect(newCourses.state).toBe(WebDataStates.NOT_REQUESTED);
  });


  it('set all courses data', () => {
    const newCourses = coursesReducer(initialState.courses, {
      type: SET_COURSES,
      courses: {
        state: WebDataStates.SUCCESS,
        data: [
          { id: 1, name: 'foo', campus: 1 },
          { id: 2, name: 'bar', campus: 7 },
        ],
      },
    });

    expect(newCourses.state).toBe(WebDataStates.SUCCESS);
    expect(newCourses.data.length).toBe(2);

    expect(newCourses.data[0].id).toBe(1);
    expect(newCourses.data[0].name).toBe('foo');
    expect(newCourses.data[0].campus).toBe(1);

    expect(newCourses.data[1].id).toBe(2);
    expect(newCourses.data[1].name).toBe('bar');
    expect(newCourses.data[1].campus).toBe(7);
  });
});
