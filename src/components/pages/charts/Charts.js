import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';


const styles = {
  root: {
    backgroundColor: '#ffffff',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
  },
  title: {
    backgroundColor: '#336799',
    marginLeft: 20,
    width: '20vw',
    marginTop: 10,
    marginBottom: 5,
    border: '1.5px solid white',
    borderRadius: 5,
    color: 'white',
    padding: 1.5,
  },
};

class Charts extends Component {
  componentDidMount() {
    const { user, fetchDiagnosis } = this.props;
    fetchDiagnosis(user.data.id);
  }

  render() {
    const { classes, user, diagnosis } = this.props;

    if (user.data.id === 0) {
      return (<Redirect to="/" />);
    }

    const goodBadDays = Object.keys(diagnosis.data).reduce((acc, curr) => {
      const day = diagnosis.data[curr];

      acc[curr] = day.reduce((dayfeeling, post) => {
        /* eslint-disable no-param-reassign */
        if (post.emotion === 'g') {
          dayfeeling.good += 1;
        } else {
          dayfeeling.bad += 1;
        }

        return dayfeeling;
      }, { good: 0, bad: 0 });

      return acc;
    }, {
      friday: { good: 0, bad: 0 },
      monday: { good: 0, bad: 0 },
      saturday: { good: 0, bad: 0 },
      sunday: { good: 0, bad: 0 },
      thursday: { good: 0, bad: 0 },
      tuesday: { good: 0, bad: 0 },
      wednesday: { good: 0, bad: 0 },
    });

    const data = {
      labels: [
        'friday',
        'monday',
        'saturday',
        'sunday',
        'thursday',
        'tuesday',
        'wednesday',
      ],
      datasets: [
        {
          label: 'Good',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: Object.keys(goodBadDays).map(day => goodBadDays[day].good),
        },

        {
          label: 'Bad',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(255,100,100,0.4)',
          borderColor: 'rgba(255,100,100,0.4)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(255,100,100,0.4)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(255,100,100,0.4)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: Object.keys(goodBadDays).map(day => goodBadDays[day].bad),
        },
      ],
    };
    return (
      <div>
        <div className={classes.root}>
          <Divider />
          <Line data={data} />
        </div>
      </div >
    );
  }
}

export default withStyles(styles)(Charts);
