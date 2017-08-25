window.addEventListener('load', function () {
    function getClass (classe){
        return document.querySelectorAll(classe);
    }
    getClass('.button')[2].addEventListener('click', function() {
        var email = getClass('#forgot-password')[0].value;
        var request = new XMLHttpRequest();
        request.open('PUT', 'http://192.168.10.192:3500/user/forgot/sendtoken/' + email, true);

        request.onload = function() {
            var answer = JSON.parse(request.responseText);

            if (request.status >= 200 && request.status < 400) {
                // getClass('.sent-success')[0].classList.add('sent');
                alert('deu')
            } else {
                switch (answer.code){
                    case 1:
                        // getClass('.input-name')[0].classList.add('red');
                        // getClass('.error-text')[0].classList.add('alert');
                        // getClass('.error-text')[0].innerText = 'Email inexistente';
                        // getClass('#email')[0].classList.add('bar-red');
                        // getClass('.button')[0].setAttribute('disabled', 'disabled');
                        // getClass('.button')[0].classList.remove('button-design-active');
                        // getClass('.button')[0].classList.add('button-design');
                        alert('nao deu');

                        break;
                }
            }
        };

        request.send();
    });
});
