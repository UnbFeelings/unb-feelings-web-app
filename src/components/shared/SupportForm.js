import React from 'react';
import PropTypes from 'prop-types';
import axios from '../../configs/axios';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

class SupportForm extends React.Component {
  state = {
    message: '',
    messageError: ' ',
    displaySupportSentMessage: false,
  };

  handleChange = (event) => {
    this.setState({ message: event.target.value, messageError: ' ' });
  };

  handleSubmit = async () => {
    const { message } = this.state;

    if (!message) {
      this.setState({ messageError: 'Informe a mensagem que deseja enviar' });
    } else {
      const { studentTo } = this.props;
      const body = { message };

      try {
        await axios.post(`/support/${studentTo}/`, body);
        this.setState({ message: '', displaySupportSentMessage: true });
      } catch (err) {
        alert(err);
      }
    }
  };

  handleCloseSnackbar = () => {
    // Hide the successful support message
    this.setState({ displaySupportSentMessage: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Card raised>
        <CardContent>
          <CardHeader
            title={'Apoiar este perfil'}
          />
          <FormControl fullWidth className={classes.margin} error aria-describedby="message-error">
            <TextField
              id="message"
              label="Escreva uma mensagem de apoio para este usuário"
              multiline
              rows="6"
              value={this.state.message}
              onChange={this.handleChange}
              // margin="normal"
            />
            <FormHelperText id="message-error">{this.state.messageError}</FormHelperText>
          </FormControl>
          <Button
            variant="raised"
            color="secondary"
            className={classes.button}
            onClick={this.handleSubmit}
          >
            Enviar
          </Button>
        </CardContent>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.displaySupportSentMessage}
          autoHideDuration={6000}
          onClose={this.handleCloseSnackbar}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Apoio enviado com sucesso</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={styles.close}
              onClick={this.handleCloseSnackbar}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Card>
    );
  }
}

SupportForm.propTypes = {
  studentTo: PropTypes.number.isRequired,
};

export default withStyles(styles)(SupportForm);
