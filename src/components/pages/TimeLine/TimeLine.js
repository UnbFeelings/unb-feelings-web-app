import React from 'react';
import PostCell from './PostCell';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const margin = {
  marginTop: 25
}

class TimeLine extends React.Component {

  render() {
    const classes = PropTypes.object.isRequired;
    return (
      <Grid container spacing={24}>
        <Grid item xs>
          {'\u00A0'}
        </Grid>
        <Grid item xs={6} style={margin}>
          <div className={classes.paper}>
            {this.props.postList.map(post => <PostCell key={post.id} post={post} />)}
          </div>
        </Grid>
        <Grid item xs>
          {'\u00A0'}
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

export default withStyles(styles)(TimeLine);
