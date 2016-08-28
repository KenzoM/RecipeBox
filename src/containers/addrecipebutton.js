import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { addRecipe } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MyModal from '../components/mymodal';

class AddRecipeButton extends Component{
  constructor(props){
    super(props);
    this.state = {
      recipeName: '',
      userIngredients: '',
      showModal: false
    };
    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this)
    this.handleUserIngredientsChange = this.handleUserIngredientsChange.bind(this)
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal(){
    this.setState({
        showModal: !this.state.showModal
    });
  }
  onClickSubmit(){
    const splitIngredients = this.state.userIngredients.split(/[ ,]+/)
    this.props.addRecipe([this.state.recipeName, splitIngredients])
    this.toggleModal()
  }
  handleRecipeNameChange(event){
    this.setState({recipeName: event.target.value})
  }
  handleUserIngredientsChange(event){
    this.setState({userIngredients: event.target.value})
  }
  render(){
    return (
      <div>
        <Button
          bsStyle="success"
          onClick={this.toggleModal}
          >Add Recipe
        </Button>
        <MyModal
          toggleModal={this.toggleModal}
          showModal={this.state.showModal}
          recipeName={this.state.recipeName}
          userIngredients={this.state.userIngredients}
          handleRecipeNameChange={this.handleRecipeNameChange}
          handleUserIngredientsChange={this.handleUserIngredientsChange}
          onClickSubmit={this.onClickSubmit}
          modalTextTitle={'Add Recipe'}
        />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addRecipe}, dispatch)
}

export default connect(null,mapDispatchToProps)(AddRecipeButton)
