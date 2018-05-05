import React from 'react';

import UnbFeelingsLogo from '../../shared/UnbFeelingsLogo';

import './SignUp.css';

const SignUp = () => (
  <div className="SignUp">
    <div className="container">
      <div className="row">

        <div className="col-md-12 col-sm-12 SignUp_logo">
          <UnbFeelingsLogo />
        </div>

        <div className="col-md-12 col-sm-12 SignUp_form">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">Nós nunca vamos compartilhar seu e-mail com mais ninguém.</small>
            </div>

            <div className="form-group">
              <label for="exampleInputPassword1">Senha</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-light">Cadastrar</button>
            <button type="submit" className="btn btn-outline-light">Cancelar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default SignUp;