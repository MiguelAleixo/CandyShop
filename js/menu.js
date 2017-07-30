var div = document.getElementsByTagName('div');
var icone = document.getElementsByTagName('i');
var imagemUser = document.getElementsByTagName('img');
var corpo = document.getElementsByTagName('body');

window.onload = function classes() {
    icone[0].onclick = function () {
        div[1].classList.remove("close");
        div[13].classList.add('active');
        div[11].classList.add('close');
        div[12].classList.remove('show');
        corpo[0].classList.remove('active');
    };
    div[13].onclick = function () {
        div[13].classList.remove('active');
        div[1].classList.add("close");
        div[6].classList.remove("show");
        div[10].classList.remove("show");
        div[3].classList.remove("active");
        div[7].classList.remove("active");
        icone[2].classList.remove("baixo");
        icone[3].classList.remove("baixo");
        div[5].classList.add("close");
        div[9].classList.add("close");
    };
    icone[1].onclick = function () {
        div[13].classList.remove('active');
        div[1].classList.add("close");
        div[6].classList.remove("show");
        div[10].classList.remove("show");
        div[3].classList.remove("activeB");
        div[7].classList.remove("activeB");
        icone[2].classList.remove("baixo");
        icone[3].classList.remove("baixo");
        div[5].classList.add("close");
        div[9].classList.add("close");
    };


    div[3].onclick = function () {
        div[5].classList.toggle("close");
        div[6].classList.toggle("show");
        div[3].classList.toggle("activeB");
        icone[2].classList.toggle("baixo");
    };

    div[7].onclick = function () {
        div[9].classList.toggle("close");
        div[10].classList.toggle("show");
        div[7].classList.toggle("activeB");
        icone[3].classList.toggle("baixo");
    };

    imagemUser[1].onclick = function () {
        div[11].classList.toggle('close');
        div[12].classList.toggle('show');
        corpo[0].classList.toggle('active');
        imagemUser[1].style.transform = '';
    };
    imagemUser[1].onmousemove = function () {
        imagemUser[1].style.transform = 'scale(1.1)';
    };

    imagemUser[1].onmouseout = function () {
        imagemUser[1].style.transform = '';
    };
};