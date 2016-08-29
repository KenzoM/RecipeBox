import { combineReducers } from 'redux';
import addRecipe  from './reducer_addrecipe'

const rootReducer = combineReducers({
  addRecipe : addRecipe
});

export default rootReducer;
