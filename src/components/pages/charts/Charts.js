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
    // feelingsDict: [
    //   {
    //     name: 'Sentimentos bons',
    //     data: {
    //       'Segunda': 1, 'Terça': 0, 'Quarta': 2, 'Terça': 4, 'Quinta': 1, 'Sexta': 6, 'Sexta': 4, 'Sábado': 5
    //     },
    //   },
    //   {
    //     name: 'Sentimentos ruins',
    //     data: {
    //       'Quinta': 3, 'Quarta': 1, 'Terça': 2, 'Sexta': 2,
    //     },
    //   },
    // ],
  }

  componentWillMount() {
    this.getFeelings();
  }

getFeelings = async () => {
  await axios.get('diagnosis').then((Response) => {
    this.setState({ feelingsDict: Response.data });
    const dictionary = this.state.feelingsDict;
    const newArray = null;
    Object.keys(dictionary).forEach((key) => {
      if (dictionary[key] === 'g') { //FAZER LÓGICA PARA CONTADOR DE EMOÇÕES NO DIA PARA ITERAR E REESTRUTURAR
        newArray.push({
          name: 'Sentimentos bons',
          data: {
            key,
            value: CONTADOR_DE_SENTIMENTOS_BONS,
          },
        });
      } else {
        newArray.push({
          name: 'Sentimentos ruins',
          data: {
            key,
            value: CONTADOR_DE_SENTIMENTOS_RUINS,
          },
        });
      }
      console.log(key, dictionary[key]);
    });
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
        <LineChart data={this.state.feelingsDict} />
      </div>
    </div>
  );
}
}

export default withStyles(styles)(Charts);
