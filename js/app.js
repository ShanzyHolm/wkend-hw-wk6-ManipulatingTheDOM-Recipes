document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('new-recipt-form');
  form.addEventListener('submit', handleFormSubmit);
});

const handleFormSubmit = function(event){
  event.preventDefault();


};

const buildRecipeList = function(recipe) {

  const recipeUl = document.createElement('ul');

  const recipeNameLi = document.createElement('li');

  const servingsLi = document.createElement('li');

  const dietLi = document.createElement('li');

  const descriptionLi = document.createElement('li');
}
