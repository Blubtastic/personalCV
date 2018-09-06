import React, {Component} from 'react'


import bachelor from '../../images/bachelor.png'
import code_bubble from '../../images/code_bubble.png'
import genetic from '../../images/genetic.png'
import angular from '../../images/angular.png'
import this_site from '../../images/react.png'
import propeller from '../../images/propeller_simple.png'
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
            <Project image={this_site} title={"REACT: "} title2={"This webpage"} description={"I designed and developed this site as a personal project to improve my web development skills. I took inspiration from similar sites, and coded as much as possible from scratch to improve my understanding of HTML, CSS & Javascript. "} />
            <Project image={bachelor} title={"BACHELOR: "} title2={"Machine learning for DIRMIN/Bouvet"} description={"A system for discovering unregistered quarries by systematically scanning satelite photos using a Neural Network, which was created along with 5 other bachelor students as a desktop application."} />
            <Project image={genetic} title={"PYTHON: "} title2={"Genetic Algorithm for Vehicle Routing"} description={"An AI project for solving complex problems by creating algorithms inspired by genetics. Me and another student used Python to find optimal solutions for various complex problems. "} />

            <Project image={flowmotion} title={"FLOWMOTION: "} title2={"Recruiting Webpage in React"} description={"A responsive webpage for the startup company Flowmotion using React. This page is meant for recruiting new employees for the company, and was made from InVision design templates."} />
            <Project image={angular} title={"ANGULAR: "} title2={"Shopping website"} description={"A full stack shopping website solution in Angular as a part of a web development course, along with three other students. Node.js was used for the backend, and MongoDB as the database."} />
            <Project image={raspberry_pi} title={"RASPBERRY PI: "} title2={"Web server"} description={"A hobby project where i implemented an Apache web server on a Raspberry PI, and made it accessible to the internet through a static IP address in order to serve web pages. "} />
        </div>
      </div>
    )
  }
}
