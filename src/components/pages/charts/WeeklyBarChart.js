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
  fetchBadCount(count) {
    let badCount = [0, 0, 0, 0, 0, 0, 0];

    try {
      badCount = [count.sunday.bad_count,
        count.monday.bad_count,
        count.tuesday.bad_count,
        count.wednesday.bad_count,
        count.thursday.bad_count,
        count.friday.bad_count,
        count.saturday.bad_count,
      ];
    } catch (e) {
      // console.log(e);
    }

    return (badCount);
  }

  fetchGoodCount(count) {
    let goodCount = [0, 0, 0, 0, 0, 0, 0];

    try {
      goodCount = [count.sunday.good_count,
        count.monday.good_count,
        count.tuesday.good_count,
        count.wednesday.good_count,
        count.thursday.good_count,
        count.friday.good_count,
        count.saturday.good_count,
      ];
    } catch (e) {
      // console.log(e);
    }

    return (goodCount);
  }

  render() {
    const { classes } = this.props;
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
                    data: this.fetchBadCount(this.props.weekCount),
                  },
                  {
                    label: 'Emoções boas',
                    backgroundColor: 'rgba(13, 217, 6, 0.74)',
                    borderColor: 'rgba(7, 118, 3, 0.74)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(107, 255, 131, 0.74)',
                    hoverBorderColor: 'rgba(16, 248, 55, 0.74)',
                    // replace this by a fetch or counting function call
                    data: this.fetchGoodCount(this.props.weekCount),
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
