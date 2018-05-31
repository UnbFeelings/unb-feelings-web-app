import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import { WebDataStates } from '../../../redux/initial-state';

import PostListItem from '../../shared/PostListItem';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class DiagnosisTabs extends React.Component {
  static mapSubjects(subjects) {
    /**
     * Given a list of subjects(with id and name), it returns a map of subjects
     * where a given id return the subject name
     */
    const subjectsMap = new Map();

    subjects.forEach(sub => {
      subjectsMap.set(sub.id, sub.name);
    });

    return subjectsMap;
  }

  static getDaysFromDiagnosis(diagnosis, subjects) {
    /**
     * Given a weekly diagnosis it retuns an object with each day and
     * each day has a List of PostListItem
     */
    const subjectsMap = DiagnosisTabs.mapSubjects(subjects);
    const weeklyDays = Object.keys(diagnosis.data);

    subjects.forEach(sub => subjectsMap.set(sub.id, sub.name));

    return weeklyDays.reduce((acc, curr) => { // curr -> a day of the week
      const dayPosts = diagnosis.data[curr];

      const postsJSX = dayPosts.map(post => {
        const subjectName = subjectsMap.get(post.subject_id);

        return (<PostListItem key={post.id} subject={subjectName} emotion={post.emotion} />);
      });

      // For each weekly day add a List of PostListItem
      acc[curr] = postsJSX;

      return acc;
    }, {});
  }

  static getDerivedStateFromProps(props) {
    const { diagnosis, subjects } = props;

    if (diagnosis.state === WebDataStates.SUCCESS) {
      const days = DiagnosisTabs.getDaysFromDiagnosis(diagnosis, subjects);
      return { days };
    }

    return null;
  }

  state = {
    value: 'monday',
    days: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
    },
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Paper>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab value="monday" label="Segunda" />
            <Tab value="tuesday" label="Terça" />
            <Tab value="wednesday" label="Quarta" />
            <Tab value="thursday" label="Quinta" />
            <Tab value="friday" label="Sexta" />
            <Tab value="saturday" label="Sábado" />
            <Tab value="sunday" label="Domingo" />
          </Tabs>
        </Paper>

        {this.state.days[value]}
      </div>
    );
  }
}

export default withStyles(styles)(DiagnosisTabs);
