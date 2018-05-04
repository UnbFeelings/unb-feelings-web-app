import React from 'react'

class About extends React.Component {

  render (){
    return(
      <section id="about">
          <div className="container">

              <div className="section-heading scrollpoint sp-effect3">
                  <h1>Sobre</h1>
                  <div className="divider"></div>
                  <p>UnB Feelings</p>
              </div>

              <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-6">
                      <div className="about-item scrollpoint sp-effect2">
                          <i className="fa fa-download fa-2x"></i>
                          <h3>Fácil de usar</h3>
                          <p>Sem complicações, poste seus sentimentos sobre os fatos ocorridos com você na Univerdidade de Brasília.</p>
                      </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-6" >
                      <div className="about-item scrollpoint sp-effect5">
                          <i className="fa fa-mobile fa-2x"></i>
                          <h3>Acesso móvel</h3>
                          <p>Com um site adaptativo, UnB Feelings pode ser utilizado plenamente em dispositivos móveis.</p>
                      </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-6" >
                      <div className="about-item scrollpoint sp-effect5">
                          <i className="fa fa-users fa-2x"></i>
                          <h3>Anonimato</h3>
                          <p>Tem medo de retaliações? Não se preocupe, suas postagens serão feitas de modo anônimo e nenhum dado seu será mantido ou compartilhado.</p>
                      </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-6" >
                      <div className="about-item scrollpoint sp-effect1">
                          <i className="fa fa-sliders fa-2x"></i>
                          <h3>Edite as preferências</h3>
                          <p>Configure seus filtros para personalizar sua experiência e visualizar somente o que mais te interessa.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )

  }

}

export default About;
