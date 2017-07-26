window.addEventListener('load', function () {
    document.querySelector('#botao').addEventListener('click', function() {
        var email = document.querySelector('#email').value;
        var request = new XMLHttpRequest();
        request.open('GET', 'http://192.168.10.192:3500/user/check/email/web/' + email, true);

        request.onload = function() {
            var resp = JSON.parse(request.responseText);
            if (request.status >= 200 && request.status < 400) {
                document.getElementById("teste").classList.add("slide");
                document.getElementById("card").classList.add("extend");
                document.querySelectorAll("div")[0].classList.add("show");
                var letra = document.querySelectorAll('input')[0].value;
                document.querySelectorAll("div")[0].innerText = letra[0];
            } else {
                switch (resp.code){
                    case 1:
                        document.getElementsByTagName("label")[0].classList.add("vermelho");
                        document.getElementsByTagName("p")[0].classList.add("alert");
                        document.getElementsByTagName("p")[0].innerText = "Email inexistente";
                        document.getElementsByTagName("input")[0].classList.add("barred");
                        document.getElementsByTagName("button")[0].setAttribute("disabled", "disabled");
                        document.getElementsByTagName("button")[0].classList.remove("botao");
                        document.getElementsByTagName("button")[0].classList.add("botaop");

                        break;
                }
            }
        };

        request.send();
    });
});
