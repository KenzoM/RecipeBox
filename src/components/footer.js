import React, { Component } from 'react';
import { Footer,  copyrights} from 'react-materialize';

export default class Header extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Made by Kenzo</h5>
              <p className="grey-text text-lighten-4">Add text later</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2014 Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    );
  }
}
