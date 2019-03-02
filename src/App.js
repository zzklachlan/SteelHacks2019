import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToiletBar from './ToiletParts/ToiletBar.js';
import Home from "./Pages/Home.js";
import Add from "./Pages/Add.js";
import Search from "./Pages/Search.js"
import ToiletBgd from './toiletbackground.PNG';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <ToiletBar/>
          <Route path='/Home' component={Home}/>
          <Route path='/Add' component={Add}/>
          <Route path='/Search' component={Search}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
