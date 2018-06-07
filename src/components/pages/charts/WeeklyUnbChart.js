import React from 'react';
import axios from '../../../configs/axios';
import WeeklyBarChart from './WeeklyBarChart';

class WeeklyUnbChart extends React.Component {
  constructor() {
    super();
    this.state = { weekPostCount: [] };
  }

  componentDidMount() {
    this.fetchSubjectPostCount();
  }

  fetchSubjectPostCount() {
    // fetching post count for each subject
    axios.get('http://0.0.0.0:8000/api/diagnosis/').then((response) => {
      this.setState({ weekPostCount: response.data });
    });
  }

  render() {
    return (
      <div >
        <WeeklyBarChart weekCount={this.state.weekPostCount} />
      </div>
    );
  }
}

export default (WeeklyUnbChart);
