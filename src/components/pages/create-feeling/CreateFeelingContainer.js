import { connect } from 'react-redux';
import CreateFeeling from './CreateFeeling';

import axios from '../../../configs/axios';
import { fetchSubjects } from '../../../redux/fetchers';
import { SET_DIAGNOSIS } from '../../../redux/types';
import { WebDataStates } from '../../../redux/initial-state';

const mapStateToProps = ({ user, subjects }) => ({
  user, subjects,
});

const mapDispatchToProps = dispatch => ({
  requestSubjects() {
    fetchSubjects(dispatch);
  },

  async createUserFeeling({
    subject, content, emotion, author, tags,
  }, successCallback) {
    try {
      const { status, data } = await axios.post('/posts/', {
        subject,
        content,
        tag: [],
        tags,
        emotion,
        author,
      });

      if (status === 201) { // created
        // After creating a new Post, when the user go back to feelings page
        // reload the diagnosis
        dispatch({
          type: SET_DIAGNOSIS,
          diagnosis: {
            state: WebDataStates.NOT_REQUESTED,
          },
        });

        successCallback(data);
      }
    } catch (err) {
      // console.log('ERROR');
      // console.log(err.response.data);
    }
  },
});

const CreateFeelingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateFeeling);

export default CreateFeelingContainer;
