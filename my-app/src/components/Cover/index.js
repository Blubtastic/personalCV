import React, {Component} from 'react'



export default class Cover extends Component {
  render() {
    return(
      <div>
        <div>
          <div className="cover_text parallax_layer3">
            <h3>Hey there, i&#39;m <h1>Martin Storødegård</h1></h3>
          </div>
          <div className="cover_text cover_img parallax_layer2"></div>
        </div>
        <div className="parallax_container">
          <div className="parallax_layer parallax_layer_img3 image_layer"></div>
          <div className="parallax_layer parallax_layer_img2 image_layer"></div>
          <div className="parallax_layer parallax_layer_img1 image_layer"></div>
        </div>
      </div>
    )
  }
}
