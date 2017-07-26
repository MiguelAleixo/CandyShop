var div = document.getElementsByTagName("div");
var icone = document.getElementsByTagName("i");

window.onload = function inicio() {
    icone[0].addEventListener("click", function () {
        div[1].classList.remove("close");
    });

    icone[1].addEventListener("click", function () {
        div[1].classList.add("close");
        div[6].classList.remove("show");
        div[10].classList.remove("show");
        div[3].classList.remove("active");
        div[7].classList.remove("active");
        icone[2].classList.remove("baixo");
        icone[3].classList.remove("baixo");
        div[5].classList.add("close");
        div[9].classList.add("close");
    });

    div[3].addEventListener("click", function () {
        div[5].classList.toggle("close");
        div[6].classList.toggle("show");
        div[3].classList.toggle("active");
        icone[2].classList.toggle("baixo");
    });

    div[7].addEventListener("click", function () {
        div[9].classList.toggle("close");
        div[10].classList.toggle("show");
        div[7].classList.toggle("active");
        icone[3].classList.toggle("baixo");
    });

};