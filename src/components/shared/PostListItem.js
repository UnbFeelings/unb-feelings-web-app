import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import IconThumbDown from '@material-ui/icons/ThumbDown';
import IconThumbUp from '@material-ui/icons/ThumbUp';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';

import axios from '../../configs/axios';
import SimpleMenu from './Menu';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  goodEmotion: {
    color: 'green',
  },
  badEmotion: {
    color: 'red',
  },
  chip: {
    margin: theme.spacing.unit,
  },

  typographyStyle: {
    marginBottom: 15,
  },

});

const ListTags = ({ tags, className }) => {
  const tagsJSX = tags.map(t => (
    <Chip
      key={t.id}
      label={t.description}
      className={className}
    />
  ));

  return tagsJSX;
};


class PostListItem extends React.Component {
  state = {
    avatarURL: '',
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

   async fetchUserInfo() {
     // fetching anonymous name and avatar for an user
     try {
       const response = await axios.get('/anonymous-name/');
       const name = response.data.anonymous_name;
       const avatarURL = this.setAvatarURL(name);
       this.setState({
         avatarURL,
       });
     } catch (e) {
       console.log('Could not fetch user info');
       console.log(e);
     }
   }

   render() {
     return (
       <Card className={this.props.classes.root} elevation={4}>
          <CardHeader
              avatar={
                <a key={this.props.key} href={`/university-posts/${this.props.author}`}>
                  <Avatar src={this.state.avatarURL} />
                </a>
              }
            action={
              <SimpleMenu author={this.props.author} />
              }
            />

           <Typography component="p">
             {this.props.emotion === 'g' ?
               <IconThumbUp className={this.props.classes.goodEmotion} />
              :
               <IconThumbDown className={this.props.classes.badEmotion} />
            }
             {' '}
             {this.props.subject}

           </Typography>

           <Typography component="p">
             {this.props.tags.length > 0 ?
               <React.Fragment>
                 <ListTags tags={this.props.tags} className={this.props.classes.chip} />
               </React.Fragment>
              :
              null
            }
           </Typography>


         </Card>
     );
   }
}
export default withStyles(styles)(PostListItem);
