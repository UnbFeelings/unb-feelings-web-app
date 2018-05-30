import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import { WebDataStates } from '../../../redux/initial-state';

import DiagnosisTabs from './DiagnosisTabs';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
  },
  button: {
    margin: theme.spacing.unit,
  },
  fabButton: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

class Feelings extends React.Component {
  state = {
  }

  componentDidMount() {
    const { user } = this.props;
    this.props.fetchDiagnosis(user.data.id);
    this.props.requestSubjects();
  }

  filterSubjectsByCourse(courseId) {
    const { subjects } = this.props;

    return subjects.data.filter(subject => subject.course === courseId);
  }

  render() {
    const { user, diagnosis, classes } = this.props;

    if (user.state !== WebDataStates.SUCCESS) {
      return (<Redirect to="/" />);
    }

    const userSubjects = this.filterSubjectsByCourse(user.data.course.id);

    return (
      <div className={classes.root}>
        <Grid container spacing={8} alignItems="center" className={classes.container}>
          <Grid item xs={12}>
            <DiagnosisTabs diagnosis={diagnosis} subjects={userSubjects} />
          </Grid>

          <Link to="/create-feelings" style={{ textDecoration: 'none' }}>
            <Button
              variant="fab"
              color="primary"
              aria-label="add"
              className={classes.fabButton}
            >
              <AddIcon />
            </Button>
          </Link>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Feelings);
