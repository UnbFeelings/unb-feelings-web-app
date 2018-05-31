import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],

  datasets: [
    {
      label: 'Emoções ruins',
      backgroundColor: 'rgb(253, 16, 16)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgb(255, 91, 91)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [2, 3, 4, 1, 0, 2, 1]
    },
    {
      label: 'Emoções boas',
      backgroundColor: 'rgba(13, 217, 6, 0.74)',
      borderColor: 'rgba(7, 118, 3, 0.74)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(107, 255, 131, 0.74)',
      hoverBorderColor: 'rgba(16, 248, 55, 0.74)',
      data: [1, 2, 7, 1, 2, 3, 1]
    }
  ]
};

const styles = theme => ({
  root: {
    maxWidth: '800px',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: '10px',
    marginLeft: '20%',
    marginRight: '20%',
    borderRadius: 10,
  },

  chart: {
    padding: '5%',
  },

  title: {
    color: 'grey',
  },
});

class SubjectBarChart extends React.Component {

  render() {
    const { classes } = this.props;
    return (

      <div className={classes.root}>
        <div className={classes.chart}>
          <h2 className={classes.title}>Gráfico de Posts por disciplina</h2>
          <Bar
            data={data}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SubjectBarChart);
