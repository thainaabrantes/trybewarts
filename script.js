const formButton = document.getElementById('form-button');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const submitButton = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

function showAlert() {
    if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
}
formButton.addEventListener('click', showAlert);

submitButton.disabled = true;
function validateCheckbox(event) {
    if (event.target.checked) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}
agreement.addEventListener('click', validateCheckbox);
