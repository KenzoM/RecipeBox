export const RECIPE_ADD = 'RECIPE_ADD';
export const RECIPE_EDIT = 'RECIPE_EDIT';
export const RECIPE_DELETE = 'RECIPE_DELETE';
export function addRecipe(recipe) {
  return {
    type: RECIPE_ADD,
    payload: recipe
  }
}
export function editRecipe(recipe) {
  return {
    type: RECIPE_EDIT,
    payload: recipe
  }
}
export function deleteRecipe(recipe) {
  return {
    type: RECIPE_DELETE,
    payload: recipe
  }
}
