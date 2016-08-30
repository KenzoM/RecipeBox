import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Panel, Button, Modals } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { deleteRecipe, editRecipe } from '../actions/index';
import shortid from 'shortid'
import Edit from '../containers/edit_recipe'

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
      <div>
        <Panel
          collapsible
          header={<h3>{this.props.recipe}</h3>}>
          <ListGroup >
            <ListGroupItem  header="Ingredients"></ListGroupItem>
            {this.props.ingredients.map(function(ingredient,index){
              return <ListGroupItem key={index}>{ingredient}</ListGroupItem>;
            })}
            <ListGroupItem>
              <Button
                onClick={() => this.props.deleteRecipe(this.props.recipeID)}
                bsStyle="danger">Delete
              </Button>
              <Edit
                recipeName={this.props.recipe}
                userIngredients={this.props.ingredients}
                recipeID={this.props.recipeID}
              />
            </ListGroupItem>
          </ListGroup>
        </Panel>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteRecipe, editRecipe}, dispatch)
}

export default connect(null,mapDispatchToProps)(RecipeList);
