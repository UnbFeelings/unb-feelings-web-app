/**
 * WebData<T>:
 *  state: NOT_REQUESTED | LOADING | SUCCESS | ERROR
 *  data: T
 */
export const WebDataStates = {
  NOT_REQUESTED: 'NOT_REQUESTED',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

/**
 * Course:
 *  id: number
 *  name: string
 *  campus: number
 *
 * User:
 *  id: number
 *  email: string
 *  token: string
 *  course: Course
 *
 * Subject:
 *  id: number
 *  name: string
 *  course: number
 *
 * state = {
 *  user: WebData<User>,
 *  courses: WebData<Course[]>
 *  subjects: WebData<Subject[]>
 * }
 */
const initialState = {
  user: {
    state: WebDataStates.NOT_REQUESTED,
    data: {
      id: 0,
      email: '',
      token: '',
      course: {},
    },
  },

  courses: {
    state: WebDataStates.NOT_REQUESTED,
    data: [],
  },

  subjects: {
    state: WebDataStates.NOT_REQUESTED,
    data: [],
  },
};

export default initialState;
