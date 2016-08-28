import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Panel, Button, Modals } from 'react-bootstrap'
import { bindActionCreators } from 'redux';

class RecipeBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
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
              <Button bsStyle="danger">Delete</Button> <Button bsStyle="info">Edit</Button>
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
    listRecipes: state.listRecipes,
    addRecipe : state.addRecipe
  };
}

export default connect(mapStateToProps)(RecipeBox);
