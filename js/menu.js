window.addEventListener('load', function classes() {
    function getClass(classe) {
        return document.querySelectorAll(classe);
    }
    function getId(id) {
        return document.getElementById(id);
    }


    // ABRIR MENU

    getClass('.menu-icon')[0].onclick = function () {
        getClass('.nav')[0].classList.remove('close');
    };

    // FECHAR MENU

    getClass('.menu-icon')[1].onclick = function () {
        getClass('.nav')[0].classList.add('close');
        for (var i = 0; i < 2; i++) {
            getClass('.nav-button')[i].classList.remove('show');
            getClass('.nav-inside')[i].classList.remove('active-button');
            getClass('.nav-action')[i].classList.remove('show');
            getClass('.arrow-list')[i].classList.remove('down');
            getClass('.action')[i].classList.add('close');
        }
    };

    // NAVEGAR PELO MENU

    getClass('.nav-inside')[0].onclick = function () {
        this.classList.toggle('active-button');
        getClass('.action')[0].classList.toggle('close');
        getClass('.nav-action')[0].classList.toggle('show');
        getClass('.arrow-list')[0].classList.toggle('down');
    };

    getClass('.nav-inside')[1].onclick = function () {
        this.classList.toggle('active-button');
        getClass('.action')[1].classList.toggle('close');
        getClass('.nav-action')[1].classList.toggle('show');
        getClass('.arrow-list')[1].classList.toggle('down');
    };

    // ABRIR TELA DE PRODUTO

    getClass('.action')[0].onclick = function () {

        getClass('.nav')[0].classList.add('close');
        for (var i = 0; i < 2; i++) {
            getClass('.nav-button')[i].classList.remove('show');
            getClass('.nav-inside')[i].classList.remove('active-button');
            getClass('.nav-action')[i].classList.remove('show');
            getClass('.arrow-list')[i].classList.remove('down');
            getClass('.action')[i].classList.add('close');
        }
            getClass('.card-position')[0].classList.add('display-pattern');
            setTimeout(function () {
                getClass('.card-position')[0].classList.add('open');
                getClass('.bar')[0].classList.add('bar-extend');
            }, 100)

    };

    // LOGOFF

    getClass('.user-photo')[0].onfocus = function () {
        this.style.transform = '';
        getClass('.logoff')[0].classList.add('display-pattern');
        setTimeout(function () {
        getClass('.logoff')[0].classList.add('open-logoff');
        })
    };
    getClass('.user-photo')[0].onblur = function () {
        this.style.transform = '';
        setTimeout(function () {
            getClass('.logoff')[0].classList.remove('display-pattern');
        }, 200);
        getClass('.logoff')[0].classList.remove('open-logoff');
    };
    getClass('.user-photo')[0].onmousemove = function () {
        this.style.transform = 'scale(1.1)';
    };
    getClass('.user-photo')[0].onmouseout = function () {
        this.style.transform = '';
    };
});


