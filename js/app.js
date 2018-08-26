document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('new-recipt-form');
  form.addEventListener('submit', handleFormSubmit);
});

const handleFormSubmit = function(event){
  event.preventDefault();

    const newRecipe = {
      name: event.target.recipe-name.value,
      servings: event.target.servings.value,
      diet: event.target.diet.value,
      description: event.target.recipe-description.value,
    };

};

const buildRecipeList = function(recipe) {

  const recipeUl = document.createElement('ul');

  const recipeNameLi = document.createElement('li');
    recipeNameLi.textContent = `Recipe Name: ${recipe.name}`;

  const servingsLi = document.createElement('li');
    servingsLi.textContent = `Serves: ${recipe.servings}`;

  const dietLi = document.createElement('li');
    dietLi.textContent = `This is suitable for a ${recipe.diet} diet`;

  const descriptionLi = document.createElement('li');
    descriptionLi.textContent = `Additional Notes or Descriptions: ${recipe.description}`;

  recipeUl.appendChild(recipeNameLi)
  recipeUl.appendChild(servingsLi)
  recipeUl.appendChild(dietLi)
  recipeUl.appendChild(descriptionLi)

  return recipeUl;
}
