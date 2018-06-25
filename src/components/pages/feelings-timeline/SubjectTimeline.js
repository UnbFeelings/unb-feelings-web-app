import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import SentimentDissatisfied from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfied from '@material-ui/icons/SentimentSatisfied';

import axios from '../../../configs/axios';

const styles = theme => ({
  root: {
    maxWidth: '800px',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  hashtags: {
    fontSize: 11,
    color: '#336799',
    display: 'flex',
    justifyContent: 'right',
  },

  hashtag: {
    marginRight: '1%',
  },
  formControl: {
    maxWidth: '800px',
    width: '100%',
    hight: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    marginTop: '10px',
    minWidth: 120,
    backgroundColor: 'white',
  },

  emotionIcon: {
    paddingRight: '5%',
  },
});

class SubjectTimeline extends React.Component {
  state = {
    selectedSubject: 0,
    subjPosts: [],
    subjectList: [],
    name: '',
    avatarURL: '',
    open: false,
  };

  async componentWillMount() {
    this.fetchPosts();
    this.fetchSubjects();
    this.fetchUserInfo();
  }

  setAvatarURL = (name) => {
    // Red, Green and Blue
    const COLORS = ['700', '070', '007'];
    const avatarName = encodeURIComponent(name);
    const ramdomIndex = Math.floor(Math.random() * 3);
    const BASE_URL = 'https://ui-avatars.com/api/';
    const url = `${BASE_URL}?name=${avatarName}&color=fff&background=${COLORS[ramdomIndex]}`;

    return url;
  }

  async fetchPosts() {
    const { selectedSubject } = this.state;

    if (selectedSubject === 0) {
      return;
    }

    try {
      const response = await axios.get(`posts/subject/${selectedSubject}/`);
      const subjPosts = response.data;
      this.setState({
        subjPosts,
      });
      // console.log(this.state.subjPosts)
    } catch (e) {
      // console.log(e);
    }
  }

  async fetchSubjects() {
    // fetching subjects for selection
    try {
      const response = await axios.get('/subjects/');
      const subjectList = response.data;
      // Sort subjects in ascending order by name
      subjectList.results.sort((a, b) => (a.name > b.name ? 1 : -1));
      this.setState({ subjectList });
      // console.log(this.state.subjectList)
    } catch (e) {
      // console.log(e);
    }
  }

  async fetchUserInfo() {
    // fetching anonymous name and avatar for an user
    try {
      const response = await axios.get('/anonymous-name/');
      const name = response.data.anonymous_name;
      this.setState({
        name,
      });

      const avatarURL = this.setAvatarURL(name);
      this.setState({
        avatarURL,
      });
    } catch (e) {
      console.log('Could not fetch user info');
      console.log(e);
    }
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      selectedSubject: event.target.value,
    });
    this.fetchPosts();
    this.fetchUserInfo();
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };


  renderSubjectSelecter() {
    const { classes } = this.props;
    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="controlled-open-select">Disciplina</InputLabel>

          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.selectedSubject}
            onChange={this.handleChange}
            inputProps={{
              name: 'selectedSubject',
              id: 'selectedSubject',
            }}
            style={{ width: '100%' }}
          >
            {this.state.subjectList.results.map(sub =>
              <MenuItem key={sub.id} value={sub.id}>{sub.name}</MenuItem>)
            }
          </Select>
        </FormControl>
      </form>
    );
  }

  renderPosts() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.state.subjPosts.results.map((post => (
          <div key={post.id}>
            <List component="nav" >
              <ListItem>
                <Avatar src={this.state.avatarURL} />
                <div>
                  <ListItemText inset primary={this.state.name} secondary={post.created_at} />
                </div>

                <div className={classes.emotionIcon}>
                  {post.emotion === 'g' ?
                    <SentimentSatisfied />
                    :
                    <SentimentDissatisfied />
                  }
                </div>

                <div className={classes.hashtags}>
                  {post.tag.map((theTag => (
                    <div key={post.tag.id} className={classes.hashtag}>
                      <p> #{theTag.description} </p>
                    </div>
                  )))}
                </div>
              </ListItem>
            </List>
            <Divider />
          </div>
        )))}
      </div>
    );
  }

  render() {
    // console.log(this.state.subjPosts.results)
    // o código abaixo funciona como 2 ifs para chamar renderizar
    // apenas quando os dados da API já estiverem carregados
    return (
      <div>
        {this.state.subjectList.results !== undefined && this.renderSubjectSelecter()}
        {this.state.subjPosts.results !== undefined && this.renderPosts()}
      </div>
    );
  }
}

export default withStyles(styles)(SubjectTimeline);
