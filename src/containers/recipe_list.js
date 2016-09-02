import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modals, Collapsible, CollapsibleItem, Collection, CollectionItem } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { deleteRecipe, editRecipe } from '../actions/index';
import shortid from 'shortid'
import Edit from './edit_recipe'

class RecipeList extends Component {
  constructor(props){
    super(props);
    this.state = {open: false}
  }
  handleRecipeNameChange(event){
    this.setState({recipeName: event.target.value})
  }
  handleUserIngredientsChange(event){
    this.setState({userIngredients: event.target.value})
  }
  render(){
    return(
      <li>
        <div className="collapsible-header">
          <i className="material-icons">toc</i>
          {this.props.recipe}
        </div>
        <div className="collapsible-body text-recipe">
          <ul className="collection">
            {this.props.ingredients.map(function(ingredient,index){
              let id = shortid()
              return <li
                className="collection-item"
                key = {id}
                > {ingredient}
              </li>
            })}
            <div className="row btns">
              <div className="col s6 center">
                <a className="waves-effect green waves-light btn">Edit</a>
              </div>
              <div className="col s6 center">
                <a className="waves-effect red waves-light btn">Delete</a>
              </div>
            </div>
          </ul>
        </div>
      </li>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteRecipe, editRecipe}, dispatch)
}

export default connect(null,mapDispatchToProps)(RecipeList);
