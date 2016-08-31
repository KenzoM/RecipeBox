import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">FCC Recipe Box</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">FreeCodeCamp</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
