const refs = {
    value: document.querySelector('#value'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
}

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    refs.value.textContent = counterValue;
}

const increment = () => {
    counterValue += 1;
    refs.value.textContent = counterValue;
}

refs.decrementBtn.addEventListener('click', decrement);
refs.incrementBtn.addEventListener('click', increment);