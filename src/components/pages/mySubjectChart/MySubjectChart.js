import React from 'react';
import store from '../../../redux/store';
import axios from '../../../configs/axios';
import PersonalBarChart from './PersonalBarChart';

class MySubjectChart extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      subjects: [],
    };
  }

  componentDidMount() {
    this.formatData();
  }

  fetchSubjects(id) {
    axios.get(`http://0.0.0.0:8000/api/subjects/${id}/`).then((response) => {
      if (!this.state.subjects.includes(response.data.name)) {
        this.setState({
          subjects: [...this.state.subjects, response.data],
        });
      }
    });
  }

  formatData() {
    this.fetchPosts(store.getState().user.data.id);
  }

  fetchPosts(id) {
    axios.get(`http://0.0.0.0:8000/api/posts/user/${id}/`).then((response) => {
      this.setState({ posts: response.data.results });
      for (let cont = 0; cont < this.state.posts.length; cont += 1) {
        this.fetchSubjects(this.state.posts[cont].subject);
      }
    });
  }

  render() {
    return (
      <div>
        <PersonalBarChart labels={this.state.subjects} posts={this.state.posts} />
      </div>
    );
  }
}

export default MySubjectChart;
