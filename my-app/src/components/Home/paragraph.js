import React, {Component} from 'react'

import me from '../../images/me.png'

export default class Paragraph extends Component {
  render() {
    return(
      <div>
        <div className="filler"></div>
        <div className="column page-section paragraph">

          <h1>Short About Me</h1>
          <div className="intro">
            <img src={me} className="bubble-img-large"alt="me"/>
            <div className="narrow-text">
              <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              </p>
              </div>
            </div>
        </div>
      </div>


    )
  }
}
