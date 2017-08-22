window.addEventListener('load', function () {
    function getClass (classe){
        return document.querySelectorAll(classe);
    }
    document.querySelectorAll('button')[1].addEventListener('click', function() {
        var email = document.querySelector('#email').value;
        var password = document.querySelector('#password').value;
        var request = new XMLHttpRequest();
        request.open('POST', 'http://192.168.10.192:3500/user/check', true);
        var data = JSON.stringify({
            email: email,
            senha: password
        });
        request.setRequestHeader('content-type', 'application/json');
        request.onload = function() {
            var answer = JSON.parse(request.responseText);
            if (request.status >= 200 && request.status < 400) {
                alert('senha correta');
            } else {
                console.log(answer);
                switch (answer.code){
                    case 1:
                        getClass('.input-name')[1].classList.add('red');
                        getClass('.error-text')[1].classList.add('alert');
                        getClass('.error-text')[1].innerText = 'Senha incorreta';
                        getClass('#password')[0].classList.add('bar-red');
                        getClass('.button')[1].setAttribute('disabled', 'disabled');
                        getClass('.button')[1].classList.add('button-design');
                        getClass('.button')[1].classList.remove('button-design-active');
                        break;
                }
            }
        };
        request.send(data);
        console.log(data)
    });
});