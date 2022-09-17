const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsElements = document.querySelector('#ingredients');

console.log(ingredientsElements)

const ingredientsList = ingredients.map((ingredient) => {
  const ingredientsListTag = document.createElement('li');
  ingredientsListTag.textContent = ingredient;
  ingredientsListTag.classList.add("item");
  return ingredientsListTag;
});

ingredientsElements.prepend(...ingredientsList);
