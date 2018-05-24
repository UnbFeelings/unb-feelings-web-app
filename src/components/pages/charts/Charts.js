import React, { Component } from 'react';
import { LineChart } from 'react-chartkick';
import Chart from 'chart.js';
import axios from '../../../configs/axios';

class Charts extends Component {
  state = {
    feelingsArray: [
      {
        name: 'Sentimentos bons',
        data: {
          'Segunda': 1, 'Terça': 0, 'Quarta': 2, 'Terça': 4, 'Quinta': 1, 'Sexta': 6, 'Sexta': 4, 'Sábado': 5
        },
      },
      {
        name: 'Sentimentos ruins',
        data: {
          'Quinta': 3, 'Quarta': 1, 'Terça': 2, 'Sexta': 2, 
        },
      },
    ],
  }

componentWillMount() {
  axios.get('endpoint').then(Response => { 
    this.setState({ feelingsArray: Response.data });
   }).catch(Error => {
     throw Error;
   })
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
