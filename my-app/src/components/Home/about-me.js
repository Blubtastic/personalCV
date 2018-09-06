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
              <img className="bubble-img"src={ms} alt="logo" />
              <div className="text-left">
                <h2>Hackerspace NTNU</h2>
                <p className="narrow-text">
                  I was a member of the student organization HACKERSPACE NTNU for 3 years, which focuses on helping students realize their tech projects by providing equipment, knowledge and a place to work.
                  During this time i was responsible for promoting the organization through creating posters, organizing and so on.
                </p>
              </div>
            </div>

            <div className="container about-item">
              <img className="bubble-img"src={io} alt="logo" />
              <div className="text-left">
                <h2>Informatics Band</h2>
                <p className="narrow-text">
                  I am drumming for the recently created Online band, which mainly focuses on playing concerts for various events for the student organization Online.
                  We have weekly rehearsals, but mostly play for fun.
                </p>
              </div>
            </div>

            <div className="container about-item">
              <img className="bubble-img"src={propeller} alt="logo" />
              <div className="text-left">
                <h2>Trondheim Propeller Hat Club</h2>
                <p className="narrow-text">
                  As a goofy hobby project, me and another student Sølve Bø Hunvik created a group called Trondheim Propeller hat club, which arranges various social events where
                  everyone are welcome as long as they are wearing a propeller hat. We currently have about 100 members.
                </p>
              </div>
            </div>
          </div>

          {/*
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
        */}

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
