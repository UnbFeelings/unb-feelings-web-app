import React from 'react';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
});

const links = [
  { text: 'Feelings', url: '/feelings', icon: InboxIcon },
  { text: 'UnB Feelings', url: '/university-posts', icon: InboxIcon },
  { text: 'Feelings Charts', url: '/my-subject-chart', icon: InboxIcon },
  { text: 'Matérias Charts', url: '/subjects-chart', icon: InboxIcon },
  // { text: 'Feelings Timeline', url: '/feelings-timeline', icon: InboxIcon },
  // { text: 'Subject Timeline', url: '/subject-timeline', icon: InboxIcon },
];

/**
 * See: https://material.io/tools/icons/?style=baseline
 * for Icons
*/
const DrawerLinks = ({ classes }) => (
  <div className={classes.toolbar}>
    <List component="nav">
      {links.map(link => (
        <ListItem key={link.url} button>
          <ListItemIcon>
            <link.icon />
          </ListItemIcon>

          <Link to={link.url} style={{ textDecoration: 'none' }}>
            <ListItemText primary={link.text} />
          </Link>
        </ListItem>
      ))}
    </List>
  </div>
);

export default withStyles(styles, { withTheme: true })(DrawerLinks);
