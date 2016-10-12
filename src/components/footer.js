import React, { Component } from 'react';
// import { Footer,  copyrights} from 'react-materialize';
import AddRecipeButton from '../containers/add_recipe';
const url = 'https://freecodecamp.com'

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer" id="recipe-footer">
        <div className="container">
          <div className="row">
            <div className="col s6">
              <h5 className="white-text">Build a Recipe Box</h5>
              <p className="grey-text text-lighten-4">Assignment from FreeCodeCamp</p>
            </div>
            <div className="col s6">
              <AddRecipeButton />
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2016 Copyright Kenzo Mendoza
          <a className="grey-text text-lighten-4 right" href="#!">FreeCodeCamp</a>
          </div>
        </div>
      </footer>
    );
  }
}
