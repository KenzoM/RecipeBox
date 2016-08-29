import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Panel, Button, Modals } from 'react-bootstrap';
import MyModal from '../components/mymodal';
import { bindActionCreators } from 'redux';
import { deleteRecipe } from '../actions/index';


class RecipeBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    };
    this.renderRecipeList = this.renderRecipeList.bind(this)
    this.renderModal = this.renderModal.bind(this)

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
    this.toggleModal()
  }
  handleRecipeNameChange(event){
    this.setState({recipeName: event.target.value})
  }
  handleUserIngredientsChange(event){
    this.setState({userIngredients: event.target.value})
  }
  renderModal(list){
    this.toggleModal()
    console.log(this.state.showModal)
  }
  renderRecipeList(recipeItem,index){
    const recipe = recipeItem.recipe;
    const ingredients = recipeItem.ingredients;
    return(
      <div key={index}>
        <Panel bsStyle="primary" collapsible header={<h3>{recipe}</h3>}>
          <ListGroup >
            <ListGroupItem  header="Ingredients"></ListGroupItem>
            {ingredients.map(function(ingredient,index){
              return <ListGroupItem key={index}>{ingredient}</ListGroupItem>;
            })}
            <ListGroupItem>
              <Button
                onClick={() => this.props.deleteRecipe(recipeItem)}
                bsStyle="danger">Delete
              </Button>
              <Button
                onClick={() => this.renderModal(recipeItem)}
                bsStyle="info">Edit
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Panel>
        <MyModal
          toggleModal={this.toggleModal}
          showModal={this.state.showModal}
          recipeName={recipe}
          userIngredients={ingredients}
          handleRecipeNameChange={this.handleRecipeNameChange}
          handleUserIngredientsChange={this.handleUserIngredientsChange}
          onClickSubmit={this.onClickSubmit}
          modalTextTitle={'Edit Recipe'}
        />
      </div>
    )
  }
  render(){
    return(
      <div className="container">
        <div className='panel-group'>
          {this.props.addRecipe.map(this.renderRecipeList)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    addRecipe : state.recipeState
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteRecipe : deleteRecipe}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(RecipeBox);
