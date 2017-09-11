window.addEventListener('load', function () {
    function getClass(classe) {
        return document.querySelectorAll(classe);
    }

    function getId(id) {
        return document.getElementById(id);
    }

    // TELA DE PRODUTO

    // FILTRO

    getClass('.filter')[0].onclick = function () {
        getClass('.product-text')[0].style.display = 'none';
        getClass('.search')[0].style.display = 'block';
    };
    getClass('.exit')[0].onclick = function () {
        getClass('.search')[0].reset();
        listing();
        callProduct();
        productDisabled();
        getClass('.product-text')[0].style.display = 'block';
        getClass('.search')[0].style.display = 'none';
    };


    // ADICIONAR PRODUTO


    getClass('.button-add')[0].onclick = function () {
        getClass('.product-register')[0].classList.add('display-pattern');
        setTimeout(function () {
            getClass('.product-register')[0].classList.add('open');
            getClass('.card-position')[0].classList.remove('open');
        }, 100);
        setTimeout(function () {
            getClass('.card-position')[0].classList.remove('display-pattern');
        }, 280)
    };
    getClass('.register-button')[0].onclick = function () {
        listing();
        callProduct();
        productDisabled();
        getClass('.card-position')[0].classList.add('display-pattern');
        getClass('.search')[0].reset();
        setTimeout(function () {
            getClass('.product-register')[0].classList.remove('open');
            getClass('.card-position')[0].classList.add('open');
            getId('register-button').classList.remove('register-button');
            getId('register-button').classList.add('register-button-disabled');
            getId('register-button').setAttribute('disabled', 'disabled');
        }, 100);
        setTimeout(function () {
            getClass('.input-text')[0].classList.remove('label-blur');
            getClass('.input-text')[1].classList.remove('label-blur');
            getClass('.input-text')[2].classList.remove('label-blur');
            getClass('.input-text-area')[0].classList.remove('text-area-blur');
            getClass('.product-register')[0].reset();
            getClass('.product-register')[0].classList.remove('display-pattern');
            getClass('.product-insert-photo')[0].src = null;
        }, 280)
    };
    getClass('.register-button')[1].onclick = function () {
        listing();
        callProduct();
        productDisabled();
        getClass('.card-position')[0].classList.add('display-pattern');
        setTimeout(function () {
            getClass('.input-text')[0].classList.remove('label-blur');
            getClass('.input-text')[1].classList.remove('label-blur');
            getClass('.input-text')[2].classList.remove('label-blur');
            getClass('.input-text-area')[1].classList.remove('text-area-blur');
            getClass('.product-register')[1].classList.remove('open');
            getClass('.product-register')[1].reset();
            getClass('.search')[0].reset();
            getClass('.card-position')[0].classList.add('open');
        }, 100);
        setTimeout(function () {
            getClass('.product-register')[1].classList.remove('display-pattern');
            getClass('.product-insert-photo')[1].src = '';
        }, 280)
    };

    // ADICIONAR OU REMOVER IMAGENS

    getClass('.button-photo')[0].onclick = function () {
        getClass('.photo-option')[0].classList.add('display-pattern');
        setTimeout(function () {
            getClass('.photo-option')[0].classList.remove('hidden');
        })
    };
    getClass('.button-photo')[1].onclick = function () {
        getClass('.photo-option')[1].classList.add('display-pattern');
        setTimeout(function () {
            getClass('.photo-option')[1].classList.remove('hidden');
        })
    };
    getClass('.button-photo')[0].onblur = function () {
        getClass('.photo-option')[0].classList.add('hidden');
        setTimeout(function () {
            getClass('.photo-option')[0].classList.remove('display-pattern')
        }, 280)
    };
    getClass('.button-photo')[1].onblur = function () {
        getClass('.photo-option')[1].classList.add('hidden');
        setTimeout(function () {
            getClass('.photo-option')[1].classList.remove('display-pattern')
        }, 280)
    };

    getClass('.photo-add')[0].onclick = function () {
        getClass('.photo-option')[0].classList.add('display-pattern');
        setTimeout(function () {
            getClass('.photo-option')[0].classList.remove('hidden');
        })
    };
    getClass('.photo-add')[1].onclick = function () {
        getClass('.photo-option')[1].classList.add('display-pattern');
        setTimeout(function () {
            getClass('.photo-option')[1].classList.remove('hidden');
        })
    };
    getClass('.photo-add')[0].onblur = function () {
        getClass('.photo-option')[0].classList.add('hidden');
        setTimeout(function () {
            getClass('.photo-option')[0].classList.remove('display-pattern')
        }, 280)
    };
    getClass('.photo-add')[1].onblur = function () {
        getClass('.photo-option')[1].classList.add('hidden');
        setTimeout(function () {
            getClass('.photo-option')[1].classList.remove('display-pattern')
        }, 280)
    };
    getClass('.option')[0].onclick = function () {
        getClass('.file-add')[0].click();
    };
    getClass('.option')[2].onclick = function () {
        getClass('.file-add')[1].click();
    };
    getClass('.option')[1].onclick = function () {
        getClass('.product-insert-photo')[0].src = '';

    };
    getClass('.option')[3].onclick = function () {
        getClass('.product-insert-photo')[1].src = '';
    };



    getClass('.file-add')[0].onchange = function () {

        var img = getClass('.product-insert-photo')[0];
        var choose = getClass('.file-add')[0].files[0];
        var read = new FileReader();
        read.onloadend = function () {
            img.src = read.result;
        };
        if (choose) {
            read.readAsDataURL(choose);
        } else {
            img.src = "";
        }
    };

    getClass('.file-add')[1].onchange = function () {
        var img = getClass('.product-insert-photo')[1];
        var choose = getClass('.file-add')[1].files[0];
        var read = new FileReader();
        read.onloadend = function () {
            img.src = read.result;
            getId('new-img').value = read.result;
        };
        if (choose) {
            read.readAsDataURL(choose);
        } else {
            img.src = "";
        }
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
                    getId('register-button').classList.add('register-button');
                    getId('register-button').classList.remove('register-button-disabled');
                    getId('register-button').removeAttribute('disabled')

                } else {
                    getId('register-button').classList.add('register-button-disabled');
                    getId('register-button').classList.remove('register-button');
                    getId('register-button').setAttribute('disabled', 'disabled');
                }

                if (inputBox[3].value.length > 0 && inputBox[4].value.length > 0 && inputBox[5].value.length > 0) {
                    getId('edit-button').classList.add('register-button');
                    getId('edit-button').classList.remove('register-button-disabled');
                    getId('edit-button').removeAttribute('disabled')

                } else {
                    getId('edit-button').classList.add('register-button-disabled');
                    getId('edit-button').classList.remove('register-button');
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


});


