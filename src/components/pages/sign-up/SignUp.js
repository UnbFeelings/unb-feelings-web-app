import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import { WebDataStates } from '../../../redux/initial-state';
import DisplayError from '../../shared/DisplayError';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    height: '99vh',
    backgroundColor: '#4d5ebb',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 400,
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

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    course: '',
  }

  componentDidMount() {
    const { NOT_REQUESTED } = WebDataStates;
    const coursesState = this.props.courses.state;

    if (coursesState === NOT_REQUESTED) {
      this.props.requestCourses();
    }
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleUserRegister = () => {
    this.props.registerUser(this.state);
  }

  render() {
    const { ERROR, SUCCESS } = WebDataStates;
    const { courses, user, classes } = this.props;

    if (user.state === SUCCESS) {
      return (<Redirect to="/feelings" from="/sign-up" />);
    }

    return (
      <div className={classes.root}>
        <Grid container spacing={8} alignItems="center" className={classes.container}>
          <Grid item sm={4} xs={12} />

          <Grid item sm={4} xs={12}>
            <Typography variant="display1" align="center" style={{ color: '#fff' }} gutterBottom>
              Cadastro
            </Typography>

            <Paper className={classes.paper}>
              <form className={classes.form} noValidate autoComplete="off">
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    label="Email"
                    className={classes.textField}
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    margin="normal"
                  />

                  <DisplayError
                    check={user.state === ERROR && user.data.email}
                    message={() => user.data.email.join('')}
                  />

                  <Typography variant="body2">
                    Nós nunca vamos compartilhar seu e-mail com mais ninguém.
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    type="password"
                    id="password"
                    label="Password"
                    className={classes.textField}
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    margin="normal"
                  />

                  <DisplayError
                    check={user.state === ERROR && user.data.password}
                    message={() => user.data.password.join('')}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="course">Curso</InputLabel>
                    <Select
                      id="course"
                      value={this.state.course}
                      onChange={this.handleChange('course')}
                      inputProps={{
                        name: 'course',
                        id: 'course',
                      }}
                    >
                      {courses.data.map(course => (
                        <MenuItem key={course.id} value={course.id}>
                          {course.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <DisplayError
                    check={user.state === ERROR && user.data.course}
                    message={() => user.data.course.join('')}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="raised"
                    className={classes.button}
                    onClick={this.handleUserRegister}
                  >
                    Cadastrar
                  </Button>

                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="raised"
                      color="primary"
                      className={classes.button}
                    >
                      Cancelar
                    </Button>
                  </Link>
                </Grid>
              </form>
            </Paper>
          </Grid>

          <Grid item sm={4} xs={12} />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(SignUp);
