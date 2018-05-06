import React from 'react';
import { Link } from 'react-router-dom';

import UnbFeelingsLogo from '../../shared/UnbFeelingsLogo';

import './Home.css';

const Home = () => (
  <div className="Home">

    <div className="container">

      <div className="row">
        <div className="col-md-6 col-sm-12 text-center Home_left_side">
          <div className="col-md-12 col-sm-12 Home_logo">
            <UnbFeelingsLogo />
          </div>

          <div className="col-md-12 col-sm-12 Home_options">
            <Link to="sign-up" className="btn btn-outline-light btn-block">REGISTRAR</Link>
            <button className="btn btn-light btn-block">LOG IN</button>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 Home_right_side">

          <div className="media">
            <i className="fa fa-download fa-2x"></i>

            <div className="media-body">
              <h5 className="mt-0">Fácil de usar</h5>

              Sem complicações, poste seus sentimentos sobre os fatos
              ocorridos com você na Univerdidade de Brasília.
            </div>
          </div>

          <div className="media">
            <i className="fa fa-mobile fa-2x"></i>

            <div className="media-body">
              <h5 className="mt-0">Acesso móvel</h5>

              Com um site adaptativo, UnB Feelings
              pode ser utilizado plenamente em dispositivos móveis.
            </div>
          </div>

          <div className="media">
            <i className="fa fa-users fa-2x"></i>

            <div className="media-body">
              <h5 className="mt-0">Anonimato</h5>

              Tem medo de retaliações? Não se preocupe,
              suas postagens serão feitas de modo
              anônimo e nenhum dado seu será compartilhado.
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
);

export default Home;