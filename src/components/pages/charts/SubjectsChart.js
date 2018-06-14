import React from 'react';
import axios from '../../../configs/axios';
import SubjectDoughnutChart from './SubjectDoughnutChart';

class SubjectsChart extends React.Component {
  constructor() {
    super();
    this.state = { subjectPostCount: [] };
  }

  componentDidMount() {
    this.fetchSubjectPostCount();
  }

  fetchSubjectPostCount() {
    // fetching post count for each subject
    axios.get('http://0.0.0.0:8000/api/posts/subjects_posts_count/').then((response) => {
      this.setState({ subjectPostCount: response.data });
    });
  }

  render() {
    return (
      <div >
        <SubjectDoughnutChart counter={this.state.subjectPostCount} />
      </div>
    );
  }
}

export default (SubjectsChart);
