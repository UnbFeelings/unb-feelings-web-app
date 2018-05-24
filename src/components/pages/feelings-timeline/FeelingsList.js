import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 5,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  paragraph: {
    paddingLeft: theme.spacing.unit * 6,
    fontStyle: 'italic',
    textAlign: 'justify',
    fontSize: 12,
  },
  hashtag: {
    color: '#336799',
  },
});

class NestedList extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;

    let feelings = null;

    switch (this.props.type) {
      case 'personal': {
        feelings = (
          <div className={classes.nested}>
            <label className={classes.label}>Texto:</label>
            <p className={classes.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              In dictum justo a turpis dapibus lacinia.
              Praesent ante elit, dapibus eu semper sed, malesuada eu nisi.
              Phasellus et elit hendrerit metus.
            </p>
            <label className={classes.label}>Sentimento:</label>
            <p className={classes.paragraph}>Confuso</p>
            <a href="/" className={classes.hashtag}>#triste #desenhoehumlixo #abaixoaprofessoradedesenho</a>
          </div>
        );
        break;
      }
      case 'general': {
        feelings = (
          <div className={classes.nested}>
            <ListItem>
              <Avatar src="http://br.kogstatic.com/gen_images/b4/ab/b4abd72f6c8a4f20b755c475ddccd85a.png" />
              <ListItemText primary="Jacaré não come alpiste" />
            </ListItem>
            <div style={{ paddingLeft: 80 }}>
              <label className={classes.label}>Sentimento:</label>
              <p className={classes.paragraph}>Confuso</p>
              <a href="/" className={classes.hashtag}>#triste #desenhoehumlixo #abaixoaprofessoradedesenho</a>
            </div>
          </div>
        );
        break;
      }
      default: {
      // console.log('Error');
      }
    }

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText inset primary="Sentimento" secondary="Data de publicação" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            {feelings}
          </Collapse>
        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);
