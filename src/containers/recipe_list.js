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
        <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
        <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
      </li>

    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteRecipe, editRecipe}, dispatch)
}

export default connect(null,mapDispatchToProps)(RecipeList);
