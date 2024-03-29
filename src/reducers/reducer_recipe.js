import { RECIPE_ADD, RECIPE_DELETE, RECIPE_EDIT } from '../actions/index';
import shortid from 'shortid';

export default function(state = [], action){
  switch (action.type) {
    case RECIPE_ADD:
      return [
        { recipe: action.payload[0], ingredients: action.payload[1],
        id: action.id },
        ...state
      ];
    case RECIPE_DELETE:
    let index = state.map(x => x.id).indexOf(action.id)
      return (
        state.slice(0,index).concat(state.slice(index + 1))
      )
    case RECIPE_EDIT:
      return state.map((recipe)=> {
        if( recipe.id === action.id ) {
          return {recipe: action.payload[0], ingredients:action.payload[1],
          id: action.id}
        } else {
          return recipe;
        }
        return recipe;
      });
  }
  return state;
}
