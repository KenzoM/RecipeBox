import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import ModalBox from './modalbox'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper container">
            <a href="#" className="brand-logo">FCC Recipe Box</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="https://github.com/Neotriz/RecipeBox">Github</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
