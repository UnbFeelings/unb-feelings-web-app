import React, { Component } from 'react';
import { LineChart } from 'react-chartkick';
import Chart from 'chart.js';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

import axios from '../../../configs/axios';

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
  state = {
    feelingsDict: {},
    feelingsArray: [],
  }

  componentWillMount() {
    this.getFeelings();
  }

getFeelings = async () => {
  await axios.get('diagnosis').then((Response) => {
    this.setState({ feelingsDict: Response.data });
    const dictionary = this.state.feelingsDict;
    let newArray = [];
    Object.keys(dictionary).forEach((key) => {
      if (dictionary[key].length) { //FAZER LÓGICA PARA CONTADOR DE EMOÇÕES NO DIA PARA ITERAR E REESTRUTURAR
        const array = dictionary[key]
        let goodFeelings = 0
        var badFeelings = 0
        for (let i = 0; i < dictionary[key].length; i++) {
          if (array[i].emotion === 'g') {
            goodFeelings += 1
          } else {
            badFeelings += 1
          }
        }
        newArray.push({
          name: 'Sentimentos bons',
          data: {
            [key]: goodFeelings,
          },
        });
      } else {
        newArray.push({
          name: 'Sentimentos ruins',
          data: {
            [key]: badFeelings,
          },
        });
      }
      // console.log(key, dictionary[key]);
    });
    this.setState({ feelingsArray: newArray }) 
    console.log(this.state.feelingsArray)
  }).catch((Error) => {
    throw Error;
  });
}

render() {
  const { classes } = this.props;
  return (
    <div>
      <div className={classes.title}>
        <Typography variant="headline" align="center" component="h3" color="inherit">
          Gráfico de Sentimentos
        </Typography>
      </div>
      <div className={classes.root}>
        <Divider />
        <LineChart data={this.state.feelingsArray} />
      </div>
    </div>
  );
}
}

export default withStyles(styles)(Charts);
