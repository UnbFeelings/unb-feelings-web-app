import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Bar} from 'react-chartjs-2';
import SubjectBarChart from './SubjectBarChart.js'
import axios from '../../../configs/axios';

class SubjectsChart extends React.Component {

  constructor() {
    super();
    this.state = { subjectPostCount: [] };
  }

  async componentDidMount() {
    this.fetchSubjectPostCount();
  }

  async fetchSubjectPostCount() {
    // fetching post count for each subject
    axios.get('http://0.0.0.0:8000/api/posts/subjects_posts_count/').then((response) => {
      this.setState({ subjectPostCount: response.data });
    });
  }

  render() {
    console.log(this.state.subjectPostCount)
    const { classes } = this.props;
    return (
      <div >
        <SubjectBarChart/>
      </div>
    );
  }
}

export default (SubjectsChart);
