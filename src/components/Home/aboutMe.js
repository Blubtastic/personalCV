import React, {Component} from 'react'

import me from '../../images/me.png'

export default class AboutMe extends Component {
  render() {
    return(
      <div id="me">
        <div className="page-section paragraph">

          <div className="intro">
            <img src={me} className="bubble-img-large"alt="me"/>
            <div className="narrow-text">
              <h2>Short about me</h2>
              <p>
                I'm currently studying Informatics at my 5th year of a master's degree at NTNU. I love developing web pages and creating stuff, although my specialization is in software systems.
              </p>
              </div>
            </div>
        </div>
      </div>

    )
  }
}
