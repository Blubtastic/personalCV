import React, {Component} from 'react'
import hs from '../../images/hs_logo.png';
import output from '../../images/io.png';
import propeller from '../../images/propeller_simple2.png';
import down from '../../images/toggle-down.png';
import up from '../../images/toggle-up.png';

import Position from './Position';

export default class Voluntary extends Component {
  constructor(props){
    super(props);
    this.state = {
      navClass: "collapsed",
      imgPath: down,
      collapsed: true
    }
  }

  //Show more/show less. Toggles the className that expands/collapses the section
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
            <Position image={hs} title={'Hackerspace NTNU'} description={'I was a member of the student organization HACKERSPACE NTNU for 3 years, which focuses on helping students realize their tech projects by providing equipment, knowledge and a place to work. During this time i was responsible for promoting the organization through creating posters, organizing and so on.'} />
            <Position image={output} title={'Informatics Band'} description={'I am drumming for the recently created Online band, which mainly focuses on playing concerts for various events for the student organization Online. We have weekly rehearsals, but mostly play for fun.'} />
            <Position image={propeller} title={'Trondheim Propeller Hat Club'} description={'As a goofy hobby project, me and another student Sølve Bø Hunvik created a group called Trondheim Propeller hat club, which arranges various social events where everyone are welcome as long as they are wearing a propeller hat. We currently have about 100 members.'} />
          </div>

          {/*
          <hr className="horline"/>
          <h1>My hobbies and interests</h1>
          <p>
            Climbing, drumming, training, hanging out w/ friends, video games.<br/>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
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
