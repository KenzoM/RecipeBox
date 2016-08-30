import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Panel, Button, Modals } from 'react-bootstrap';
import RecipeList from '../containers/recipe_list'

class RecipeBox extends Component {
  constructor(props){
    super(props);
  }
  render(){
    let itemList = [];
    this.props.recipeList.forEach(function(item){
      itemList.push(
        <RecipeList
          key={item.id}
          recipeID={item.id}
          recipe={item.recipe}
          ingredients={item.ingredients}
        />)
    })
    return(
      <div className="container">
        <div className='panel-group'>
          {itemList}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    recipeList : state.recipeState
  };
}

export default connect(mapStateToProps)(RecipeBox);
