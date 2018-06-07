import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Bar } from 'react-chartjs-2';


const styles = theme => ({
  root: {
    maxWidth: '800px',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },

  chart: {
    padding: '5%',
  },

  title: {
    color: 'grey',
  },
});

class WeeklyBarChart extends React.Component {
  // fetchBadCount(){
  //   // this should not exist, the counter should be implemented in the backend
  //
  //   var badCount = [0, 0, 0, 0, 0, 0, 0]
  //   // the condition below makes sure that this function only tries to
  //   // access a postion on the array if it is already defined
  //   if (this.props.weekCount.sunday !== undefined){
  //
  //     for (let aux = 0; aux < this.props.weekCount.sunday.length; aux ++){
  //       if (this.props.weekCount.sunday.emotion === 'b'){
  //         badCount[0]  = badCount[0] + 1;
  //       }
  //     }
  //
  //   }
  //   console.log(badCount)
  //   return (badCount)
  // }

  render() {
    const { classes } = this.props;
    // console.log(this.props.weekCount)
    // this.fetchBadCount()
    return (
      <div className={classes.root}>
        <div className={classes.chart}>
          <h2 className={classes.title}>Gráfico semanal de posts</h2>
          <Bar
            width={100}
            height={50}
            options={{
              maintainAspectRatio: true,
            }}
            data={
              {
                labels: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
                datasets: [
                  {
                    label: 'Emoções ruins',
                    backgroundColor: 'rgb(253, 16, 16)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgb(255, 91, 91)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    // replace this by a fetch or counting function call
                    data: [1, 2, 3, 4, 5, 6, 7],
                  },
                  {
                    label: 'Emoções boas',
                    backgroundColor: 'rgba(13, 217, 6, 0.74)',
                    borderColor: 'rgba(7, 118, 3, 0.74)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(107, 255, 131, 0.74)',
                    hoverBorderColor: 'rgba(16, 248, 55, 0.74)',
                    // replace this by a fetch or counting function call
                    data: [1, 2, 3, 4, 5, 6, 7],
                  },
                ],
              }
            }
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(WeeklyBarChart);
