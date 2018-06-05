import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


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
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class CreateFeeling extends React.Component {
  state = {
    subject: '',
    content: '',
    emotion: 'g',
    displayFeelingCreatedMessage: false,
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
    const { subject, content, emotion } = this.state;

    const successCallback = () => {
      // After a successful post creation, display a message to the user
      // and clear the form so the user can create a new post
      this.setState({
        displayFeelingCreatedMessage: true,
        subject: '',
        content: '',
        emotion: 'g',
      });
    };

    this.props.createUserFeeling({
      subject, content, emotion, author,
    }, successCallback);
  }

  handleCloseSnackbar = () => {
    // Hide the successful post creation message
    this.setState({ displayFeelingCreatedMessage: false });
  }

  filterSubjectsByCourse(courseId) {
    // Given the user couse id, it take all subjects and returns only the
    // ones that user course belongs to
    const { subjects } = this.props;

    return subjects.data.filter(subject => subject.course === courseId);
  }

  render() {
    const { user, classes } = this.props;

    if (user.state !== WebDataStates.SUCCESS) {
      return (<Redirect to="/" />);
    }

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
            <Emotion onChange={this.handleChange('emotion')} emotion={this.state.emotion} />
          </Grid>

          <Button
            variant="raised"
            color="secondary"
            className={classes.button}
            onClick={this.handleSubmitFeeling}
          >
            Enviar
          </Button>

          <Link to="/feelings" style={{ textDecoration: 'none' }}>
            <Button variant="raised" className={classes.button}>
              Cancelar
            </Button>
          </Link>
        </Grid>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.displayFeelingCreatedMessage}
          autoHideDuration={6000}
          onClose={this.handleCloseSnackbar}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Feeling criado com sucesso</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleCloseSnackbar}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

export default withStyles(styles)(CreateFeeling);
