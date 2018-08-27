document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-recipe-form');
  form.addEventListener('submit', handleFormSubmit);

  renderRecipeList();

  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('click', handleDelete);
});

const deleteRecipeList = function(){
  if (JSON.parse(localStorage.getItem('recipes'))) {
    return [];
  }
};

const getRecipeList = function(){
  if (JSON.parse(localStorage.getItem('recipes')) !== null ) {
    return JSON.parse(localStorage.getItem('recipes'));
  } else {
    return [];
  }
};

const handleFormSubmit = function(event){
  event.preventDefault();
  recipeList = getRecipeList();

    const newRecipe = {
      name: event.target.name.value,
      servings: event.target.servings.value,
      diet: event.target.diet.value,
      description: event.target.description.value,
    };

  recipeList.push(newRecipe);

  localStorage.setItem('recipes', JSON.stringify(recipeList));
  renderRecipeList();
  event.target.reset();
};

const handleDelete = function(event) {
  var result = confirm("Do you really want to delete this list?");
  if (result ==true){
    const readingList = document.querySelector("#reading-list");
    readingList.innerHTML = "";

    localStorage.deleteItem('recipes', JSON.stringify(recipeList));
     recipeList.innerHTML = "";
     deleteRecipeList();
  }
}

const buildRecipeList = function(recipe) {

  const recipeUl = document.createElement('ul');

  const recipeNameLi = document.createElement('li');
    recipeNameLi.textContent = `Recipe Name: ${recipe.name}`;

  const servingsLi = document.createElement('li');
    servingsLi.textContent = `Serves: ${recipe.servings}`;

  const dietLi = document.createElement('li');
    dietLi.textContent = `This is suitable for ${recipe.diet} diets`;

  const descriptionLi = document.createElement('li');
    descriptionLi.textContent = `Additional Notes or Descriptions: ${recipe.description}`;

  recipeUl.appendChild(recipeNameLi);
  recipeUl.appendChild(servingsLi);
  recipeUl.appendChild(dietLi);
  recipeUl.appendChild(descriptionLi);

  return recipeUl;
}

const renderRecipeList = function() {
  const recipeDiv = document.querySelector('#recipe-collection-list');
    recipeDiv.innerHTML = "";

  const recipeList = getRecipeList();
  recipeList.forEach((recipe) => {
    recipeUl = buildRecipeList(recipe);
    recipeDiv.appendChild(recipeUl);
  });



};
