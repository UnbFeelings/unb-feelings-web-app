import { connect } from 'react-redux';

import axios from '../../../configs/axios';
import { SET_COURSES, SET_USER } from '../../../redux/types';
import { WebDataStates } from '../../../redux/initial-state';

import SignUp from './SignUp';

const mapStateToProps = ({ courses, user }) => {
  return {
    courses,
    user
  }
}

const mapDispatchToProps = (dispatch) => ({
  async requestCourses() {
    const { data, status } = await axios.get("/courses/");

    if (status !== 200) {
      console.error("Could not fetch courses");
      console.log(data);
      return;
    }

    dispatch({
      type: SET_COURSES,
      courses: {
        state: WebDataStates.SUCCESS,
        data: data.results
      }
    });
  },

  async registerUser({ email, password, course }) {
    try {
      const { status, data } = await axios.post("/users/", { email, password, course });

      if (status === 201) { // created
        const auth = await axios.post("/token-auth/", { email, password });

        dispatch({
          type: SET_USER,
          user: {
            state: WebDataStates.SUCCESS,
            data: {...data, token: auth.data.token}
          }
        });
      }
    } catch (err) {
      dispatch({
        type: SET_USER,
        user: {
          state: WebDataStates.ERROR,
          data: err.response.data
        }
      });
    }
  }
});


const SignUpContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SignUp);

export default SignUpContainer;