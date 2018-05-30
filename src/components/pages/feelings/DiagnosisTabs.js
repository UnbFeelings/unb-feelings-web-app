import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import PostListItem from './PostListItem';

const TabContainer = props => (
  <Typography component="div" style={{ padding: 8 * 3 }}>
    {props.children}
  </Typography>
);

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class DiagnosisTabs extends React.Component {
  state = {
    value: 'monday',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, diagnosis, subjects } = this.props;
    const { value } = this.state;

    const days = Object.keys(diagnosis.data).reduce((acc, curr) => {
      const dayDiagnosis = diagnosis.data[curr];
      const posts = dayDiagnosis.map(day => {
        const subject = subjects.find(sub => sub.id === day.subject_id);

        return (<PostListItem key={day.id} subject={subject.name} emotion={day.emotion} />);
      });

      acc[curr] = posts;

      return acc;
    }, {});

    return (
      <div className={classes.root}>
        <Paper>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab value="monday" label="Segunda-feira" />
            <Tab value="tuesday" label="Terça-feira" />
            <Tab value="wednesday" label="Quarta-feira" />
            <Tab value="thursday" label="Quinta-feira" />
            <Tab value="friday" label="Sexta-feira" />
            <Tab value="saturday" label="Sábado" />
            <Tab value="sunday" label="Domingo" />
          </Tabs>
        </Paper>

        <TabContainer>
          {days[value]}
        </TabContainer>
      </div>
    );
  }
}

export default withStyles(styles)(DiagnosisTabs);
