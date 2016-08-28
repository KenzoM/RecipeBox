import { RECIPE_ADD } from '../actions/index';

const kenzo = [
  { recipe: 'Pizza', ingredients: ['tomato sauce','cheese','peperoni'] },
  { recipe: 'Pie', ingredients: ['dough','cherry'] },
  { recipe: 'Curry', ingredients: ['rice','sauce','carrots'] },
];

export default function(state = kenzo, action){
  switch (action.type) {
    case RECIPE_ADD:
      return [
        { recipe: action.payload[0], ingredients: action.payload[1] },
        ...state
      ];
  }
  return state;
}
