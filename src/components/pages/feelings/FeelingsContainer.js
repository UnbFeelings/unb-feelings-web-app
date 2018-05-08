import { connect } from 'react-redux';
import Feelings from './Feelings';

import axios from '../../../configs/axios';
import { SET_COURSES } from '../../../redux/types';
import { WebDataStates } from '../../../redux/initial-state';

const mapStateToProps = ({ user, courses }) => {
  return {
    user, courses
  }
}

const mapDispatchToProps = (dispatch) => ({
  async requestCourses() {
    const { data, status } = await axios.get("/courses/");

    if (status !== 200) {
      console.error("Could not fetch courses");
      console.log(data);

      dispatch({
        type: SET_COURSES,
        courses: {
          state: WebDataStates.ERROR,
          data: data
        }
      });
    }

    dispatch({
      type: SET_COURSES,
      courses: {
        state: WebDataStates.SUCCESS,
        data: data.results
      }
    });
  }
});

const FeelingsContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Feelings);

export default FeelingsContainer;