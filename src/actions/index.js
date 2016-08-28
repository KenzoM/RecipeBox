export const RECIPE_ADD = 'RECIPE_ADD'
export function addRecipe(recipe) {
  return {
    type: RECIPE_ADD,
    payload: recipe
  }
}
