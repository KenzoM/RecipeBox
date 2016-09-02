import React, { Component } from 'react';
import { Footer,  copyrights} from 'react-materialize';
const url = 'https://freecodecamp.com'

export default class Header extends Component {
  render() {
    return (
      <Footer id='recipe-footer' copyrights="&copy; 2016 Copyright Text"
        moreLinks={
          <a className="grey-text text-lighten-4 right" href={url}>FreeCodeCamp</a>
        }
        className='example'
      >
          <h5 className="white-text">Build a Recipe Box</h5>
          <p
            className="grey-text text-lighten-4">
            Assignment from the freeCodeCamp course.
          </p>
      </Footer>
    );
  }
}
