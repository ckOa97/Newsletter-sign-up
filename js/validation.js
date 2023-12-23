const input = document.querySelector('main form input');
const errorMessage = document.querySelector('#error-message');
const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

document.forms.newsletter.addEventListener('submit', e => {

    if(!input.value.match(emailRegExp)) {
        e.preventDefault();
        if(errorMessage.classList.contains('display-none'))
            errorMessage.classList.remove('display-none');

        if(input.classList.contains('email-input')) {
            input.classList.remove('email-input');
            input.classList.add('email-input-error');
        }
    }
});