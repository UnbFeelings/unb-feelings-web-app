import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SimpleModalWrapped from './ConfirmModal';
import axios from '../../configs/axios';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleBlock = async () => {
    const blocked = this.props.author;
    try {
      const response = await axios.post('/block/', {
        blocked,
      });
      console.log(response);
    } catch (e) {
      console.log('Could not fetch user info');
      console.log(e);
    }
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem>
            <SimpleModalWrapped
              action={this.handleBlock}
              content="Bloquear Autor"
              title="Desbloquear usuário"
              subheading={`
              Você tem certeza que gostaria de bloquear o autor deste post?\n
              Você não será mais capaz de visualizar nenhum conteúdo produzido por ele.
              `}
            />
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
