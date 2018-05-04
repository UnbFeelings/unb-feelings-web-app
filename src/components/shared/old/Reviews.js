import React from 'react'

class Reviews extends React.Component {
  render() {
    return (

      <section id="reviews">
          <div className="container">
              <div className="section-heading inverse scrollpoint sp-effect3">
                  <h1>Expresse</h1>
                  <div className="divider"></div>
                  <p>Mostre aos outros o que você tem a contar sobre a UnB.</p>
              </div>

              <div className="row">
                  <div className="col-md-10 col-md-push-1 scrollpoint sp-effect3">
                      <div className="review-filtering">
                          <div className="review">
                              <div className="row">
                                  <div className="col-md-2">
                                      <div className="review-person">
                                          <img src={require("../assets/img/others/Fabio.jpg")} alt="" className="img-responsive"/>
                                      </div>
                                  </div>

                                  <div className="col-md-10">
                                      <div className="review-comment">
                                          <h3>“Já reprovei Engenharia e Ambiente 5 vezes, mas dessa vez vai. :)”</h3>
                                          <p>
                                              - Fábio Teixeira
                                          </p>
                                          <p>
                                              <span>
                                                  <i className="fa fa-heart fa-lg"></i>
                                                  <i className="fa fa-heart fa-lg"></i>
                                                  <i className="fa fa-heart fa-lg"></i>
                                                  <i className="fa fa-heart fa-lg"></i>
                                                  <i className="fa fa-heart-o fa-lg"></i>
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
                                          <img src={require("../assets/img/others/Eliseu.jpg")} alt="" className="img-responsive"/>
                                      </div>
                                  </div>
                                  <div className="col-md-10">
                                      <div className="review-comment">
                                          <h3>“Fui mal recebido por alguns veteranos da FCE! Confesso que fiquei chateado...”</h3>
                                          <p>
                                              - Eliseu Egewarth

                                          </p>
                                          <p>
                                              <span>
                                                  <i className="fa fa-heart fa-lg"></i>
                                                  <i className="fa fa-heart fa-lg"></i>
                                                  <i className="fa fa-heart-o fa-lg"></i>
                                                  <i className="fa fa-heart-o fa-lg"></i>
                                                  <i className="fa fa-heart-o fa-lg"></i>
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
                                          <img src={require("../assets/img/others/Carla.jpg")} alt="" className="img-responsive"/>
                                      </div>
                                  </div>

                                  <div className="col-md-10">
                                      <div className="review-comment">
                                          <h3>“Reprovei dois alunos hoje por estarem andando de bike na aula. Sério, não existem mais limites na UnB!”</h3>
                                          <p>

                                              - Carla Rocha
                                          </p>
                                          <p>
                                              <span>
                                                  <i className="fa fa-heart fa-lg"></i>
                                                  <i className="fa fa-heart fa-lg"></i>
                                                  <i className="fa fa-heart fa-lg"></i>
                                                  <i className="fa fa-heart-o fa-lg"></i>
                                                  <i className="fa fa-heart-o fa-lg"></i>
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


    )
  }

}

export default Reviews;
