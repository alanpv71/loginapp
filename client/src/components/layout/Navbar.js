import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper orange">
          <div class="brand-logo"> <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo left white-text">
            Home | GetMyBus</Link></div>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="">Book Now</a></li>
      
        <li><a href="collapsible.html">About</a></li>
      </ul>
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo left orange-text">
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;