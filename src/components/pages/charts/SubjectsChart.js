import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],

  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgb(253, 16, 16)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgb(255, 91, 91)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'My second dataset',
      backgroundColor: 'rgba(13, 217, 6, 0.74)',
      borderColor: 'rgba(7, 118, 3, 0.74)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(107, 255, 131, 0.74)',
      hoverBorderColor: 'rgba(16, 248, 55, 0.74)',
      data: [65, 59, 80, 81, 56, 55, 40]
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

class SubjectsChart extends React.Component {
  state = {
    posts: [],
    open: false,
  };

  async componentWillMount() {
    this.fetchPosts();
    this.fetchSubjects();
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      selected_subject: event.target.value,
    });
    this.fetchPosts();
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  async fetchPosts() {
    // fetching posts
    // console.log("Fetching posts")
    // console.log(this.state.selected_subject)
    try {
      const response = await fetch(`http://localhost:8000/api/posts/subject/${this.state.selected_subject}/`);
      const subjPosts = await response.json();
      this.setState({
        subjPosts,
      });
      // console.log(this.state.subjPosts)
    } catch (e) {
      // console.log(e);
    }
  }

  async fetchSubjects() {
    // fetching subjects for selection
    try {
      const response = await fetch('http://localhost:8000/api/subjects/');
      const subjectList = await response.json();
      this.setState({
        subjectList,
      });
      // console.log(this.state.subjectList)
    } catch (e) {
      // console.log(e);
    }
  }



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

export default withStyles(styles)(SubjectsChart);
