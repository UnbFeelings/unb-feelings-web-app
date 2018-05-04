import React from 'react'

class GetApp extends React.Component {

  render() {
    return (
      <section id="getApp">
          <div className="container-fluid">
              <div className="section-heading inverse scrollpoint sp-effect3">
                  <h1>Praticidade</h1>
                  <div className="divider"></div>
                  <p>Acesse todas as funcionalidades de UnB Feelings através de seu celular!</p>
              </div>

              <div className="row">
                  <div className="col-md-12">
                      <div className="hanging-phone scrollpoint sp-effect2 hidden-xs">
                          <img src="/assets/img/freeze/freeze-angled2.png" alt=""/>
                      </div>

                      <div className="platforms">
                          <a href="#support" className="btn btn-primary inverse scrollpoint sp-effect1">
                          <span>Faça seu cadastro</span><br/>
                          <b>AGORA</b>
                          </a>
                      </div>

                  </div>
              </div>
          </div>
      </section>
    )
  }
}

export default GetApp;
