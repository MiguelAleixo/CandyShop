window.addEventListener('load', function () {
    function getClass (classe){
        return document.querySelectorAll(classe);
    }
    getClass('.button')[0].addEventListener('click', function() {
        var email = getClass('#email')[0].value;
        var request = new XMLHttpRequest();
        request.open('GET', 'http://192.168.10.192:3500/user/check/email/web/' + email, true);

        request.onload = function() {
            var answer = JSON.parse(request.responseText);
            var word = getClass('#email')[0].value;
            if (request.status >= 200 && request.status < 400) {
                getClass('.flex-container')[0].classList.add('change-for-password');
                getClass('.login-card')[0].classList.add('extend-for-password');
                getClass('.user-photo')[0].classList.add('show');
                getClass('.input-box')[1].removeAttribute('disabled');
                getClass('.user-photo')[0].innerText = word[0];
            } else {
                switch (answer.code){
                    case 1:
                        getClass('.input-name')[0].classList.add('red');
                        getClass('.error-text')[0].classList.add('alert');
                        getClass('.error-text')[0].innerText = 'Email inexistente';
                        getClass('#email')[0].classList.add('bar-red');
                        getClass('.button')[0].setAttribute('disabled', 'disabled');
                        getClass('.button')[0].classList.remove('button-design-active');
                        getClass('.button')[0].classList.add('button-design');

                        break;
                }
            }
        };

        request.send();
    });
});
