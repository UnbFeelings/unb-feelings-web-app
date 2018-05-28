import { connect } from 'react-redux';
import Feelings from './Feelings';

import axios from '../../../configs/axios';
import { SET_SUBJECTS } from '../../../redux/types';
import { WebDataStates } from '../../../redux/initial-state';

const mapStateToProps = ({ user, subjects }) => ({
  user, subjects,
});

const mapDispatchToProps = dispatch => ({
  async requestSubjects() {
    const { data, status } = await axios.get('/subjects/');

    if (status === 200) {
      dispatch({
        type: SET_SUBJECTS,
        subjects: {
          state: WebDataStates.SUCCESS,
          data: data.results,
        },
      });
    } else {
      // console.error('Could not fetch subjects');
      // console.log(data);

      dispatch({
        type: SET_SUBJECTS,
        subjects: {
          state: WebDataStates.ERROR,
          data,
        },
      });
    }
  },

  async sendUserFeelings({
    subject, content, tag, emotion, author,
  }) {
    try {
      await axios.post('/posts/', {
        subject,
        content,
        tag: [tag],
        emotion: [emotion],
        author,
      });
    } catch (err) {
      // console.log('ERROR');
      // console.log(err.response.data);
    }
  },
});

const FeelingsContainer = connect(mapStateToProps, mapDispatchToProps)(Feelings);

export default FeelingsContainer;
