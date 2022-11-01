const refs = {
    input: document.querySelector('#name-input'),
    name: document.querySelector('#name-output'),
}

const changeName = () => {
    refs.input.value === ''
    ? refs.name.textContent = 'Anonymous'
    : refs.name.textContent = refs.input.value;
}

refs.input.addEventListener('input', changeName);
