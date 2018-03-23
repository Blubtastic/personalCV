import React, {Component} from 'react'
import ms from '../../images/hs_logo.png';
import io from '../../images/io.png';
import propeller from '../../images/propeller_simple2.png';
import down from '../../images/toggle-down.png';
import up from '../../images/toggle-up.png';

export default class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      navClass: "collapsed",
      imgPath: down,
      collapsed: true
    }
  }

  //Toggles the className that expands/collapses the section
  toggleAbout(){
    if(this.state.collapsed){
      this.setState({collapsed: !this.state.collapsed});
      this.setState({navClass: "extended"});
      this.setState({imgPath: up});
    }
    else{
      this.setState({collapsed: !this.state.collapsed});
      this.setState({navClass: "collapsed"});
      this.setState({imgPath: down});
    }
  }

  render() {
    return(
      <div>
        <div id="personal" className={'page-section column ' + this.state.navClass}>

          <div className="articles">
            <h1>My voluntary work</h1>
            <div className="container about-item">
              <div>
                <img className="bubble-img"src={ms} alt="logo" />
              </div>
              <div className="text-left">
                <h2>Hackerspace NTNU</h2>
                <p className="narrow-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo ligula eget dolor.
                  Aenean massa. Cum sociis natoque penatibus et magnis dis
                </p>
              </div>
            </div>

            <div className="container about-item">
              <div>
                <img className="bubble-img"src={io} alt="logo" />
              </div>
              <div className="text-left">
                <h2>Informatics Band</h2>
                <p className="narrow-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo ligula eget dolor.
                  Aenean massa. Cum sociis natoque penatibus et magnis dis
                </p>
              </div>
            </div>

            <div className="container about-item">
              <div>
                <img className="bubble-img"src={propeller} alt="logo" />
              </div>
              <div className="text-left">
                <h2>Trondheim Propeller Hat Club</h2>
                <p className="narrow-text">
                  HACKERSPACE, Online Band <br/>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo ligula eget dolor.
                  Aenean massa. Cum sociis natoque penatibus et magnis dis
                </p>
              </div>
            </div>
          </div>
          <hr className="horline"/>
          <div className="articles">
            <h1>My hobbies and interests</h1>

            <div className="about-item">
              <p>
                Climbing, drumming, training, hanging out w/ friends, video games.<br/>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
            </div>
          </div>


        </div>
        <div className="expandBar">
          <div>
            <div onClick={x => this.toggleAbout()}><img src={this.state.imgPath} alt="button"/></div>
          </div>
        </div>
      </div>
    )
  }
}
