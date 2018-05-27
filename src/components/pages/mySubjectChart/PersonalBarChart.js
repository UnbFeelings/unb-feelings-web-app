import React from 'react';
import { Bar } from 'react-chartjs-2';

class PersonalBarChart extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        labels: [],
        datasets: [],
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const map = new Map();

    for (let cont = 0; cont < nextProps.labels.length; cont += 1) {
      map.set(nextProps.labels[cont].id, { name: nextProps.labels[cont].name, g: 0, b: 0 });
    }

    for (let cont = 0; cont < nextProps.posts.length; cont += 1) {
      const aux = map.get(nextProps.posts[cont].subject);
      if (aux !== undefined) {
        if (nextProps.posts[cont].emotion === 'g') {
          aux.g += 1;
        } else if (nextProps.posts[cont].emotion === 'b') {
          aux.b += 1;
        }
      }
    }


    const tmp = {
      labels: [],
      datasets: [{
        label: 'Bom',
        backgroundColor: '#003459',
        borderColor: 'white',
        borderWidth: 0,
        data: [],
      }, {
        label: 'Ruim',
        backgroundColor: '#00171f',
        borderColor: 'white',
        borderWidth: 0,
        data: [],
      },
      ],
    };

    Array.from(map.values(), (value) => {
      tmp.labels.push(value.name);
      tmp.datasets[0].data.push(value.g);
      tmp.datasets[1].data.push(-1 * value.b);
      return null;
    });

    this.setState({ data: tmp });
  }

  render() {
    const optionsStyle = {
      scales: {
        yAxes: [{
          gridLines: {
            color: 'black',
          },
          ticks: {
            fontColor: 'white',
            fontSize: 18,
            stepSize: 1,
            beginAtZero: true,
          },
        }],
        xAxes: [{
          gridLines: {
            color: 'white',
          },
          ticks: {
            fontColor: 'white',
            fontSize: 14,
            stepSize: 1,
            beginAtZero: true,
          },
        }],
      },
      legend: {
        labels: {
          fontColor: 'white',
        },
      },
    };

    return (
      <div>
        <Bar data={this.state.data} options={optionsStyle} />
      </div>
    );
  }
}

export default PersonalBarChart;
