import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Panel, Button, Modals } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { deleteRecipe, editRecipe } from '../actions/index';
import shortid from 'shortid'
import Edit from '../containers/edit'


class RecipeBox extends Component {
  constructor(props){
    super(props);
    this.renderRecipeList = this.renderRecipeList.bind(this)
    this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this)
    this.handleUserIngredientsChange = this.handleUserIngredientsChange.bind(this)
  }

  handleRecipeNameChange(event){
    this.setState({recipeName: event.target.value})
  }
  handleUserIngredientsChange(event){
    this.setState({userIngredients: event.target.value})
  }
  renderRecipeList(recipeItem, index){
    const recipe = recipeItem.recipe;
    const ingredients = recipeItem.ingredients;
    const recipeID = recipeItem.id;
    const id = shortid.generate();
    return(
      <div key={id}>
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
              <Edit
                recipeName={recipe}
                userIngredients={ingredients}
                recipeID={recipeID}
              />
            </ListGroupItem>
          </ListGroup>
        </Panel>
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
  return bindActionCreators({deleteRecipe : deleteRecipe, editRecipe : editRecipe}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(RecipeBox);
