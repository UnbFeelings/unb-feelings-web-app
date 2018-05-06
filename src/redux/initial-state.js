/**
 * WebData<T>:
 *  state: NOT_REQUESTED | LOADING | SUCCESS | ERROR
 *  data: T
 */
export const WebDataStates = {
  NOT_REQUESTED: "NOT_REQUESTED",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR"
}

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
 * state = {
 *  user: WebData<User[]>,
 *  courses: WebData<Course[]>
 * }
 */
const initialState = {
  user: {
    state: WebDataStates.NOT_REQUESTED,
    data: {}
  },

  courses: {
    state: WebDataStates.NOT_REQUESTED,
    data: []
  }
}

export default initialState;