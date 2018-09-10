import React, {Component} from 'react'

import git from '../../images/git.png';
import gmail from '../../images/gmail.png';
import face from '../../images/face.png';
import linkedIn from '../../images/linkedIn.png';
import up from '../../images/go_to_top.png';

export default class Cover extends Component {
  render() {
    return(

        <div className="footer page-section column" id="contact">
          <div className="mountain-range"></div>
          <div className="footer-content">
            <div>
              <h1>Contact me</h1>
                <p>You can contact me via mail or LinkedIn, or visit my Github page for more cool stuff</p>
            </div>
            <div className="bubbles-container">
              <div>
                <a href="https://www.linkedin.com/in/martin-stor%C3%B8deg%C3%A5rd-987498170/"><img src={linkedIn} className="bubble-img" alt="git" /></a>
                <a href="mailto:martin.storodegard@gmail.com"><img src={gmail} className="bubble-img" alt="gmail" /></a>
                </div>
              <div>
                <a href="https://www.facebook.com/martin.storodegard"><img src={face} className="bubble-img" alt="face" /></a>
                <a href="https://github.com/Blubtastic"><img src={git} className="bubble-img" alt="git" /></a>
              </div>
            </div>
            <div className="move_to_top">
              <a href="#top">
                <img src={up} alt="goToTop" />
              </a>
            </div>
          </div>
      </div>
    )
  }
}
