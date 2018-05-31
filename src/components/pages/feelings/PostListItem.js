import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconThumbDown from '@material-ui/icons/ThumbDown';
import IconThumbUp from '@material-ui/icons/ThumbUp';

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
});

const PostListItem = ({ classes, subject, emotion }) => (
  <Paper className={classes.root} elevation={4}>
    <Typography variant="headline" component="h3">
      {emotion === 'b' ?
        <IconThumbUp className={classes.goodEmotion} />
        :
        <IconThumbDown className={classes.badEmotion} />
      }
      {' '}
      {subject}
    </Typography>
  </Paper>
);

export default withStyles(styles)(PostListItem);
