
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

const ingredientsList = document.querySelector('#ingredients');

const createLi = el => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = el;
  ingredientItem.classList.add('item');
  console.log(ingredientItem);
  return ingredientItem;
 }

const lis = ingredients.map((ingredient) => createLi(ingredient));
console.log(lis);
 
ingredientsList.append(...lis);


// for (let i = 0; i < ingredients.length; i += 1) {

//   const list = [];

//   const ingredientItem = document.createElement('li')
//   ingredientItem.textContent = ingredients[i];
//   ingredientItem.classList.add('item');

//   list.push(ingredientItem);

//   ingredientsList.append(...list);
// }

