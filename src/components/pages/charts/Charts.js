import React, { Component } from 'react';
import { LineChart } from 'react-chartkick';
import Chart from 'chart.js';

class Charts extends Component {
  state = {
    feelingsArray: [
      {
        name: 'Sentimentos bons',
        data: {
          '2017-01-01': 1, '2017-01-02': 4, '2017-01-03': 2, '2017-01-04': 0, '2017-01-05': 1, '2017-01-06': 6, '2017-01-07': 4,
        },
      },
      {
        name: 'Sentimentos ruins',
        data: {
          '2017-01-01': 0.5, '2017-01-02': 3, '2017-01-03': 1, '2017-01-04': 2, '2017-01-05': 2, '2017-01-06': 2, '2017-01-07': 0,
        },
      },
    ],
  }

  render() {
    return (
      <div style={{ backgroundColor: '#ffffff', margin: 10 }}>
        <LineChart data={this.state.feelingsArray} />
      </div>
    );
  }
}

export default Charts;
