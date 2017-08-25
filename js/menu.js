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
            })

    };

    // TELA DE PRODUTO

    // FILTRO

    getClass('.filter')[0].onclick = function () {
        getClass('.product-text')[0].style.display = 'none';
        getClass('.search')[0].style.display = 'block';
    };
    getClass('.exit')[0].onclick = function () {
        getClass('.product-text')[0].style.display = 'block';
        getClass('.search')[0].style.display = 'none';
    };


    // ADICIONAR PRODUTO


    getClass('.button-add')[0].onclick = function () {
            getClass('.product-register')[0].classList.add('display-pattern');
            setTimeout(function () {
                getClass('.product-register')[0].classList.add('open');
                getClass('.card-position')[0].classList.remove('open');
            })
    };
    getClass('.cancel-button')[0].onclick = function () {
        getClass('.input-text')[0].classList.remove('label-blur');
        getClass('.input-text')[1].classList.remove('label-blur');
        getClass('.input-text')[2].classList.remove('label-blur');
        getClass('.input-text-area')[0].classList.remove('text-area-blur');
        getClass('.product-register')[0].classList.remove('open');
        getClass('.product-register')[0].reset();
        getClass('.card-position')[0].classList.add('open');
        getId('register-button').classList.add('register-button');
        getId('register-button').classList.remove('cancel-button');
        getId('register-button').setAttribute('disabled', 'disabled');
        setTimeout(function() {
            getClass('.product-register')[0].classList.remove('display-pattern')
        }, 280)
    };
    getClass('.cancel-button')[1].onclick = function () {
        getClass('.input-text')[0].classList.remove('label-blur');
        getClass('.input-text')[1].classList.remove('label-blur');
        getClass('.input-text')[2].classList.remove('label-blur');
        getClass('.input-text-area')[1].classList.remove('text-area-blur');
        getClass('.product-register')[1].classList.remove('open');
        getClass('.product-register')[1].reset();
        getClass('.card-position')[0].classList.add('open');
        setTimeout(function() {
            getClass('.product-register')[1].classList.remove('display-pattern')
        }, 280)
    };
    getClass('.photo-add')[0].onfocus = function () {
        getClass('.photo-option')[0].classList.remove('hidden');
    };
    getClass('.photo-add')[1].onfocus = function () {
        getClass('.photo-option')[1].classList.remove('hidden');
    };
    getClass('.photo-add')[0].onblur = function () {
        getClass('.photo-option')[0].classList.add('hidden');
    };
    getClass('.photo-add')[1].onblur = function () {
        getClass('.photo-option')[1].classList.add('hidden');
    };


    // VALIDAÇÃO

    var inputBox = getClass('.input-box');
    for (var i = 0; i < inputBox.length; i++) {
        inputBox[i].onblur = function () {
            if (this.value.length > 0) {
                this.classList.add('input-blur');
                this.nextElementSibling.classList.add('label-blur');

            } else {
                this.classList.remove('input-blur');
                this.nextElementSibling.classList.remove('label-blur');
            }
        };
        inputBox[i].onkeydown = function () {
            setTimeout(function () {
                if (inputBox[0].value.length > 0 && inputBox[1].value.length > 0 && inputBox[2].value.length > 0) {
                    getId('register-button').classList.add('cancel-button');
                    getId('register-button').classList.remove('register-button');
                    getId('register-button').removeAttribute('disabled')

                } else {
                    getId('register-button').classList.add('register-button');
                    getId('register-button').classList.remove('cancel-button');
                    getId('register-button').setAttribute('disabled', 'disabled');
                }

                if (inputBox[3].value.length > 0 && inputBox[4].value.length > 0 && inputBox[5].value.length > 0) {
                    getId('edit-button').classList.add('cancel-button');
                    getId('edit-button').classList.remove('register-button');
                    getId('edit-button').removeAttribute('disabled')

                } else {
                    getId('edit-button').classList.add('register-button');
                    getId('edit-button').classList.remove('cancel-button');
                    getId('edit-button').setAttribute('disabled', 'disabled');
                }
            });
        };
    }
    for (var i = 0; i < 2; i++) {
        getClass('.text-area')[i].onblur = function () {
            if (this.value.length > 0) {
                this.nextElementSibling.classList.add('text-area-blur');
            } else {
                this.nextElementSibling.classList.remove('text-area-blur');
            }
        };
    }

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


