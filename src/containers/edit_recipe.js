import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Panel, Button, Modals } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { deleteRecipe, editRecipe } from '../actions/index';
import shortid from 'shortid'
import ModalBox from '../containers/modalbox'



class RecipeList extends Component{
  constructor(props){
    super(props);
    this.state = {
      recipeName: this.props.recipeName,
      userIngredients: this.props.userIngredients.join(','),
      recipeID : this.props.recipeID
    };

    this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this)
    this.handleUserIngredientsChange = this.handleUserIngredientsChange.bind(this)
    this.onClickSubmit = this.onClickSubmit.bind(this)
  }
  onClickSubmit(){
    const splitIngredients = this.state.userIngredients.split(/[ ,]+/)
    this.props.editRecipe([this.state.recipeName, splitIngredients], this.state.recipeID )
  }
  handleRecipeNameChange(event){
    this.setState({recipeName: event.target.value})
  }
  handleUserIngredientsChange(event){
    this.setState({userIngredients: event.target.value})
  }

  render(){
    return (
      <ModalBox
        modalTextTitle={'Edit Recipe'}
        recipeName={this.state.recipeName}
        userIngredients={this.state.userIngredients}
        handleRecipeNameChange={this.handleRecipeNameChange}
        handleUserIngredientsChange={this.handleUserIngredientsChange}
        onClickSubmit={this.onClickSubmit}
      />
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteRecipe : deleteRecipe, editRecipe : editRecipe}, dispatch)
}

export default connect(null,mapDispatchToProps)(RecipeList);
