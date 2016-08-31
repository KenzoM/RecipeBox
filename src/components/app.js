import React, { Component } from 'react';
import Header from './header'
import RecipeBox from '../containers/recipebox';
import AddRecipeButton from '../containers/add_recipe';
import style from '../stylesheets/styles.scss';

export default class App extends Component {
  render() {
    return (
      <div id="example">
        <Header />
        <RecipeBox />
        <AddRecipeButton />
      </div>
    );
  }
}
