import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import axios from '../../../configs/axios';

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

  getTags() {
    const aux = this.state.tags.map(value => value);
    return aux;
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
      axios.get(`http://0.0.0.0:8000/api/emotions/${this.props.post.subject}/`).then((response) => {
        this.setState({
          emotions: [...this.state.emotions, response.data],
        });
      });
    }

    return aux;
  }

  render() {
    return (
      <MuiThemeProvider>
        <Card>
          <CardHeader
            title={this.props.post.content}
            subtitle="Usuario Anonimo"
            actAsExpander
            showExpandableButton
          />
          <CardActions>
            <FlatButton label="Ir para usuario" />
          </CardActions>
          <CardText expandable>
            Emoções:
            <ul>{this.state.emotions.map(value =>
              <li key={value.id}>{value.name}</li>)}
            </ul>
            Tags:
            <ul>{this.state.tags.map(value =>
              <li key={value.id}>{value.description}</li>)}
            </ul>
          </CardText>
        </Card>
      </MuiThemeProvider>
    );
  }
}

export default PostCell;
