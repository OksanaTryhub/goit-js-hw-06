const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

const ingredientsList = document.querySelector('#ingredients');
console.log(ingredientsList);

for (let i = 0; i < ingredients.length; i += 1) {

  const list = [];

  const ingredientItem = document.createElement('li')
  ingredientItem.textContent = ingredients[i];
  ingredientItem.classList.add('item');

  list.push(ingredientItem);

  ingredientsList.append(...list);
}
