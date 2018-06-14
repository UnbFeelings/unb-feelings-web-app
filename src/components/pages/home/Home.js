import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UnbFeelingsLogo from '../../shared/UnbFeelingsLogo';

import { WebDataStates } from '../../../redux/initial-state';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    height: '99vh',
    backgroundColor: '#4d5ebb',
  },
  Typography: {
    textAlign: 'center',
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
});

class Home extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleLoginClick = () => {
    this.props.loginUser(this.state);
  }

  render() {
    const { user, classes } = this.props;

    if (user.state === WebDataStates.SUCCESS) {
      return (<Redirect to="/feelings" from="/" />);
    }

    return (
      <div className={classes.root}>
        <Grid container spacing={8} alignItems="center" className={classes.container}>
          <Grid item sm={4} xs={12} />

          <Grid item sm={4} xs={12}>
            <Grid style={{ textAlign: 'center' }}>
              <UnbFeelingsLogo />
            </Grid>

            <Paper className={classes.paper}>
              <form noValidate autoComplete="off">
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    label="Email"
                    className={classes.textField}
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    margin="normal"
                  />
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
                </Grid>

                <Grid item xs={12}>
                  <Button
                    id="login-user"
                    variant="raised"
                    className={classes.button}
                    onClick={this.handleLoginClick}
                  >
                    Logar
                  </Button>

                  <Link id="sign-up" to="/sign-up" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="raised"
                      color="primary"
                      className={classes.button}
                    >
                      Cadastrar
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

export default withStyles(styles)(Home);
