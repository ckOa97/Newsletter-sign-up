const formElements = document.querySelectorAll('main form');
const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

formElements.forEach(el => {

    el.addEventListener('submit', e => {

        if(!el.querySelector('input').value.match(emailRegExp)) {
            e.preventDefault();
            formElements.forEach(el => {
                if(el.querySelector('.error-message').classList.contains('display-none'))
                    el.querySelector('.error-message').classList.remove('display-none');
    
                if(el.querySelector('input').classList.contains('email-input')) {
                    el.querySelector('input').classList.remove('email-input');
                    el.querySelector('input').classList.add('email-input-error');
                }
            });
        }
    });
});