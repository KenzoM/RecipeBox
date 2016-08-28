import { combineReducers } from 'redux';
import listRecipes from './reducer_list_recipes'
import addRecipe  from './reducer_addrecipe'

const rootReducer = combineReducers({
  listRecipes : listRecipes,
  addRecipe : addRecipe
});

export default rootReducer;
