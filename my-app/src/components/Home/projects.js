import React, {Component} from 'react'


import google_maps from '../../images/google_maps3.png'
import code_bubble from '../../images/code_bubble.png'
import genetic from '../../images/genetic.png'
import angular from '../../images/angular.png'
import this_site from '../../images/react.png'
import propeller from '../../images/propeller_simple.png'

export default class Projects extends Component {
  title = "hello world";
  content = "description of the article";
  img= "../../images/google_maps.png";

  render() {
    return(
      <div className="column projects-container page-section secondary" id="work">
        <div className="projects">

          <div>
            <h1>NTNU Projects</h1>
            <div className="project left-project">
            <img src={google_maps} alt="some-img"/>
              <div>
                <h3>Neural Network Map Analysis</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa.
                </p>
              </div>
            </div>

            <div className="project left-project">
              <img src={angular} alt="some-img"/>
              <div>
                <h3> Shopping website in Angular.js</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa.
                </p>
              </div>
            </div>

            <div className="project left-project">
            <img src={genetic} alt="some-img"/>
              <div>
                <h3>Genetic Algorithm for Vehicle Routing</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h1>Personal Projects</h1>
            <div className="project right-project">
            <img src={this_site} alt="some-img"/>
              <div>
                <h3>This webpage</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa.
                </p>
              </div>
            </div>

            <div className="project right-project">
              <img src={propeller} alt="some-img"/>
              <div>
                <h3>Trondheim Propellhattklubb</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa.
                </p>
              </div>
            </div>

            <div className="project right-project">
            <img src={code_bubble} alt="some-img"/>
              <div>
                <h3>Raspberry PI Webserver</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa.
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    )
  }
}
