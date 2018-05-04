import React from 'react'

class Support extends React.Component {

  render() {

    return(
      <section id="support" className="doublediagonal">
          <div className="container">
              <div className="section-heading scrollpoint sp-effect3">
                  <h1>Participe</h1>
                  <div className="divider"></div>
                  <p>Para ter acesso, cadastre uma conta preenchendo o pequeno formulário abaixo.</p>
              </div>
              <div className="row">
                  <div className="col-md-12">
                      <div className="row">
                          <div className="col-md-8 col-sm-8 scrollpoint sp-effect1">
                              <form role="form">
                                  <div className="form-group">
                                      <input type="text" className="form-control" placeholder="Seu nome"/>
                                  </div>
                                  <div className="form-group">
                                      <input type="email" className="form-control" placeholder="Seu email"/>
                                  </div>
                                  <div className="form-check">
                                      <input type="checkbox" className="form-check-input" id="terms-check"/>
                                      <label className="form-check-label" htmlFor="terms-check">Eu concordo com os termos de uso.</label>
                                  </div>
                                  <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
                              </form>
                          </div>
                          <div className="col-md-4 col-sm-4 contact-details scrollpoint sp-effect2">
                              <div className="media">
                                  <a className="pull-left" href="#" >
                                      <i className="fa fa-check fa-2x"></i>
                                  </a>
                                  <div className="media-body">
                                      <h4 className="media-heading">Não salvamos seus dados</h4>
                                  </div>
                              </div>
                              <div className="media">
                                  <a className="pull-left" href="#" >
                                      <i className="fa fa-check fa-2x"></i>
                                  </a>
                                  <div className="media-body">
                                      <h4 className="media-heading">
                                          <a href="mailto:support@oleose.com">Completamente anônimo</a>
                                      </h4>
                                  </div>
                              </div>
                              <div className="media">
                                  <a className="pull-left" href="#" >
                                      <i className="fa fa-check fa-2x"></i>
                                  </a>
                                  <div className="media-body">
                                      <h4 className="media-heading">Somente requer um email válido</h4>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )

  }

}

export default Support;
