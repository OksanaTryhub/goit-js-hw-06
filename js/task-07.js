const refs = {
    sizeController: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}
// console.log(refs.sizeController)

const changeFontSize = () => {
    
    const size = refs.sizeController.value;
    refs.text.style.fontSize = size + 'px';

    // console.log(refs.text.style.fontSize)
}

refs.sizeController.addEventListener('input', changeFontSize)
