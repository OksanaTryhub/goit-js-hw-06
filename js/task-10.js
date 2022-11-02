// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// ---Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.
// 1.Размеры самого первого <div> - 30px на 30px.
// 2.Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3.Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// ---Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
// тем самым удаляя все созданные элементы.

const refs = {
  quantityBoxes: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  const initialSize = 30;
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < amount; i += 1) {
    let size = initialSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; margin-bottom: 5px`;
    fragment.appendChild(div);
  }

  refs.boxes.appendChild(fragment);
}

function getQuantity() {
  let quantity = Number(refs.quantityBoxes.value);
  createBoxes(quantity);
}

const destroyBoxes = () => {
  refs.boxes.innerHTML = "";
}

refs.createBtn.addEventListener("click", getQuantity);
refs.destroyBtn.addEventListener("click", destroyBoxes);


