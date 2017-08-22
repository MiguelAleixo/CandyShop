window.addEventListener('load', function () {
    var password = document.querySelector('#password');
    var email = document.querySelector('#email');
    var forgot = document.querySelector('#forgot-password');
    var regex = email.getAttribute('pattern');
    regex = new RegExp(regex);
    function getClass(classe){
        return document.querySelectorAll(classe);
    }

    email.onfocus = function () {
        getClass('.input-name')[0].classList.add('up-label', 'red');
        getClass('.error-text')[0].classList.add('alert');

        if (regex.test(email.value)) {
            getClass('.input-name')[0].classList.add('pink');
            getClass('.input-name')[0].classList.remove('red');
            getClass('.error-text')[0].classList.remove('alert');
            getClass('.button')[0].removeAttribute('disabled');
            getClass('.button')[0].classList.add('button-design-active');
            getClass('.button')[0].classList.remove('button-design');
        }
        else {
            getClass('.input-name')[0].classList.add('red');
        }
    };
    email.onblur = function () {
        if (regex.test(email.value)) {
            getClass('.input-name')[0].classList.remove('red', 'pink');
            getClass('#email')[0].classList.remove('bar-red');
            getClass('.button')[0].removeAttribute('disabled');
        }
        else if (regex.test(!email.value)) {
            getClass('button')[0].setAttribute('disabled', 'disabled');
        }
        else if (email.value.length === 0) {
            getClass('.input-name')[0].classList.remove('up-label');
            getClass('#email')[0].classList.add('bar-red');
        }
        else{
            getClass('#email')[0].classList.add('bar-red');
        }
    };
    email.onkeydown = function () {
        setTimeout(function () {
            if (regex.test(email.value)) {
                getClass('.input-name')[0].classList.add('pink');
                getClass('.input-name')[0].classList.remove('red');
                getClass('.error-text')[0].classList.remove('alert');
                getClass('.button')[0].classList.add('button-design-active');
                getClass('.button')[0].classList.remove('button-design');
                getClass('.button')[0].removeAttribute('disabled');
            }
            else {
                getClass('.input-name')[0].classList.remove('pink');
                getClass('.input-name')[0].classList.add('red');
                getClass('.error-text')[0].classList.add('alert');
                getClass('.button')[0].classList.add('button-design');
                getClass('.button')[0].classList.remove('button-design-active');
                getClass('.button')[0].setAttribute('disabled', 'disabled');
            }
        });
    };
    password.onfocus = function () {
        getClass('.input-name')[1].classList.add('up-label', 'red');
        getClass('.error-text')[1].classList.add('alert');
        // getClass('.button')[1].classList.add('button-design-active');
        if (password.value.length >= 6) {
            getClass('.input-name')[1].classList.add('pink');
            getClass('.input-name')[1].classList.remove('red');
            getClass('.error-text')[1].classList.remove('alert');
            getClass('.button')[1].removeAttribute('disabled');
            getClass('.button')[1].classList.add('button-design-active');
            getClass('.button')[1].classList.remove('button-design');
        }
        else {
            getClass('.input-name')[1].classList.remove('pink');
            getClass('.input-name')[1].classList.add('red');
            getClass('.button')[1].setAttribute('disabled', 'disabled');
        }
    };
    password.onblur = function () {
        if (password.value.length > 0 && password.value.length < 6) {
            getClass('input-name')[1].classList.add('red');
            getClass('button')[1].setAttribute('disabled', 'disabled');
            password.classList.add('bar-red');
        }
        else if (password.value.length >= 6) {
            getClass('.input-name')[1].classList.add('grey');
            getClass('.input-name')[1].classList.remove('red', 'pink');
            getClass('.button')[1].removeAttribute('disabled');
            password.classList.remove('bar-red');

        }
        else if (password.value.length === 0) {
            getClass('.input-name')[1].classList.remove('up-label');
            getClass('#password')[0].classList.add('bar-red');
        }
    };
    password.onkeydown = function () {
        setTimeout(function () {
            if (password.value.length >= 6) {
                getClass('.input-name')[1].classList.add('pink');
                getClass('.input-name')[1].classList.remove('red');
                getClass('.error-text')[1].classList.remove('alert');
                getClass('.button')[1].classList.add('button-design-active');
                getClass('.button')[1].classList.remove('button-design');
                getClass('.button')[1].removeAttribute('disabled');
            }
            else {
                getClass('.input-name')[1].classList.remove('pink');
                getClass('.input-name')[1].classList.add('red');
                getClass('.error-text')[1].classList.add('alert');
                getClass('.button')[1].classList.add('button-design');
                getClass('.button')[1].classList.remove('button-design-active');
                getClass('.button')[1].setAttribute('disabled', 'disabled');
            }
        });
    };

    forgot.onfocus = function () {
        getClass('.input-name')[2].classList.add('up-label');
        getClass('.input-name')[2].classList.add('red');
        getClass('.error-text')[2].classList.add('alert');
        if (regex.test(forgot.value)) {
            getClass('.input-name')[2].classList.add('pink');
            getClass('.input-name')[2].classList.remove('red');
            getClass('.error-text')[2].classList.remove('alert');
            getClass('.button')[2].removeAttribute('disabled');
            getClass('.button')[2].classList.add('button-design-active');
            getClass('.button')[2].classList.remove('button-design');
        }
        else {
            getClass('.input-name')[2].classList.add('red');
        }
    };

    forgot.onblur = function () {
        if (regex.test(forgot.value)) {
            getClass('.input-name')[2].classList.remove('red');
            getClass('.input-name')[2].classList.remove('pink');
            getClass('.button')[2].removeAttribute('disabled');
            forgot.classList.remove('bar-red');
        }
        else if (regex.test(!forgot.value)) {
            getClass('.button')[2].setAttribute('disabled', 'disabled');
            forgot.classList.add('bar-red');

        }
        else if (forgot.value.length === 0) {
            getClass('.input-name')[2].classList.remove('up-label');
            forgot.classList.add('bar-red');
        }
    };
    forgot.onkeydown = function () {
        setTimeout(function () {
            if (regex.test(forgot.value)) {
                getClass('.input-name')[2].classList.add('pink');
                getClass('.input-name')[2].classList.remove('red');
                getClass('.error-text')[2].classList.remove('alert');
                getClass('.button')[2].classList.add('button-design-active');
                getClass('.button')[2].classList.remove('button-design');
                getClass('.button')[2].removeAttribute('disabled');
            }
            else {
                getClass('.input-name')[2].classList.remove('pink');
                getClass('.input-name')[2].classList.add('red');
                getClass('.error-text')[2].classList.add('alert');
                getClass('.button')[2].classList.add('button-design');
                getClass('.button')[2].classList.remove('button-design-active');
                getClass('.button')[2].setAttribute('disabled', 'disabled');
            }
        });
    };


    getClass('.back-to-email')[0].onclick = function () {
        getClass('.flex-container')[0].classList.remove('change-for-password');
        getClass('.login-card')[0].classList.remove('extend-for-password');
        getClass('.user-photo')[0].classList.remove('show');

    };
    getClass('.back-to-password')[0].onclick = function () {
        getClass('.flex-container')[0].classList.add('change-for-password');
        getClass('.flex-container')[0].classList.remove('change-for-forgot');
        getClass('.login-card')[0].classList.add('extend-for-password');
        getClass('.login-card')[0].classList.remove('extend-for-forgot');
        getClass('.user-photo')[0].classList.add('show');
        getClass('.forgot-password-form')[0].reset();
        getClass('.input-name')[2].classList.remove('up-label');
        forgot.classList.remove('bar-red');
        getClass('.error-text')[2].classList.remove('alert');
        getClass('.input-name')[2].classList.remove('red');

    };
    getClass('.recovery-password')[0].onclick = function () {
        getClass('.flex-container')[0].classList.add('change-for-forgot');
        getClass('.login-card')[0].classList.add('extend-for-forgot');
        getClass('.user-photo')[0].classList.remove('show');
    };
});
