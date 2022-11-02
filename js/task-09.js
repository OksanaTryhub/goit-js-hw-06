// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента < body >
// через инлайн стиль при клике на button.change - color 
// и выводит значение цвета в span.color.

const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  colorValue: document.querySelector('.color'),
}
// ---генерация случайного цвета---
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBodyColor = () => {

  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  refs.colorValue.textContent = color;
}

refs.changeColorBtn.addEventListener('click', changeBodyColor);