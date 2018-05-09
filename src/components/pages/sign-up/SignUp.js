import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import { WebDataStates } from '../../../redux/initial-state';
import { UserPropType, CourseListPropType } from '../../../redux/state-prop-types';

import UnbFeelingsLogo from '../../shared/UnbFeelingsLogo';
import DisplayOn from '../../shared/DisplayOn';
import DisplayError from '../../shared/DisplayError';

import './SignUp.css';

class SignUp extends React.Component {
  static propTypes = {
    user: UserPropType.isRequired,
    courses: CourseListPropType.isRequired,
    requestCourses: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
  }

  state = {
    email: '',
    password: '',
    course: '',
  }

  componentDidMount() {
    const { NOT_REQUESTED } = WebDataStates;
    const coursesState = this.props.courses.state;

    if (coursesState === NOT_REQUESTED) {
      this.props.requestCourses();
    }
  }

  handleInput = (e) => {
    const { value, field } = e.target;

    this.setState({ [field]: value });
  }

  handleUserRegister = () => {
    this.props.registerUser(this.state);
  }

  render() {
    const { ERROR, SUCCESS } = WebDataStates;
    const { email, password } = this.state;
    const { courses, user } = this.props;

    if (user.state === SUCCESS) {
      return (<Redirect to="/feelings" from="/sign-up" />);
    }

    return (
      <div className="SignUp">
        <div className="container">
          <div className="row">

            <div className="col-md-12 col-sm-12 SignUp_logo">
              <UnbFeelingsLogo />
            </div>

            <div className="col-md-12 col-sm-12 SignUp_form">
              <form>
                <div className="form-group">
                  <label htmlFor="userEmail">Email</label>

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="userEmail"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={this.handleInput}
                    value={email}
                  />

                  <DisplayError
                    check={user.state === ERROR && user.data.email}
                    message={() => user.data.email.join('')}
                  />

                  <small id="emailHelp" className="form-text text-muted">
                    Nós nunca vamos compartilhar seu e-mail com mais ninguém.
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="userPass">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="userPass"
                    placeholder="Password"
                    onChange={this.handleInput}
                    value={password}
                  />

                  <DisplayError
                    check={user.state === ERROR && user.data.password}
                    message={() => user.data.password.join('')}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="userCourse">Curso</label>

                  <select
                    className="form-control"
                    id="userCourse"
                    name="course"
                    onChange={this.handleInput}
                  >
                    <option value="-1" key={-1}>Selecione seu curso</option>

                    {courses.data.map(course =>
                      <option key={course.id} value={course.id}>{course.name}</option>)}
                  </select>

                  <DisplayError
                    check={user.state === ERROR && user.data.course}
                    message={() => user.data.course.join('')}
                  />
                </div>
              </form>

              <DisplayOn device="PC">
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={this.handleUserRegister}
                >
                  Cadastrar
                </button>
                {' '}
                <Link to="/" className="btn btn-outline-light">Cancelar</Link>
              </DisplayOn>

              <DisplayOn device="mobile">
                <button
                  type="submit"
                  className="btn btn-light btn-block"
                  onClick={this.handleUserRegister}
                >
                  Cadastrar
                </button>
                {' '}
                <Link to="/" className="btn btn-outline-light btn-block">Cancelar</Link>
              </DisplayOn>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
