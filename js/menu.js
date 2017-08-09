var icone = document.getElementsByTagName('i');
var imagemUser = document.getElementsByTagName('img');
var corpo = document.getElementsByTagName('body');

window.addEventListener('load', function classes() {
    icone[0].onclick = function () {
        document.getElementsByClassName('nav')[0].classList.remove("close");
        // document.getElementsByClassName('background')[0].classList.add('active');
        document.getElementsByClassName('logoff')[0].classList.add('close');
        document.getElementsByClassName('buttonText2')[2].classList.remove('show');
        corpo[0].classList.remove('active');
    };
    // document.getElementsByClassName('background')[0].onclick = function () {
    //     document.getElementsByClassName('background')[0].classList.remove('active');
    //     document.getElementsByClassName('nav')[0].classList.add("close");
    //     document.getElementsByClassName('buttonText2')[0].classList.remove("show");
    //     document.getElementsByClassName('buttonText2')[1].classList.remove("show");
    //     document.getElementsByClassName('navInside')[0].classList.remove("active");
    //     document.getElementsByClassName('navInside')[1].classList.remove("active");
    //     icone[2].classList.remove("baixo");
    //     icone[3].classList.remove("baixo");
    //     document.getElementsByClassName('links')[0].classList.add("close");
    //     document.getElementsByClassName('links')[1].classList.add("close");
    // };
    icone[1].onclick = function () {
        // document.getElementsByClassName('background')[0].classList.remove('active');
        document.getElementsByClassName('nav')[0].classList.add("close");
        document.getElementsByClassName('buttonText2')[0].classList.remove("show");
        document.getElementsByClassName('buttonText2')[1].classList.remove("show");
        document.getElementsByClassName('navInside')[0].classList.remove("activeB");
        document.getElementsByClassName('navInside')[1].classList.remove("activeB");
        icone[2].classList.remove("baixo");
        icone[3].classList.remove("baixo");
        document.getElementsByClassName('links')[0].classList.add("close");
        document.getElementsByClassName('links')[1].classList.add("close");
    };
    document.getElementsByClassName('navInside')[0].onclick = function () {
        document.getElementsByClassName('links')[0].classList.toggle("close");
        document.getElementsByClassName('buttonText2')[0].classList.toggle("show");
        document.getElementsByClassName('navInside')[0].classList.toggle("activeB");
        icone[2].classList.toggle("baixo");
    };

    document.getElementsByClassName('navInside')[1].onclick = function () {
        document.getElementsByClassName('links')[1].classList.toggle("close");
        document.getElementsByClassName('buttonText2')[1].classList.toggle("show");
        document.getElementsByClassName('navInside')[1].classList.toggle("activeB");
        icone[3].classList.toggle("baixo");
    };

    imagemUser[1].onclick = function () {
        document.getElementsByClassName('logoff')[0].classList.toggle('close');
        document.getElementsByClassName('buttonText2')[2].classList.toggle('show');
        corpo[0].classList.toggle('active');
        imagemUser[1].style.transform = '';
    };
    imagemUser[1].onmousemove = function () {
        imagemUser[1].style.transform = 'scale(1.1)';
    };

    imagemUser[1].onmouseout = function () {
        imagemUser[1].style.transform = '';
    };
});