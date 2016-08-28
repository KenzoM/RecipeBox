import React, { Component } from 'react';
import Header from './header'
import RecipeBox from '../containers/recipebox';
import AddRecipeButton from '../containers/addrecipebutton';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RecipeBox />
        <AddRecipeButton />
      </div>
    );
  }
}
