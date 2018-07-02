import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconThumbDown from '@material-ui/icons/ThumbDown';
import IconThumbUp from '@material-ui/icons/ThumbUp';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import { fetchUserRandomInfo } from '../../utils/randomProfile';

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

  async componentDidMount() {
    try {
      const avatarURL = await fetchUserRandomInfo();
      this.setState({ avatarURL });
    } catch (e) {
      console.log('Could not fetch user info');
      console.log(e);
    }
  }

  render() {
    return (
      <Paper className={this.props.classes.root} elevation={4}>
        <Typography variant="headline" component="h3" className={this.props.classes.typographyStyle} >
          <Avatar src={this.state.avatarURL} />
        </Typography>

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

      </Paper>
    );
  }
}

export default withStyles(styles)(PostListItem);
