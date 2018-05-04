import React from 'react';

const getRandomAvatar = () => {
  const gravatarUrl = "https://www.gravatar.com/avatar";
  const randHash = Math.floor(Math.random() * 1000);

  return `${gravatarUrl}/${randHash}?s=70&d=identicon&r=PG`;
}

const NewHome = () => (
  <div className="Home">
    <div className="pre-loader">
      <div className="load-con">
        <img src="/assets/img/freeze/logo.png" className="animated fadeInDown" alt="" />
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    </div>

    <header>

      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="fa fa-bars fa-lg"></span>
            </button>
            <a className="navbar-brand" href="index.html">
              <img src="/assets/img/freeze/logo.png" alt="" className="logo" />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav navbar-right">
              <li><a href="#about">Sobre</a>
              </li>
              <li><a href="#features">Expresse</a>
              </li>
              <li><a href="#reviews">funcionalidades</a>
              </li>
              <li><a href="#screens">praticidade</a>
              </li>
              <li><a href="#demo">participe</a>
              </li>
              <li><a className="getApp" href="#getApp">entrar</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="tp-banner-container">
        <div className="tp-banner" >
          <ul>
            <li data-transition="fade" data-slotamount="7" data-masterspeed="1500" >
              <img src="/assets/img/transparent.png" alt="slidebg1" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat" />

              <div className="tp-caption lfl fadeout hidden-xs"
                data-x="left"
                data-y="bottom"
                data-hoffset="30"
                data-voffset="0"
                data-speed="500"
                data-start="700"
                data-easing="Power4.easeOut">

                <img src="/assets/img/freeze/Slides/hand-freeze.png" alt="" />
              </div>

              <div className="tp-caption lfl fadeout visible-xs"
                data-x="left"
                data-y="center"
                data-hoffset="700"
                data-voffset="0"
                data-speed="500"
                data-start="700"
                data-easing="Power4.easeOut">
                <img src="/assets/img/freeze/iphone-freeze.png" alt="" />
              </div>

              <div className="tp-caption large_white_bold sft" data-x="550" data-y="center" data-hoffset="0" data-voffset="-80" data-speed="500" data-start="1200" data-easing="Power4.easeOut">
                UnB
              </div>

              <div className="tp-caption large_white_light sfr" data-x="680" data-y="center" data-hoffset="0" data-voffset="-80" data-speed="500" data-start="1400" data-easing="Power4.easeOut">
                Feelings
              </div>

              <div className="tp-caption large_white_light sfb" data-x="550" data-y="center" data-hoffset="0" data-voffset="0" data-speed="1000" data-start="1500" data-easing="Power4.easeOut">
                Se expresse!
              </div>

              <div className="tp-caption sfb hidden-xs" data-x="550" data-y="center" data-hoffset="0" data-voffset="85" data-speed="1000" data-start="1700" data-easing="Power4.easeOut">
                <a href="#about" className="btn btn-primary inverse btn-lg">DESCRUBA</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </header>


    <div className="wrapper">

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
                <p>
                  Sem complicações, poste seus sentimentos sobre os fatos ocorridos com você na Univerdidade de Brasília.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6" >
              <div className="about-item scrollpoint sp-effect5">
                <i className="fa fa-mobile fa-2x"></i>
                <h3>Acesso móvel</h3>
                <p>
                  Com um site adaptativo, UnB Feelings pode ser utilizado plenamente em dispositivos móveis.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6" >
              <div className="about-item scrollpoint sp-effect5">
                <i className="fa fa-users fa-2x"></i>
                <h3>Anonimato</h3>
                <p>
                  Tem medo de retaliações? Não se preocupe, suas postagens serão feitas de modo anônimo e nenhum dado seu será mantido ou compartilhado.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6" >
              <div className="about-item scrollpoint sp-effect1">
                <i className="fa fa-sliders fa-2x"></i>
                <h3>Edite as preferências</h3>
                <p>
                  Configure seus filtros para personalizar sua experiência e visualizar somente o que mais te interessa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <a className="pull-right">
                  <i className="fa fa-cogs fa-2x"></i>
                </a>
                <div className="media-body">
                  <h3 className="media-heading">Filtros</h3>
                  Filtre sua experiência na timeline.
                </div>
              </div>
              <div className="media text-right feature">
                <a className="pull-right">
                  <i className="fa fa-envelope fa-2x"></i>
                </a>
                <div className="media-body">
                  <h3 className="media-heading">Relatos</h3>
                  Dê sua visão sobre um curso ou matéria.
                </div>
              </div>
              <div className="media text-right feature">
                <a className="pull-right">
                  <i className="fa fa-users fa-2x"></i>
                </a>
                <div className="media-body">
                  <h3 className="media-heading">Anônimo</h3>
                  A integridade de sua identidade assegurada.
                </div>
              </div>
              <div className="media text-right feature">
                <a className="pull-right">
                  <i className="fa fa-comments fa-2x"></i>
                </a>
                <div className="media-body">
                  <h3 className="media-heading">Comente</h3>
                  Deixe sua mensagem para o público da UnB.
                </div>
              </div>
              <div className="media text-right feature">
                <a className="pull-right">
                  <i className="fa fa-calendar fa-2x"></i>
                </a>
                <div className="media-body">
                  <h3 className="media-heading">Se expresse!</h3>
                  Não fique em silêncio! Diga o que se passa.
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4" >
              <img src="/assets/img/freeze/iphone-freeze.png" className="img-responsive scrollpoint sp-effect5" alt="" />
            </div>

            <div className="col-md-4 col-sm-4 scrollpoint sp-effect2">
              <div className="media feature">
                <a className="pull-left">
                  <i className="fa fa-map-marker fa-2x"></i>
                </a>
                <div className="media-body">
                  <h3 className="media-heading">Dê Dicas</h3>
                  Repasse suas experiências a outros.
                </div>
              </div>

              <div className="media feature">
                <a className="pull-left">
                  <i className="fa fa-film fa-2x"></i>
                </a>
                <div className="media-body">
                  <h3 className="media-heading">Responsividade</h3>
                  Acesse de qualquer aparelho.
                </div>
              </div>
              <div className="media feature">
                <a className="pull-left">
                  <i className="fa fa-compass fa-2x"></i>
                </a>
                <div className="media-body">
                  <h3 className="media-heading">Se inteire</h3>
                  Fique antenado com as dicas dos usuários.
                  </div>
              </div>
              <div className="media feature">
                <a className="pull-left">
                  <i className="fa fa-picture-o fa-2x"></i>
                </a>
                <div className="media-body">
                  <h3 className="media-heading">Avatares aleatórios</h3>
                  Avatares não fixos ajudam no anonimato.
                </div>
              </div>
              <div className="media active feature">
                <a className="pull-left">
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

      <section id="reviews">
        <div className="container">
          <div className="section-heading inverse scrollpoint sp-effect3">
            <h1>Avaliações</h1>
            <div className="divider"></div>
            <p>Veja o que alguns usuários estão comentando</p>
          </div>

          <div className="row">
            <div className="col-md-10 col-md-push-1 scrollpoint sp-effect3">
              <div className="review-filtering">
                <div className="review">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="review-person">
                        <img src={getRandomAvatar()} alt="" className="img-responsive" />
                      </div>
                    </div>

                    <div className="col-md-10">
                      <div className="review-comment">
                        <h3>“Fui mal recebido por alguns veteranos da FCE! Confesso que fiquei chateado...”</h3>
                        <p>
                          - Anon {Math.floor(Math.random() * 1000)}
                          <span>
                            <i className="fa fa-star fa-lg"></i>
                            <i className="fa fa-star fa-lg"></i>
                            <i className="fa fa-star fa-lg"></i>
                            <i className="fa fa-star fa-lg"></i>
                            <i className="fa fa-star-o fa-lg"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review rollitin">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="review-person">
                        <img src={getRandomAvatar()} alt="" className="img-responsive" />
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="review-comment">
                        <h3>“Reprovei dois alunos hoje por estarem andando de bike na aula. Sério, não existem mais limites na UnB!”</h3>
                        <p>
                          - Anon {Math.floor(Math.random() * 1000)}
                          <span>
                            <i className="fa fa-star fa-lg"></i>
                            <i className="fa fa-star fa-lg"></i>
                            <i className="fa fa-star fa-lg"></i>
                            <i className="fa fa-star-half-o fa-lg"></i>
                            <i className="fa fa-star-o fa-lg"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review rollitin">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="review-person">
                        <img src={getRandomAvatar()} alt="" className="img-responsive" />
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="review-comment">
                        <h3>“Já reprovei Engenharia e Ambiente 5 vezes, mas dessa vez vai. :)”</h3>
                        <p>
                          - Anon {Math.floor(Math.random() * 1000)}
                          <span>
                            <i className="fa fa-star fa-lg"></i>
                            <i className="fa fa-star fa-lg"></i>
                            <i className="fa fa-star fa-lg"></i>
                            <i className="fa fa-star-half-o fa-lg"></i>
                            <i className="fa fa-star-o fa-lg"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <img src="/assets/img/freeze/freeze-angled2.png" alt="" />
              </div>

              <div className="platforms">
                <a href="#support" className="btn btn-primary inverse scrollpoint sp-effect1">
                  <span>Faça seu cadastro</span><br />
                  <b>AGORA</b>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      <footer>
        <div className="container">
          <a href="/" className="scrollpoint sp-effect3">
            <img src="/assets/img/freeze/logo.png" alt="" className="logo" />
          </a>

          <div className="social">
            <a className="scrollpoint sp-effect3"><i className="fa fa-twitter fa-lg"></i></a>
            <a className="scrollpoint sp-effect3"><i className="fa fa-google-plus fa-lg"></i></a>
            <a className="scrollpoint sp-effect3"><i className="fa fa-facebook fa-lg"></i></a>
          </div>

          <div className="rights">
            <p>Copyright &copy; 2014</p>
            <p>Template by <a href="http://www.scoopthemes.com" target="_blank" rel="noopener noreferrer">ScoopThemes</a></p>
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default NewHome;