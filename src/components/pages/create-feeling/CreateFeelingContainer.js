import { connect } from 'react-redux';
import CreateFeeling from './CreateFeeling';

import axios from '../../../configs/axios';
import { fetchSubjects } from '../../../redux/fetchers';

const mapStateToProps = ({ user, subjects }) => ({
  user, subjects,
});

const mapDispatchToProps = dispatch => ({
  requestSubjects() {
    fetchSubjects(dispatch);
  },

  async createUserFeeling({
    subject, content, emotion, author,
  }, successCallback) {
    try {
      const { status, data } = await axios.post('/posts/', {
        subject,
        content,
        tag: [],
        emotion,
        author,
      });

      if (status === 201) { // created
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
