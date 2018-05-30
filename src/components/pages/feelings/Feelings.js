import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import { WebDataStates } from '../../../redux/initial-state';

import Emotion from './Emotion';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
  },
  textField: {
    width: '100%',
  },
  button: {
    margin: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    width: '100%',
  },
});

class Feelings extends React.Component {
  state = {
    subject: '',
    content: '',
    emotion: 'g',
  }

  componentDidMount() {
    const { NOT_REQUESTED } = WebDataStates;
    const subjectsState = this.props.subjects.state;

    if (subjectsState === NOT_REQUESTED) {
      this.props.requestSubjects();
    }
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmitFeeling = () => {
    const author = this.props.user.data.id;
    this.props.sendUserFeelings({ ...this.state, author });
  }

  filterSubjectsByCourse(courseId) {
    const { subjects } = this.props;

    return subjects.data.filter(subject => subject.course === courseId);
  }

  render() {
    const { user, classes } = this.props;
    const userSubjects = this.filterSubjectsByCourse(user.data.course.id);

    return (
      <div className={classes.root}>
        <Grid container spacing={8} alignItems="center" className={classes.container}>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="subject">Disciplina</InputLabel>
              <Select
                id="postSubject"
                value={this.state.subject}
                onChange={this.handleChange('subject')}
                inputProps={{
                  name: 'subject',
                  id: 'subject',
                }}
              >
                {userSubjects.map(sub => (
                  <MenuItem key={sub.id} value={sub.id}>
                    {sub.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="postContent"
              label="Descreva o que está sentindo a cerda de uma aula ou do seu dia"
              multiline
              rows="6"
              value={this.state.content}
              onChange={this.handleChange('content')}
              className={classes.textField}
              margin="normal"
            />
          </Grid>

          <Grid item xs={12}>
            <Emotion onChange={this.handleChange('emotion')} />
          </Grid>

          <Button
            variant="raised"
            color="secondary"
            onClick={this.handleSubmitFeeling}
          >
            Enviar
          </Button>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Feelings);
