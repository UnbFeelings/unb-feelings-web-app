import React from 'react'


class Header extends React.Component {
  render() {
    return (
      <header>
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                  <div className="container">
                      <div className="navbar-header">
                          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                              <span className="fa fa-bars fa-lg"></span>
                          </button>
                          <a className="navbar-brand" href="index.html">
                              <img src={require("../assets/img/freeze/logo.png")} alt="" className="logo"/>
                          </a>
                      </div>

                      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                          <ul className="nav navbar-nav navbar-right">
                              <li><a href="#about">sobre</a>
                              </li>
                              <li><a href="#reviews">expresse</a>
                              </li>
                              <li><a href="#features">funcionalidades</a>
                              </li>
                              <li><a href="#getApp">praticidade</a>
                              </li>
                              <li><a href="#support">participe</a>
                              </li>
                              <li><a className="getApp" href="#">entrar</a>
                              </li>
                          </ul>
                      </div>
                  </div>
          </nav>


          <div className="tp-banner-container">
              <div className="tp-banner" >
                  <ul>
                      <li data-transition="fade" data-slotamount="7" data-masterspeed="1500" >
                          <img src={require("../assets/img/transparent.png")}  alt="slidebg1"  data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat"/>
                          <div className="tp-caption lfl fadeout hidden-xs"
                              data-x="left"
                              data-y="bottom"
                              data-hoffset="30"
                              data-voffset="0"
                              data-speed="500"
                              data-start="700"
                              data-easing="Power4.easeOut">
                              <img src={require("../assets/img/freeze/Slides/hand-freeze.png")} alt=""/>
                          </div>

                          <div className="tp-caption lfl fadeout visible-xs"
                              data-x="left"
                              data-y="center"
                              data-hoffset="700"
                              data-voffset="0"
                              data-speed="500"
                              data-start="700"
                              data-easing="Power4.easeOut">
                              <img src={require("../assets/img/freeze/iphone-freeze.png")} alt=""/>
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
                              <a href="#about" className="btn btn-primary inverse btn-lg">DESCUBRA</a>
                          </div>
                          <div className="tp-caption sfr hidden-xs" data-x="730" data-y="center" data-hoffset="0" data-voffset="85" data-speed="1500" data-start="1900" data-easing="Power4.easeOut">
                              <a href="#support" className="btn btn-default btn-lg">PARTICIPE</a>
                          </div>

                      </li>
                      <li data-transition="zoomout" data-slotamount="7" data-masterspeed="1000" >
                          <img src={require("../assets/img/transparent.png")}  alt="slidebg1"  data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat"/>
                          <div className="tp-caption lfb fadeout hidden-xs"
                              data-x="center"
                              data-y="bottom"
                              data-hoffset="0"
                              data-voffset="0"
                              data-speed="1000"
                              data-start="700"
                              data-easing="Power4.easeOut">
                              <img src={require("../assets/img/freeze/Slides/freeze-slide2.png")} alt=""/>
                          </div>

                          <div className="tp-caption large_white_light sft" data-x="center" data-y="200" data-hoffset="0" data-voffset="0" data-speed="1000" data-start="1400" data-easing="Power4.easeOut">
                              Conte como se sente! <i className="fa fa-heart"></i>
                          </div>


                      </li>

                      <li data-transition="zoomout" data-slotamount="7" data-masterspeed="1000" >
                          <img src={require("../assets/img/transparent.png")}  alt="slidebg1"  data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat"/>
                          <div className="tp-caption customin customout hidden-xs"
                              data-x="right"
                              data-y="center"
                              data-hoffset="0"
                              data-customin="x:50;y:150;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.5;scaleY:0.5;skewX:0;skewY:0;opacity:0;transformPerspective:0;transformOrigin:50% 50%;"
                          data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                              data-voffset="50"
                              data-speed="1000"
                              data-start="700"
                              data-easing="Power4.easeOut">
                              <img src={require("../assets/img/freeze/Slides/family-freeze.png")} alt=""/>
                          </div>

                          <div className="tp-caption customin customout visible-xs"
                              data-x="center"
                              data-y="center"
                              data-hoffset="0"
                              data-customin="x:50;y:150;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.5;scaleY:0.5;skewX:0;skewY:0;opacity:0;transformPerspective:0;transformOrigin:50% 50%;"
                          data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                              data-voffset="0"
                              data-speed="1000"
                              data-start="700"
                              data-easing="Power4.easeOut">
                              <img src={require("../assets/img/freeze/Slides/family-freeze.png")} alt=""/>
                          </div>

                          <div className="tp-caption lfb visible-xs" data-x="center" data-y="center" data-hoffset="0" data-voffset="400" data-speed="1000" data-start="1200" data-easing="Power4.easeOut">
                              <a href="#" className="btn btn-primary inverse btn-lg">Purchase</a>
                          </div>


                          <div className="tp-caption mediumlarge_light_white sfl hidden-xs" data-x="left" data-y="center" data-hoffset="0" data-voffset="-50" data-speed="1000" data-start="1000" data-easing="Power4.easeOut">
                             Expresse seus sentimentos
                          </div>
                          <div className="tp-caption mediumlarge_light_white sft hidden-xs" data-x="left" data-y="center" data-hoffset="0" data-voffset="0" data-speed="1000" data-start="1200" data-easing="Power4.easeOut">
                             de qualquer lugar!
                          </div>
                          <div className="tp-caption small_light_white sfb hidden-xs" data-x="left" data-y="center" data-hoffset="0" data-voffset="80" data-speed="1000" data-start="1600" data-easing="Power4.easeOut">
                             <p>Ficou feliz porque tirou uma boa nota? <br/> Sentiu que foi prejudicado pela postura de alguém? <br/> Quer desabafar ou dar dicas aos outros alunos?</p>
                          </div>

                          <div className="tp-caption lfl hidden-xs" data-x="left" data-y="center" data-hoffset="0" data-voffset="160" data-speed="1000" data-start="1800" data-easing="Power4.easeOut">
                              <a href="#" className="btn btn-primary inverse btn-lg"> CONTE A TODOS ! </a>
                          </div>

                      </li>

                  </ul>
              </div>
          </div>


      </header>
    )
  }
}

export default Header;
