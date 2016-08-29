import React, { Component } from 'react';
import Header from './header'
import RecipeBox from '../containers/recipebox';
import AddRecipeButton from '../containers/add_recipe';

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
