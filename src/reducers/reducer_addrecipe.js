import { RECIPE_ADD } from '../actions/index';
import { RECIPE_DELETE } from '../actions/index';

const defaultList = [
  { recipe: 'Pizza', ingredients: ['tomato sauce','cheese','peperoni'] },
  { recipe: 'Pie', ingredients: ['dough','cherry'] },
  { recipe: 'Curry', ingredients: ['rice','sauce','carrots'] },
];

export default function(state = defaultList, action){
  switch (action.type) {
    case RECIPE_ADD:
      return [
        { recipe: action.payload[0], ingredients: action.payload[1] },
        ...state
      ];
    case RECIPE_DELETE:
    let index = state.map(x => x.recipe).indexOf(action.payload.recipe)
      return (
        state.slice(0,index).concat(state.slice(index + 1))
      )
  }
  return state;
}
