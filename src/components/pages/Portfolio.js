import React from 'react';
import PortfolioList from '../PortfolioList';

function Portfolio() {
  return (
    <section
      id="recent-work"
      className="recent-work text-white"
      title="John Lai's Full Stack Portfolio">
      <h3 className="uppercase">Recent Work</h3>
      <PortfolioList />

      {/* <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="text-uppercase text-white">Recent Work</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="project-container img-on-left">
                <div className="img-container half-containers">
                  <a href="https://www.meritford.com/" target="_blank">
                    <img
                      src="./assets/img/folio/merit-ford.jpg"
                      alt="Merit Ford Website"
                      className="img-fluid folio-img-size" />
                  </a>
                </div>
                <div className="folio-container half-containers">
                  <div className="triangle watch">
                    <h4>1</h4>
                  </div>
                  <div
                    className="project-title text-white font-weight-bold pl-4 mb-4">
                    <h5 className="text-uppercase mb-3">Merit Ford</h5>
                    <a
                      href="https://www.meritford.com/"
                      className="btn-primary"
                      target="_blank">
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 px-md-3">
              <div className="project-container img-on-right">
                <div className="folio-container half-containers">
                  <div className="triangle watch">
                    <h4>2</h4>
                  </div>
                  <div
                    className="project-title text-white font-weight-bold pr-4 mb-4">
                    <h5 className="text-uppercase mb-3">Gateway Hyundai</h5>
                    <a
                      href="https://hyundaigateway.com/"
                      className="btn-primary"
                      target="_blank">
                      View Live
                    </a>
                  </div>
                </div>
                <div className="img-container half-containers">
                  <a href="https://hyundaigateway.com/" target="_blank">
                    <img
                      src="./assets/img/folio/gateway-hyundai.jpg"
                      alt="Gateway Hyundai Website"
                      className="img-fluid folio-img-size" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-md-3">
              <div className="project-container img-on-left">
                <div className="img-container half-containers">
                  <a href="https://www.petawawa-toyota.com/" target="_blank">
                    <img src="./assets/img/folio/petawawa-toyota.jpg"
                    alt="Petawawa Toyota Website className="img-fluid
                    folio-img-size" />
                  </a>
                </div>
                <div className="folio-container half-containers">
                  <div className="triangle watch">
                    <h4>3</h4>
                  </div>
                  <div
                    className="project-title text-white font-weight-bold pl-4 mb-4">
                    <h5 className="text-uppercase mb-3">Petawawa Toyota</h5>
                    <a
                      href="https://www.petawawa-toyota.com/"
                      className="btn-primary"
                      target="_blank">
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 px-md-3">
              <div className="project-container img-on-right">
                <div className="folio-container half-containers">
                  <div className="triangle watch">
                    <h4>4</h4>
                  </div>
                  <div
                    className="project-title text-white font-weight-bold pr-4 mb-4">
                    <h5 className="text-uppercase mb-3">ASL Sign Quiz</h5>
                    <a
                      href="https://johnlai.ca/asl-alphabet-quiz/"
                      className="btn-primary"
                      target="_blank">
                      View Live
                    </a>
                  </div>
                </div>
                <div className="img-container half-containers">
                  <a
                    href="https://johnlai.ca/asl-alphabet-quiz/"
                    target="_blank">
                    <img
                      src="./assets/img/folio/asl-quiz.jpg"
                      alt="Asl Fingerspelling Quiz"
                      className="img-fluid folio-img-size" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-md-3">
              <div className="project-container img-on-left">
                <div className="img-container half-containers">
                  <a href="https://johnlai.ca/movies-trivia/" target="_blank">
                    <img
                      src="./assets/img/folio/movie-trivia.jpg"
                      alt="Movie Trivia Javascript Game"
                      className="img-fluid folio-img-size" />
                  </a>
                </div>
                <div className="folio-container half-containers">
                  <div className="triangle watch">
                    <h4>5</h4>
                  </div>
                  <div
                    className="project-title text-white font-weight-bold pl-4 mb-4">
                    <h5 className="text-uppercase mb-3">Movie Trivia API</h5>
                    <a
                      href="https://johnlai.ca/movies-trivia/"
                      className="btn-primary"
                      target="_blank">
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 px-md-3">
              <div className="project-container img-on-right">
                <div className="folio-container half-containers">
                  <div className="triangle watch">
                    <h4>6</h4>
                  </div>
                  <div
                    className="project-title text-white font-weight-bold pr-4 mb-4">
                    <h5 className="text-uppercase mb-3">Travel Me App</h5>
                    <a
                      href="https://johnxlai.github.io/travel-app/"
                      className="btn-primary"
                      target="_blank">
                      View Live
                    </a>
                  </div>
                </div>
                <div className="img-container half-containers">
                  <a
                    href="https://johnxlai.github.io/travel-app/"
                    target="_blank">
                    <img
                      src="./assets/img/folio/travel-me.png"
                      alt="Travel Me app"
                      className="img-fluid folio-img-size" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-md-3">
              <div className="project-container img-on-left">
                <div className="img-container half-containers">
                  <a
                    href="https://asl-fingerspelling-game.herokuapp.com"
                    target="_blank">
                    <img
                      src="./assets/img/folio/fingerspelling.png"
                      alt="Movie Trivia Javascript Game"
                      className="img-fluid folio-img-size" />
                  </a>
                </div>
                <div className="folio-container half-containers">
                  <div className="triangle watch">
                    <h4>5</h4>
                  </div>
                  <div
                    className="project-title text-white font-weight-bold pl-4 mb-4">
                    <h5 className="text-uppercase mb-3">FINGER SPELLING GAME</h5>
                    <a
                      href="https://asl-fingerspelling-game.herokuapp.com"
                      className="btn-primary"
                      target="_blank">
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </section>
  );
}
export default Portfolio;
