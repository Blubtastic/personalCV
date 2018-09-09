import React, {Component} from 'react'


import bachelor from '../../images/bachelor.png'
import genetic from '../../images/genetic.png'
import angular from '../../images/angular.png'
import this_site from '../../images/react.png'
import flowmotion from '../../images/flowmotion.png'
import raspberry_pi from '../../images/raspberryPI.png'


import Project from '../Project/index.js'

export default class Projects extends Component {
  title = "hello world";
  content = "description of the article";
  img= "../../images/google_maps.png";

  render() {
    return(
      <div className="column projects-container page-section secondary inner-shadow" id="work">
        <h1>My Projects </h1>
        <div className="projects">
            <Project link={"https://github.com/Blubtastic/personalCV"} image={this_site} title={"REACT: "} title2={"This webpage"} description={"This site is developed in React using mostly plain HTML, CSS & Javascript. It is created and designed by me, and is hosted at github pages. "} />
            <Project link={"http://careers.flowmotion.co"} image={flowmotion} title={"FLOWMOTION: "} title2={"Recruiting Webpage in React"} description={"A responsive webpage for the startup company Flowmotion using React. Meant for recruiting employees, and made from InVision design templates."} />
            <Project link={"https://github.com/ulvestad/MapAnalysis-DIRMIN"} image={bachelor} title={"BACHELOR: "} title2={"Machine learning"} description={"A desktop application made for discovering unregistered quarries by systematically scanning satelite photos using a trained Neural Network"} />
            <Project link={"https://github.com/Blubtastic/angularShoppwingWebsite"} image={angular} title={"ANGULAR: "} title2={"Shopping website"} description={"A full stack shopping website solution made in Angular. Node.js was used for the backend, and MongoDB as the database."} />
            <Project link={"https://github.com/Blubtastic/genetic_algorithm"} image={genetic} title={"PYTHON: "} title2={"Genetic Algorithm for Vehicle Routing"} description={"An AI project for solving complex problems by creating algorithms inspired by genetics. Made in Python to find optimal solutions for complex problems. "} />
            <Project  image={raspberry_pi} title={"RASPBERRY PI: "} title2={"Web server"} description={"A hobby project where i implemented an Apache web server on a Raspberry PI, and made it accessible to the internet through IPv6."} />
        </div>
      </div>
    )
  }
}
