export const RECIPE_ADD = 'RECIPE_ADD';
export const RECIPE_EDIT = 'RECIPE_EDIT';
export const RECIPE_DELETE = 'RECIPE_DELETE';
import shortid from 'shortid';

export function addRecipe(recipe) {
  const id = shortid.generate();
  return {
    type: RECIPE_ADD,
    payload: recipe,
    id: shortid.generate()
  }
}
export function editRecipe(recipe,recipeID) {
  return {
    type: RECIPE_EDIT,
    payload: recipe,
    id: recipeID
  }
}
export function deleteRecipe(recipe) {
  return {
    type: RECIPE_DELETE,
    payload: recipe
  }
}
