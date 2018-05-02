import React from 'react'

class Features extends React.Component {


  render() {

    return(

      <section id="features">
          <div className="container">
              <div className="section-heading scrollpoint sp-effect3">
                  <h1>Funcionalidades</h1>
                  <div className="divider"></div>
                  <p>Veja o que o UnB Feelings tem a oferecer!</p>
              </div>
              <div className="row">
                  <div className="col-md-4 col-sm-4 scrollpoint sp-effect1">
                      <div className="media text-right feature">
                          <a className="pull-right" href="#">
                              <i className="fa fa-filter fa-2x"></i>
                          </a>
                          <div className="media-body">
                              <h3 className="media-heading">Filtros</h3>
                              Filtre sua experiência na timeline.
                          </div>
                      </div>
                      <div className="media text-right feature">
                          <a className="pull-right" href="#">
                              <i className="fa fa-send fa-2x"></i>
                          </a>
                          <div className="media-body">
                              <h3 className="media-heading">Relatos</h3>
                              Dê sua visão sobre um curso ou matéria.
                          </div>
                      </div>
                      <div className="media text-right feature">
                          <a className="pull-right" href="#">
                              <i className="fa fa-user fa-2x"></i>
                          </a>
                          <div className="media-body">
                              <h3 className="media-heading">Anônimo</h3>
                              A integridade de sua identidade assegurada.
                          </div>
                      </div>
                      <div className="media text-right feature">
                          <a className="pull-right" href="#">
                              <i className="fa fa-comment fa-2x"></i>
                          </a>
                          <div className="media-body">
                              <h3 className="media-heading">Comente</h3>
                              Deixe sua mensagem para o público da UnB.
                          </div>
                      </div>
                      <div className="media text-right feature">
                          <a className="pull-right" href="#">
                              <i className="fa fa-bullhorn fa-2x"></i>
                          </a>
                          <div className="media-body">
                              <h3 className="media-heading">Se expresse!</h3>
                              Não fique em silêncio! Diga o que se passa.
                          </div>
                      </div>
                  </div>


                  <div className="col-md-4 col-sm-4" >
                      <img src={require("../assets/img/freeze/iphone-freeze.png")} className="img-responsive scrollpoint sp-effect5" alt=""/>
                  </div>
                  <div className="col-md-4 col-sm-4 scrollpoint sp-effect2">
                      <div className="media feature">
                          <a className="pull-left" href="#">
                              <i className="fa fa-check fa-2x"></i>
                          </a>
                          <div className="media-body">
                              <h3 className="media-heading">Dê Dicas</h3>
                              Repasse suas experiências a outros.
                          </div>
                      </div>
                      <div className="media feature">
                          <a className="pull-left" href="#">
                              <i className="fa fa-mobile fa-2x"></i>
                          </a>
                          <div className="media-body">
                              <h3 className="media-heading">Responsividade</h3>
                              Acesse de qualquer aparelho.
                          </div>
                      </div>
                      <div className="media feature">
                          <a className="pull-left" href="#">
                              <i className="fa fa-book fa-2x"></i>
                          </a>
                          <div className="media-body">
                              <h3 className="media-heading">Se inteire</h3>
                              Fique antenado com as dicas dos usuários.
                          </div>
                      </div>
                      <div className="media feature">
                          <a className="pull-left" href="#">
                              <i className="fa fa-picture-o fa-2x"></i>
                          </a>
                          <div className="media-body">
                              <h3 className="media-heading">Avatares aleatórios</h3>
                              Avatares não fixos ajudam no anonimato.
                          </div>
                      </div>
                      <div className="media active feature">
                          <a className="pull-left" href="#">
                              <i className="fa fa-plus fa-2x"></i>
                          </a>
                          <div className="media-body">
                              <h3 className="media-heading">E muito mais!</h3>
                              Confira tudo ao utilizar!
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>


    )

  }

}

export default Features;
