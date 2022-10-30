// const categoriesList = document.querySelector('#categories');
// console.log('Number of categories:', categoriesList.children.length);



const allCategories = document.querySelectorAll('.item');
 
console.log('Number of categories:', allCategories.length);
 

allCategories.forEach((item) => {

const categoryTitle = item.querySelector('h2').textContent;
const categoryElements = item.querySelectorAll('li');
const categoryElemntsQty = categoryElements.length;

console.log('Category: ', categoryTitle);
console.log('Elements: ', categoryElemntsQty);

});
