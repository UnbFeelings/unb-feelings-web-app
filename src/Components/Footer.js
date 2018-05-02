import React from 'react'

class Footer extends React.Component {

  render() {
    return (

      <footer>
          <div class="container">
              <a href="#" class="scrollpoint sp-effect3">
                  <img src={require("../assets/img/freeze/logo.png")} alt="" class="logo"/>
              </a>
              <div class="social">
                  <a href="#" class="scrollpoint sp-effect3"><i class="fa fa-twitter fa-lg"></i></a>
                  <a href="#" class="scrollpoint sp-effect3"><i class="fa fa-google-plus fa-lg"></i></a>
                  <a href="#" class="scrollpoint sp-effect3"><i class="fa fa-facebook fa-lg"></i></a>
              </div>
              <div class="rights">
                  <p>Copyright &copy; 2018</p>
                  <p>Template by <a href="http://www.scoopthemes.com" target="_blank">ScoopThemes</a></p>
              </div>
          </div>
      </footer>
    )
  }

}
export default Footer;
