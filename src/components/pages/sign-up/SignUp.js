import React from 'react';
import { Link } from 'react-router-dom';

import UnbFeelingsLogo from '../../shared/UnbFeelingsLogo';
import DisplayOn from '../../shared/DisplayOn';

import './SignUp.css';

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
  }

  handleInput = (e) => {
    const value = e.target.value;
    const field = e.target.name;

    this.setState({ [field]: value });
  }

  render() {
    const { email, password } = this.state;

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
                  <small id="emailHelp" className="form-text text-muted">Nós nunca vamos compartilhar seu e-mail com mais ninguém.</small>
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
              </form>

              <DisplayOn device="PC">
                <button type="submit" className="btn btn-light">Cadastrar</button>
                {' '}
                <Link to="/" className="btn btn-outline-light">Cancelar</Link>
              </DisplayOn>

              <DisplayOn device="mobile">
                <button type="submit" className="btn btn-light btn-block">Cadastrar</button>
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