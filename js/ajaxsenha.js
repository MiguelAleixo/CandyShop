window.addEventListener('load', function () {
    document.querySelectorAll('button')[1].addEventListener('click', function() {
        var email = document.querySelector('#email').value;
        var senha = document.querySelector('#senha').value;
        var request = new XMLHttpRequest();
        request.open('POST', 'http://192.168.10.192:3500/user/check', true);
        var data = JSON.stringify({
            email: email,
            senha: senha
        });
        request.setRequestHeader("content-type", "application/json");
        request.onload = function() {
            var resp = JSON.parse(request.responseText);
            if (request.status >= 200 && request.status < 400) {
                alert('senha correta');
            } else {
                console.log(resp);
                switch (resp.code){
                    case 1:
                        document.getElementsByTagName("label")[1].classList.add("vermelho");
                        document.getElementsByTagName("p")[1].classList.add("alert");
                        document.getElementsByTagName("p")[1].innerText = "Senha incorreta";
                        document.getElementsByTagName("input")[1].classList.add("barred");
                        document.getElementsByTagName("button")[1].setAttribute("disabled", "disabled");
                        document.getElementsByTagName("button")[1].classList.remove("botao");
                        document.getElementsByTagName("button")[1].classList.add("botaop");
                        break;
                }
            }
        };
        request.send(data);
        console.log(data)
    });
});