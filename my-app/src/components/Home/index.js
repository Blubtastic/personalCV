import React, {Component} from 'react'

import './home.css';

import Nav from '../Nav';
import Cover from '../Cover';
import Footer from '../Footer';

import Paragraph from './paragraph';
import Projects from './projects';
import AboutMe from './about-me';

//Main page for the CV website. Proabbly don't need other pages than this
export default class Home extends Component {
  render() {
    return(
      <div className="App parallax">
        <Nav/>

        <Cover/>
        <Paragraph/>
        <Projects/>
        <AboutMe/>

        <Footer/>
      </div>
    )
  }
}
