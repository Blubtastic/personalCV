import React, { Component } from 'react';
//import {Route, Link, HashRouter} from 'react-router-dom'
import './App.css';

import Home from './components/Home'

 //Can implement router here if i'm gonna add more pages
class App extends Component {
  componentDidMount(){
    document.title = "Martin";
  }
  render() {
    return (
      <div>
        <Home/>
      </div>
    );
  }
}

export default App;
