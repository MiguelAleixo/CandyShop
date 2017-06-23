window.onload = function inicio() {
    document.getElementById("email").addEventListener("focus", function () {
        document.getElementsByTagName("label")[0].classList.add("sobelabel");
        document.getElementsByTagName("label")[0].classList.add("vermelho");
        document.getElementsByTagName("p")[0].classList.add("si");
        var input = document.getElementById("email");
        var regex = input.getAttribute("pattern");
        regex = new RegExp(regex);
        if (regex.test(input.value)) {
            document.getElementsByTagName("label")[0].classList.add("rosa");
            document.getElementsByTagName("label")[0].classList.remove("vermelho");
            document.getElementsByTagName("p")[0].classList.remove("si");
        }
        else{
            document.getElementsByTagName("label")[0].classList.remove("rosa");
            document.getElementsByTagName("label")[0].classList.add("vermelho");
        }
    });
    document.getElementById("email").addEventListener("blur", function () {
        var teste = document.getElementById("email").value.length;
        var input = document.getElementById("email");
        var regex = input.getAttribute("pattern");
        regex = new RegExp(regex);
        if (regex.test(input.value)) {
            document.getElementsByTagName("label")[0].classList.add("sobelabel");
            document.getElementsByTagName("label")[0].classList.add("cinza");
            document.getElementsByTagName("label")[0].classList.remove("vermelho");
            document.getElementsByTagName("label")[0].classList.remove("rosa");

        }
        else if (regex.test(!input.value)){
            document.getElementsByTagName("label")[0].classList.add("sobelabel");
            document.getElementsByTagName("label")[0].classList.add("vermelho");
        }
        else if (teste === 0){
            document.getElementsByTagName("label")[0].classList.remove("sobelabel");
        }
        var barra = document.getElementById("email");
        var regex2 = input.getAttribute("pattern");
        regex2 = new RegExp(regex2);
        if (regex2.test(barra.value)){
            document.getElementsByTagName("input")[0].classList.remove("barred");
        }
        else {
            document.getElementsByTagName("input")[0].classList.add("barred");
        }
    })
    document.getElementById("email").addEventListener("keydown", function () {
        setTimeout(function () {
            var input = document.getElementById("email");
            var regex = input.getAttribute("pattern");
            regex = new RegExp(regex);
            if (regex.test(input.value)) {
                document.getElementsByTagName("label")[0].classList.add("rosa");
                document.getElementsByTagName("label")[0].classList.remove("vermelho");
                document.getElementsByTagName("p")[0].classList.remove("si");
                document.getElementsByTagName("button")[0].classList.add("botao");
                document.getElementsByTagName("button")[0].classList.remove("botaop");
            }
            else{
                document.getElementsByTagName("label")[0].classList.remove("rosa");
                document.getElementsByTagName("label")[0].classList.add("vermelho");
                document.getElementsByTagName("p")[0].classList.add("si");
                document.getElementsByTagName("button")[0].classList.remove("botao");
                document.getElementsByTagName("button")[0].classList.add("botaop");
            }
        });
    });
};
