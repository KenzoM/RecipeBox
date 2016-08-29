import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Panel, Button, Modals } from 'react-bootstrap';
import MyModal from '../components/mymodal';
import { bindActionCreators } from 'redux';
import { deleteRecipe } from '../actions/index';
import shortid from 'shortid'
import ModalBox from '../containers/modalbox'
import RecipeList from '../containers/recipeList'


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
              <RecipeList
                recipeName={recipe}
                userIngredients={ingredients}
                onClickSubmit={this.onClickSubmit}
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
  return bindActionCreators({deleteRecipe : deleteRecipe}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(RecipeBox);
