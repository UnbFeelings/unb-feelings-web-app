import React from 'react';

import { WebDataStates } from '../../../redux/initial-state';

class Feelings extends React.Component {
  state = {
    subject: "",
    content: "",
    tag: "1",
    emotion: "1"
  }

  componentDidMount() {
    const { NOT_REQUESTED } = WebDataStates;
    const subjectsState = this.props.subjects.state;

    if (subjectsState === NOT_REQUESTED) {
      this.props.requestSubjects();
    }
  }

  handleInput = (e) => {
    const value = e.target.value;
    const field = e.target.name;

    this.setState({ [field]: value });
  }

  handleSubmitFeeling = (e) => {
    const author = this.props.user.data.id;
    this.props.sendUserFeelings({...this.state, author});
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
              <option key={sub.id} value={sub.id}>{sub.name}</option>
            )}
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
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="postTag">
            Escolha uma tag de acordo com o que está sentindo
            (por algum motivo, esta como uma lista...)
          </label>

          <input
            type="text"
            id="postTag"
            name="tag"
            className="form-control"
            value="1"
            onChange={() => "Why API WHY ?!?!"}
          />
        </div>

        <div className="form-group">
          Você está se sentindo:
          (por algum motivo esta como uma lista)

          <input
            type="text"
            id="postEmotion"
            name="emotion"
            className="form-control"
            value="1"
            onChange={() => "Why API WHY ?!?!"}
          />
        </div>

        <button
          type="submit"
          className="btn btn-light"
          onClick={this.handleSubmitFeeling}
        >
          Enviar
        </button>
      </div>
    );
  }
}

export default Feelings;