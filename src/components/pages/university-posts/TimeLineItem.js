import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

// eslint-disable-next-line object-curly-newline
const TimeLineItem = ({ classes, subject, tag, emotion }) => (
  <div className="TimeLineItem">
    <Paper className={classes.root} elevation={4}>
      <Typography variant="headline" component="h3">
        Subject: {subject}
      </Typography>

      <Typography component="p">
        {emotion === 'b' ? 'GOOD' : 'BAD'}
      </Typography>

      <Typography component="p">
        {tag.map(t => <span key={t.id}>{t.description} -</span>)}
      </Typography>
    </Paper>
  </div>
);

export default withStyles(styles)(TimeLineItem);
