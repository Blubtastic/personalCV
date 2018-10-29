import React, {Component} from 'react'


import Navbar from '../Navbar';
import Cover from '../Cover';
import Footer from '../Footer';

import Projects from '../Projects';
import Voluntary from '../Voluntary';
import AboutMe from './aboutMe';

//Main page for the CV website. Proabbly don't need other pages than this
export default class Home extends Component {
  render() {
    return(
      <div>
        <Navbar/>
        <Cover/>

        <AboutMe/>
        <Projects/>
        <Voluntary/>

        <Footer/>
      </div>
    )
  }
}
