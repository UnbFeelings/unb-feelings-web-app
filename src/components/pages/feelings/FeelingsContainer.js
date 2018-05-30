import { connect } from 'react-redux';

import axios from '../../../configs/axios';
import { SET_DIAGNOSIS } from '../../../redux/types';
import { WebDataStates } from '../../../redux/initial-state';
import { fetchSubjects } from '../../../redux/fetchers';

import Feelings from './Feelings';

const mapStateToProps = ({ user, diagnosis, subjects }) => ({
  user, diagnosis, subjects,
});

const mapDispatchToProps = dispatch => ({
  async fetchDiagnosis(studentId) {
    const { status, data } = await axios.get(`/diagnosis/?target=student&target_id=${studentId}`);

    if (status === 200) {
      dispatch({
        type: SET_DIAGNOSIS,
        diagnosis: {
          state: WebDataStates.SUCCESS,
          data,
        },
      });
    }
  },

  requestSubjects() {
    fetchSubjects(dispatch);
  },
});

const FeelingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feelings);

export default FeelingsContainer;
