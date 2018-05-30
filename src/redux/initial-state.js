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
 * Post:
 *  id: number
 *  author_id: number
 *  subject_id: number
 *  emotion: string
 *  created_at: string
 *
 * Diagnosis:
 *  monday: Post[]
 *  tuesday: Post[]
 *  wednesday: Post[]
 *  thursday: Post[]
 *  friday: Post[]
 *  saturday: Post[]
 *  sunday: Post[]
 *
 * state = {
 *  user: WebData<User>,
 *  courses: WebData<Course[]>
 *  subjects: WebData<Subject[]>
 *  diagnosis: WebData<Diagnosis>
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

  diagnosis: {
    state: WebDataStates.NOT_REQUESTED,
    data: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
    },
  },
};

export default initialState;
