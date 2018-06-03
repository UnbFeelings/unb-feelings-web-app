import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconThumbDown from '@material-ui/icons/ThumbDown';
import IconThumbUp from '@material-ui/icons/ThumbUp';
import Chip from '@material-ui/core/Chip';

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


const PostListItem = ({
  classes, subject, emotion, tags = [],
}) => (
  <Paper className={classes.root} elevation={4}>
    <Typography variant="headline" component="h3">
      {emotion === 'g' ?
        <IconThumbUp className={classes.goodEmotion} />
        :
        <IconThumbDown className={classes.badEmotion} />
      }
      {' '}
      {subject}
    </Typography>

    {tags.length > 0 ?
      <React.Fragment>
        <ListTags tags={tags} className={classes.chip} />
      </React.Fragment>
      :
      null
    }
  </Paper>
);

export default withStyles(styles)(PostListItem);
