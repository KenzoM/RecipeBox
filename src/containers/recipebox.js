import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapsible, CollapsibleItem, Row, Col } from 'react-materialize';
import RecipeList from './recipe_list'

class RecipeBox extends Component {
  constructor(props){
    super(props);
  }
  render(){
    let itemList = [];
    this.props.recipeStateList.forEach(function(item){
      itemList.push(
        <RecipeList
          key={item.id}
          recipeID={item.id}
          recipe={item.recipe}
          ingredients={item.ingredients}
        />)
    })
    return(
      <main>
        <div className="container">
          <Row>
            <Col s={10} offset={'s1'}>
              <ul className="collapsible popout" data-collapsible="accordion">
                  {itemList}
              </ul>
            </Col>
          </Row>
        </div>        
      </main>

    )
  }
}

function mapStateToProps(state) {
  return {
    recipeStateList : state.recipeState
  };
}

export default connect(mapStateToProps)(RecipeBox);
