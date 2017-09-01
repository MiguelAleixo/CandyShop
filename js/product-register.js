window.addEventListener('load', function () {
    function getClass(classe) {
        return document.querySelectorAll(classe);
    }

    function getId(id) {
        return document.getElementById(id);
    }

    getId('register-button').onclick = function () {
        var name = getId('name').value;
        var price = getId('price').value;
        var amount = getId('amount').value;
        var observation = getId('observation').value;
        var image = getId('image').src;
        var data = JSON.stringify({
            nome: name,
            preco: price,
            quantidade: amount,
            imagem: image,
            descricao: observation,
            status: true
        });
        var request = new XMLHttpRequest();
        request.open('POST', 'http://192.168.10.192:3500/product');
        request.setRequestHeader('Content-Type', 'application/json');
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                    getClass('.input-text')[0].classList.remove('label-blur');
                    getClass('.input-text')[1].classList.remove('label-blur');
                    getClass('.input-text')[2].classList.remove('label-blur');
                    getClass('.input-text-area')[0].classList.remove('text-area-blur');
                    getClass('.product-register')[0].classList.remove('open');
                    getClass('.product-register')[0].reset();
                    getClass('.card-position')[0].classList.add('open');
                    getId('register-button').classList.remove('register-button');
                    getId('register-button').classList.add('register-button-disabled');
                    getId('register-button').setAttribute('disabled', 'disabled');
                    setTimeout(function () {
                        getClass('.product-register')[0].classList.remove('display-pattern');
                        getClass('.product-insert-photo')[0].src = './image/foto-default.png';
                    }, 280)
            } else
                {
                    console.log('nao pegou')
                }
            }
            ;
            request.send(data);
        }
    }
);



