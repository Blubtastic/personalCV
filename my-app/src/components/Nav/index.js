import React, {Component} from 'react'

import ms from '../../images/ms3.png';

export default class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      navClass: "container navbox",
      link1: "",
      link2: "",
      link3: "",
    }
    //Stupid shit for binding the object
    this.handleScroll = this.handleScroll.bind(this);
  }


  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    if (document.documentElement.scrollTop === 0){
      this.setState(() => {
        return {navClass: "container navbox"}
      });
    }
    else{
      this.setState(() => {
        return {navClass: "container sticky"}
      });
    }
  }

  selectedLink(link){
    if(link === 0){
      this.setState({link1: ""});
      this.setState({link2: ""});
      this.setState({link3: ""});
    }
    else if(link === 1){
      this.setState({link1: "active"});
      this.setState({link2: ""});
      this.setState({link3: ""});
    }
    else if(link === 2){
      this.setState({link1: ""});
      this.setState({link2: "active"});
      this.setState({link3: ""});
    }
    else{
      this.setState({link1: ""});
      this.setState({link2: ""});
      this.setState({link3: "active"});
    }
  }

  render() {
    return(
      <div className={this.state.navClass}>
        <div className="row">
          <div className="logo-container">
            <a href="#top" onClick={x => this.selectedLink(0)} ><img src={ms} alt="logo" width="90" height="40" /></a>
          </div>
          <div className="nav-container">
            <nav className="nav">
              <ul>
                <li><a href="#work" onClick={x => this.selectedLink(1)} >Work</a></li>
                <li><a href="#personal" onClick={x => this.selectedLink(2)} >Personal</a></li>
                <li><a href="#contact" onClick={x => this.selectedLink(3)} >Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
