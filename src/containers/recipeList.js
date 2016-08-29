import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { addRecipe } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MyModal from '../components/mymodal';
import ModalBox from '../containers/modalbox'

class RecipeList extends Component{
  constructor(props){
    super(props);
    this.state = {
      recipeName: this.props.recipeName,
      userIngredients: this.props.userIngredients
    };
    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this)
    this.handleUserIngredientsChange = this.handleUserIngredientsChange.bind(this)
  }
  onClickSubmit(){
    console.log('Submit!')
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

export default RecipeList
