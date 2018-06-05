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
    selected_subject: 0,
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

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      selected_subject: event.target.value,
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

  async fetchPosts() {
    // fetching posts
    // console.log("Fetching posts")
    // console.log(this.state.selected_subject)
    try {
      const response = await axios.get(`posts/subject/${this.state.selected_subject}/`);
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
      this.setState({
        subjectList,
      });
      // console.log(this.state.subjectList)
    } catch (e) {
      // console.log(e);
    }
  }

  setAvatarURL = (name) => {
    // Red, Green and Blue
    const COLORS = ['700', '070', '007'];
    const avatarName = name.replace(/ /g, '+');
    const ramdomIndex = Math.floor(Math.random() * 3);
    let url = `https://ui-avatars.com/api/?name=${avatarName}&color=fff&background=${COLORS[ramdomIndex]}`;

    return url;
  }

  async fetchUserInfo() {
    // fetching anonymous name and avatar for an user
    try {
      const response = await axios.get('/anonymous-name/');
      const name = response.data.anonymous_name;
      this.setState({
        name,
      });

      let avatarURL = this.setAvatarURL(name)
      this.setState({
        avatarURL,
      });
    } catch (e) {
      console.log(e);
    }
  }


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
            value={this.state.selected_subject}
            onChange={this.handleChange}
            inputProps={{
              name: 'selected_subject',
              id: 'selected_subject',
            }}
            style={{width: '100%'}}
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
                  {post.emotion === 'b' ? <Avatar src="https://www.materialui.co/materialIcons/social/sentiment_satisfied_black_192x192.png" /> :
                  <Avatar src="https://www.materialui.co/materialIcons/social/sentiment_dissatisfied_black_192x192.png" />}

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
