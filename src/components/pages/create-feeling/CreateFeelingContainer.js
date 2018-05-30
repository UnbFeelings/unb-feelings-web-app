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

  async sendUserFeelings({
    subject, content, emotion, author,
  }) {
    try {
      await axios.post('/posts/', {
        subject,
        content,
        tag: [],
        emotion,
        author,
      });
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
