import { connect } from 'react-redux';

import axios from '../../../configs/axios';
import { SET_DIAGNOSIS } from '../../../redux/types';
import { WebDataStates } from '../../../redux/initial-state';

import Feelings from './Feelings';

const mapStateToProps = ({ user, diagnosis }) => ({
  user, diagnosis,
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
});

const FeelingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feelings);

export default FeelingsContainer;
