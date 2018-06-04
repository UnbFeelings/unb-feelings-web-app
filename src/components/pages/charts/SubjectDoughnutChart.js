import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Doughnut} from 'react-chartjs-2';

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


  title: {
    color: 'grey',
    paddingTop: '5%',
    marginLeft: '5%',
  },

  subjectName: {
    fontSize: 25,
    marginTop: '30px',
    marginLeft: '10%',
    color: 'grey',
  },
});


class SubjectDoughnutChart extends React.Component{
  displayName: 'DoughnutExample'

  renderChart(subject){
    const { classes } = this.props;
    return (
      <div>
        <h2 className={classes.subjectName}>{subject.subject_name}</h2>
        <Doughnut data=
          {{
            labels: [
          		'Emoções ruins',
          		'Emoções boas'
            ],
            datasets: [{
          		data: [subject.bad_count, subject.good_count],
          		backgroundColor: [
          		'#FF6384',
          		'#FFCE56'
          		],
          		hoverBackgroundColor: [
          		'#FF6384',
          		'#FFCE56'
          		]
            }]
          }}
        />
      </div>
    )
  }

  render() {
    const { classes } = this.props;
    console.log(this.props.counter)
    return (
      <div className={classes.root}>
        <h2 className={classes.title}>Gráficos de Posts de cada disciplina: </h2>
        {

          this.props.counter.map(subject => this.renderChart(subject) )  }
      </div>
    );
  }

}

export default withStyles(styles)(SubjectDoughnutChart)
