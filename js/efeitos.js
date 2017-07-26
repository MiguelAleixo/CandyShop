window.addEventListener('load', function (){
    document.querySelectorAll("input")[0].addEventListener("focus", function () {
        document.getElementsByTagName("label")[0].classList.add("sobelabel");
        document.getElementsByTagName("label")[0].classList.add("vermelho");
        document.getElementsByTagName("p")[0].classList.add("alert");
        var input = document.getElementById("email");
        var regex = input.getAttribute("pattern");
        regex = new RegExp(regex);
        if (regex.test(input.value)) {
            document.getElementsByTagName("label")[0].classList.add("rosa");
            document.getElementsByTagName("label")[0].classList.remove("vermelho");
            document.getElementsByTagName("p")[0].classList.remove("alert");
            document.getElementsByTagName("button")[0].removeAttribute("disabled");
            document.getElementsByTagName("button")[0].classList.add("botao");
            document.getElementsByTagName("button")[0].classList.remove("botaop");
        }
        else {
            document.getElementsByTagName("label")[0].classList.add("vermelho");
        }
    });
    document.querySelectorAll("input")[0].addEventListener("blur", function () {
        var teste = document.getElementById("email").value.length;
        var input = document.getElementById("email");
        var regex = input.getAttribute("pattern");
        regex = new RegExp(regex);
        if (regex.test(input.value)) {
            document.getElementsByTagName("label")[0].classList.remove("vermelho");
            document.getElementsByTagName("label")[0].classList.remove("rosa");
            document.getElementsByTagName("button")[0].removeAttribute("disabled");
        }
        else if (regex.test(!input.value)) {
            document.getElementsByTagName("button")[0].setAttribute("disabled", "disabled");
        }
        else if (teste === 0) {
            document.getElementsByTagName("label")[0].classList.remove("sobelabel");
        }
        var barra = document.getElementById("email");
        var regex2 = input.getAttribute("pattern");
        regex2 = new RegExp(regex2);
        if (regex2.test(barra.value)) {
            document.getElementsByTagName("input")[0].classList.remove("barred");
        }
        else {
            document.getElementsByTagName("input")[0].classList.add("barred");
        }
    });
    document.querySelectorAll("input")[0].addEventListener("keydown", function () {
        setTimeout(function () {
            var input = document.getElementById("email");
            var regex = input.getAttribute("pattern");
            regex = new RegExp(regex);
            if (regex.test(input.value)) {
                document.getElementsByTagName("label")[0].classList.add("rosa");
                document.getElementsByTagName("label")[0].classList.remove("vermelho");
                document.getElementsByTagName("p")[0].classList.remove("alert");
                document.getElementsByTagName("button")[0].classList.add("botao");
                document.getElementsByTagName("button")[0].classList.remove("botaop");
                document.getElementsByTagName("button")[0].removeAttribute("disabled");
            }
            else {
                document.getElementsByTagName("label")[0].classList.remove("rosa");
                document.getElementsByTagName("label")[0].classList.add("vermelho");
                document.getElementsByTagName("p")[0].classList.add("alert");
                document.getElementsByTagName("button")[0].classList.remove("botao");
                document.getElementsByTagName("button")[0].classList.add("botaop");
                document.getElementsByTagName("button")[0].setAttribute("disabled", "disabled");
            }
        });
    });
});
window.onload = function inicio() {
    document.querySelectorAll("input")[1].addEventListener("focus", function () {
        document.getElementsByTagName("label")[1].classList.add("sobelabel");
        document.getElementsByTagName("label")[1].classList.add("vermelho");
        document.getElementsByTagName("p")[1].classList.add("alert");
        var valid = document.getElementById("senha").value.length;
        if (valid >= 6) {
            document.getElementsByTagName("label")[1].classList.add("rosa");
            document.getElementsByTagName("label")[1].classList.remove("vermelho");
            document.getElementsByTagName("p")[1].classList.remove("alert");
            document.getElementsByTagName("button")[1].removeAttribute("disabled");
            document.getElementsByTagName("button")[1].classList.add("botao");
            document.getElementsByTagName("button")[1].classList.remove("botaop");
        }
        else{
            document.getElementsByTagName("label")[1].classList.remove("rosa");
            document.getElementsByTagName("label")[1].classList.add("vermelho");
            document.getElementsByTagName("button")[1].setAttribute("disabled","disabled");
        }
    });
    document.querySelectorAll("input")[1].addEventListener("blur", function () {
        var input = document.getElementById("senha").value.length;
        if (input > 0 && input < 6) {
            document.getElementsByTagName("label")[1].classList.add("vermelho");
            document.getElementsByTagName("button")[1].setAttribute("disabled","disabled");
        }
        else if (input >= 6) {
            document.getElementsByTagName("label")[1].classList.add("cinza");
            document.getElementsByTagName("label")[1].classList.remove("vermelho");
            document.getElementsByTagName("label")[1].classList.remove("rosa");
            document.getElementsByTagName("button")[1].removeAttribute("disabled");

        }
        else {
            document.getElementsByTagName("label")[1].classList.remove("sobelabel");
        }
        var barra = document.getElementById("senha").value.length;
        if (barra < 6){
            document.getElementsByTagName("input")[1].classList.add("barred");
        }
        else if (barra >= 6) {
            document.getElementsByTagName("input")[1].classList.remove("barred");
        }
    });
    document.querySelectorAll("input")[1].addEventListener("keydown", function () {
        setTimeout(function () {
            var valid = document.getElementById("senha").value.length;
            if (valid >= 6) {
                document.getElementsByTagName("label")[1].classList.add("rosa");
                document.getElementsByTagName("label")[1].classList.remove("vermelho");
                document.getElementsByTagName("p")[1].classList.remove("alert");
                document.getElementsByTagName("button")[1].classList.add("botao");
                document.getElementsByTagName("button")[1].classList.remove("botaop");
                document.getElementsByTagName("button")[1].removeAttribute("disabled");
            }
            else{
                document.getElementsByTagName("label")[1].classList.remove("rosa");
                document.getElementsByTagName("label")[1].classList.add("vermelho");
                document.getElementsByTagName("p")[1].classList.add("alert");
                document.getElementsByTagName("button")[1].classList.remove("botao");
                document.getElementsByTagName("button")[1].classList.add("botaop");
                document.getElementsByTagName("button")[1].setAttribute("disabled","disabled");
            }
        });
    });
};
window.addEventListener('load', function (){
    document.querySelectorAll("input")[2].addEventListener("focus", function () {
        document.getElementsByTagName("label")[2].classList.add("sobelabel");
        document.getElementsByTagName("label")[2].classList.add("vermelho");
        document.getElementsByTagName("p")[2].classList.add("alert");
        var input = document.getElementById("email");
        var regex = input.getAttribute("pattern");
        regex = new RegExp(regex);
        if (regex.test(input.value)) {
            document.getElementsByTagName("label")[2].classList.add("rosa");
            document.getElementsByTagName("label")[2].classList.remove("vermelho");
            document.getElementsByTagName("p")[2].classList.remove("alert");
            document.getElementsByTagName("button")[2].removeAttribute("disabled");
            document.getElementsByTagName("button")[2].classList.add("botao");
            document.getElementsByTagName("button")[2].classList.remove("botaop");
        }
        else {
            document.getElementsByTagName("label")[2].classList.add("vermelho");
        }
    });
    document.querySelectorAll("input")[2].addEventListener("blur", function () {
        var teste = document.getElementById("email").value.length;
        var input = document.getElementById("email");
        var regex = input.getAttribute("pattern");
        regex = new RegExp(regex);
        if (regex.test(input.value)) {
            document.getElementsByTagName("label")[2].classList.remove("vermelho");
            document.getElementsByTagName("label")[2].classList.remove("rosa");
            document.getElementsByTagName("button")[2].removeAttribute("disabled");
        }
        else if (regex.test(!input.value)) {
            document.getElementsByTagName("button")[2].setAttribute("disabled", "disabled");
        }
        else if (teste === 0) {
            document.getElementsByTagName("label")[2].classList.remove("sobelabel");
        }
        var barra = document.getElementById("email");
        var regex2 = input.getAttribute("pattern");
        regex2 = new RegExp(regex2);
        if (regex2.test(barra.value)) {
            document.getElementsByTagName("input")[2].classList.remove("barred");
        }
        else {
            document.getElementsByTagName("input")[2].classList.add("barred");
        }
    });
    document.querySelectorAll("input")[2].addEventListener("keydown", function () {
        setTimeout(function () {
            var input = document.getElementById("email");
            var regex = input.getAttribute("pattern");
            regex = new RegExp(regex);
            if (regex.test(input.value)) {
                document.getElementsByTagName("label")[2].classList.add("rosa");
                document.getElementsByTagName("label")[2].classList.remove("vermelho");
                document.getElementsByTagName("p")[2].classList.remove("alert");
                document.getElementsByTagName("button")[2].classList.add("botao");
                document.getElementsByTagName("button")[2].classList.remove("botaop");
                document.getElementsByTagName("button")[2].removeAttribute("disabled");
            }
            else {
                document.getElementsByTagName("label")[2].classList.remove("rosa");
                document.getElementsByTagName("label")[2].classList.add("vermelho");
                document.getElementsByTagName("p")[2].classList.add("alert");
                document.getElementsByTagName("button")[2].classList.remove("botao");
                document.getElementsByTagName("button")[2].classList.add("botaop");
                document.getElementsByTagName("button")[2].setAttribute("disabled", "disabled");
            }
        });
    });
});
window.addEventListener('load', function () {
    // document.querySelectorAll("button")[0].addEventListener("click", function () {
    //     document.getElementById("teste").classList.add("slide");
    //     document.getElementById("card").classList.add("extend");
    //     document.querySelectorAll("img")[1].classList.add("show");
    // });
    document.querySelector("i").addEventListener("click", function (){
        document.getElementById("teste").classList.remove("slide");
        document.getElementById("card").classList.remove("extend");
        document.querySelectorAll("div")[0].classList.remove("show");
    });
    document.querySelectorAll("i")[1].addEventListener("click", function (){
        document.getElementById("teste").classList.add("slide");
        document.getElementById("teste").classList.remove("slide2");
        document.getElementById("card").classList.add("extend");
        document.getElementById("card").classList.remove("extend2");
        document.querySelectorAll("div")[0].classList.add("show");
    });
    document.getElementById("recSenha").addEventListener("click", function () {
        document.getElementById("teste").classList.add("slide2");
        document.getElementById("card").classList.add("extend2");
        document.querySelectorAll("div")[0].classList.remove("show");
    });
});
