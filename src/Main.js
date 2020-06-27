import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import AboutUs from "./AboutUs";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <div className="logo">
            
          </div>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Product">Product</NavLink></li>
            <div class="dropdown">
             <button class="dropbtn">AboutUs</button>
             <div class="dropdown-content">
              <li><NavLink to="/AboutUs">Company</NavLink></li>   
              </div>
            </div>
            
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/Product" component={Product}/>
            <Route path="/AboutUs" component={AboutUs}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;