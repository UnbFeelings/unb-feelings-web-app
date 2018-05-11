import subjectsReducer from '../../../redux/reducers/subjects';

import initialState, { WebDataStates } from '../../../redux/initial-state';
import { SET_SUBJECTS } from '../../../redux/types';

describe('subjectsReducer', () => {
  it('return the subjects initial state if an invalid type is given', () => {
    const newSubjects = subjectsReducer(initialState.subjects, {
      type: 'invalid',
      subjects: {
        state: WebDataStates.ERROR,
        data: {},
      },
    });

    expect(newSubjects.state).toBe(initialState.subjects.state);
    expect(newSubjects.state).toBe(WebDataStates.NOT_REQUESTED);
  });


  it('set all subjects data', () => {
    const newSubjects = subjectsReducer(initialState.subjects, {
      type: SET_SUBJECTS,
      subjects: {
        state: WebDataStates.SUCCESS,
        data: [
          { id: 1, name: 'Calculo 1', course: 3 },
          { id: 2, name: 'Processo Go Horse', course: 5 },
        ],
      },
    });

    expect(newSubjects.state).toBe(WebDataStates.SUCCESS);
    expect(newSubjects.data.length).toBe(2);

    expect(newSubjects.data[0].id).toBe(1);
    expect(newSubjects.data[0].name).toBe('Calculo 1');
    expect(newSubjects.data[0].course).toBe(3);

    expect(newSubjects.data[1].id).toBe(2);
    expect(newSubjects.data[1].name).toBe('Processo Go Horse');
    expect(newSubjects.data[1].course).toBe(5);
  });
});
