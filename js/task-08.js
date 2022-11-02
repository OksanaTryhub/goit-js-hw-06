const loginForm = document.querySelector('.login-form');

const submitForm = (event) => {
    event.preventDefault();

    const loginInfo = {
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
    }
    if (!loginInfo.email || !loginInfo.password) {
        return alert('Please fill in all fields of the form')
    }
        console.log(loginInfo);
        loginForm.reset();

    // console.log(loginForm.elements.email.value);
    // console.log(loginForm.elements.password.value)
}

loginForm.addEventListener('submit', submitForm);

