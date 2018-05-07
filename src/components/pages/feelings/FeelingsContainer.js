import { connect } from 'react-redux';
import Feelings from './Feelings';

import { setAuthToken } from '../../../configs/axios';
import { SET_USER } from '../../../redux/types';
import { WebDataStates } from '../../../redux/initial-state';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  logOff() {
    setAuthToken("");
    dispatch({
      type: SET_USER,
      user: {
        state: WebDataStates.NOT_REQUESTED,
        data: {}
      }
    });
  }
});

const FeelingsContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Feelings);

export default FeelingsContainer;