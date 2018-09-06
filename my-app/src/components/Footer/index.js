import React, {Component} from 'react'

import git from '../../images/git.png';
import gmail from '../../images/gmail.png';
import face from '../../images/face.png';

export default class Cover extends Component {
  render() {
    return(
      <div className="footer page-section column" id="contact">
        <div>
          <h1>Contact me</h1>
            <p>You can contact me via mail or on facebook, or visit my Github page for more cool stuff</p>
        </div>
        <div className="bubbles-container">
          <a href="mailto:martin.storodegard@gmail.com"><img src={gmail} className="bubble-img" alt="gmail" /></a>
          <a href="https://www.facebook.com/martin.storodegard"><img src={face} className="bubble-img" alt="face" /></a>
          <a href="https://github.com/Blubtastic"><img src={git} className="bubble-img" alt="git" /></a>
        </div>
      </div>
    )
  }
}
