import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired,
  }

  state = {
    email: '',
    password: '',
  }

  handleInput = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  handleLoginClick = () => {
    this.props.loginUser(this.state);
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="LoginForm">
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
        </div>

        <div className="form-group">
          <button className="btn btn-light btn-block" onClick={this.handleLoginClick}>
            LOG IN
          </button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
