import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import axios from '../../../configs/axios';

const displayBlock = {
  display: 'block',
  marginLeft: 15,
};

const marginBottom = {
  marginBottom: 10,
};

class PostCell extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: [],
      emotions: [],
    };
  }


  componentDidMount() {
    this.fetchTags();
    this.fetchEmotions();
  }

  fetchTags() {
    const aux = [];
    for (let cont = 0; cont < this.props.post.tag.length; cont += 1) {
      axios.get(`http://0.0.0.0:8000/api/tags/${this.props.post.tag[cont]}/`).then((response) => {
        this.setState({
          tags: [...this.state.tags, response.data],

        });
      });
    }

    return aux;
  }

  fetchEmotions() {
    const aux = [];
    for (let cont = 0; cont < this.props.post.emotion.length; cont += 1) {
      axios.get(`http://0.0.0.0:8000/api/emotions/${this.props.post.emotion[cont]}/`).then((response) => {
        this.setState({
          emotions: [...this.state.emotions, response.data],
        });
      });
    }

    return aux;
  }

  render() {
    const classes = PropTypes.object.isRequired;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            <a href="https://google.com.br" rel="noopener noreferrer" target="_blank">Aqui vai ser o nome aleatório</a>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div style={marginBottom}>
            Emoções: {this.state.emotions.map(value =>
              <span style={displayBlock} key={value.id}>{value.name}</span>)}
            </div>
            <div>
            Tags: {this.state.tags.map(value =>
              <span style={displayBlock} key={value.id}>{value.description}</span>)}
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});


export default withStyles(styles)(PostCell);
