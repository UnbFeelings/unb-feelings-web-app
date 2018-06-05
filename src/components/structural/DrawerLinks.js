import React from 'react';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Person from '@material-ui/icons/Person';
import School from '@material-ui/icons/School';
import Group from '@material-ui/icons/Group';
import Equalizer from '@material-ui/icons/Equalizer';
import DonutSmall from '@material-ui/icons/DonutSmall';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
});

const links = [
  { text: 'Meus Sentimentos', url: '/feelings', icon: Person },
  { text: 'Sentimentos por Disciplina', url: '/subject-timeline', icon: Group },
  { text: 'Sentimentos na UnB', url: '/university-posts', icon: School },
  { text: 'Meu Diagnóstico', url: '/my-subject-chart', icon: Equalizer },
  { text: 'Diagnóstico por Disciplina', url: '/subjects-chart', icon: DonutSmall },
  // { text: 'Feelings Timeline', url: '/feelings-timeline', icon: InboxIcon },
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
