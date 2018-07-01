import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import axios from '../../../configs/axios';
import SimpleModalWrapped from '../../shared/ConfirmModal';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),

  typographyStyle: {
    marginBottom: 15,
  },

});

class BlockCard extends React.Component {
  state = {
    avatarURL: '',
    name: '',
  };

  componentDidMount() {
    this.fetchUserInfo();
  }
   setAvatarURL = (name) => {
     // Red, Green and Blue
     const COLORS = ['700', '070', '007'];
     const avatarName = encodeURIComponent(name);
     const ramdomIndex = Math.floor(Math.random() * 3);
     const BASE_URL = 'https://ui-avatars.com/api/';
     const url = `${BASE_URL}?name=${avatarName}&color=fff&background=${COLORS[ramdomIndex]}`;
     return url;
   }

   unblockUser = async () => {
     const userId = this.props.user_id;

     try {
       const response = await axios.delete(`/block/${userId}/`);
       console.log(response);
       window.location.reload();
     } catch (e) {
       console.log('Could not unblock user');
       console.log(e);
     }
   }

   async fetchUserInfo() {
     // fetching anonymous name and avatar for an user
     try {
       const response = await axios.get('/anonymous-name/');
       const name = response.data.anonymous_name;
       const avatarURL = this.setAvatarURL(name);
       this.setState({
         avatarURL,
         name,
       });
     } catch (e) {
       console.log('Could not fetch user info');
       console.log(e);
     }
   }

   render() {
     return (
       <ListItem>
         <ListItemAvatar>
           <Avatar src={this.state.avatarURL} />
         </ListItemAvatar>
         <ListItemText
           primary={this.state.name}
         />
         <ListItemSecondaryAction>
           <IconButton aria-label="Delete">
             <SimpleModalWrapped
               action={this.unblockUser}
               content={<DeleteIcon />}
               title="Desbloquear usuário"
               subheading="
              Você tem certeza que gostaria de desbloquear este estudante?
              Você voltará a visualizar todo o conteúdo produzido por ele.
              "
             />
           </IconButton>
         </ListItemSecondaryAction>
       </ListItem>
     );
   }
}
export default withStyles(styles)(BlockCard);
