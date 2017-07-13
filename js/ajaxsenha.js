window.addEventListener('load', function () {
    document.querySelector('#botao').addEventListener('click', function() {
        var senha = document.querySelector('#senha').value;
        var request = new XMLHttpRequest();
        request.open('GET', 'http://192.168.10.192:3500/user/check/' + senha, true);

        request.onload = function() {
            var resp = JSON.parse(request.responseText);
            if (request.status >= 200 && request.status < 400) {
                window.location.href = "menu.html"
            } else {
                console.log(resp.code);
                switch (resp.code){
                    case 1:
                        document.getElementsByTagName("label")[0].classList.remove("rosa");
                        document.getElementsByTagName("label")[0].classList.add("vermelho");
                        document.getElementsByTagName("p")[0].classList.add("si");
                        // document.getElementsByTagName("button")[0].classList.remove("botao");
                        // document.getElementsByTagName("button")[0].classList.add("botaop");
                        // document.getElementsByTagName("button")[0].setAttribute("disabled", "disabled");
                        break;
                }
            }
        };

        request.send();
    });
});
