import { connect } from 'react-redux';
import Feelings from './Feelings';

import { setAuthToken } from '../../../configs/axios';
import { setUserStore } from '../../../configs/local-storage';
import { SET_USER } from '../../../redux/types';
import initialstate from '../../../redux/initial-state';
import { WebDataStates } from '../../../redux/initial-state';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  logOff() {
    setAuthToken("");
    setUserStore(); // no arg = user.data from initialstate
    dispatch({
      type: SET_USER,
      user: initialstate.user
    });
  }
});

const FeelingsContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Feelings);

export default FeelingsContainer;