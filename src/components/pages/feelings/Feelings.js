import React from 'react';

import Button from '@material-ui/core/Button';

import { WebDataStates } from '../../../redux/initial-state';

import Emotion from './Emotion';

class Feelings extends React.Component {
  state = {
    subject: '',
    content: '',
    emotion: 'g',
  }

  componentDidMount() {
    const { NOT_REQUESTED } = WebDataStates;
    const subjectsState = this.props.subjects.state;

    if (subjectsState === NOT_REQUESTED) {
      this.props.requestSubjects();
    }
  }

  handleInput = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmitFeeling = () => {
    const author = this.props.user.data.id;
    this.props.sendUserFeelings({ ...this.state, author });
  }

  filterSubjectsByCourse(courseId) {
    const { subjects } = this.props;

    return subjects.data.filter(subject => subject.course === courseId);
  }

  render() {
    const { user } = this.props;
    const userSubjects = this.filterSubjectsByCourse(user.data.course.id);

    return (
      <div className="Feelings container">
        <div className="form-group">
          <label htmlFor="postSubject">Disciplina:</label>

          <select
            id="postSubject"
            name="subject"
            className="form-control"
            onChange={this.handleInput}
          >
            <option value="-1" key="-1">Selecione uma disciplina</option>

            {userSubjects.map(sub =>
              <option key={sub.id} value={sub.id}>{sub.name}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="postContent">
            Descreva o que está sentindo a cerda de uma aula ou do seu dia:
          </label>

          <textarea
            id="postContent"
            name="content"
            className="form-control"
            placeholder="Estou me sentindo..."
            onChange={this.handleInput}
          />
        </div>

        <div>
          <Emotion onChange={this.handleInput} />
        </div>

        <Button color="secondary" onClick={this.handleSubmitFeeling}>
          Enviar
        </Button>
      </div>
    );
  }
}

export default Feelings;
