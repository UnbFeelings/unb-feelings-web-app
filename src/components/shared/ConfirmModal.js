import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import axios from '../../configs/axios';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleBlock = async () => {
    const blocked = this.props.author
    try {
      const response = await axios.post('/block/', {
        blocked: blocked,
      });
      console.log(response)
      this.setState({ open: false });
      window.location.reload();
    } catch (e) {
      console.log('Could not fetch user info');
      console.log(e);
    }
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  async blockUser() {
    // fetching anonymous name and avatar for an user
    try {
      const response = await axios.get('/anonymous-name/');
      console.log(response)
    } catch (e) {
      console.log('Could not block');
      console.log(e);
    }
  }


  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button color="secondary" onClick={this.handleOpen}>Bloquear Autor</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title">
              Bloquear usuário
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              Você tem certeza que gostaria de bloquear o autor deste post?
              Você não será mais capaz de visualizar nenhum conteúdo produzido por ele.
            </Typography>
            <Button onClick={this.handleClose}>Não</Button>
            <Button color="secondary" onClick={this.handleBlock}>Sim</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
