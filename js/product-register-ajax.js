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
            var image = getId('image').getAttribute('src');
            var data = JSON.stringify({
                nome: name,
                preco: price,
                quantidade: amount,
                imagem: image ? image : null,
                descricao: observation,
                status: true
            });
            var request = new XMLHttpRequest();
            request.open('POST', 'http://192.168.10.192:3500/product');
            request.setRequestHeader('Content-Type', 'application/json');
            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    getClass('.card-position')[0].classList.add('display-pattern');
                    getClass('.left')[0].classList.remove('arrow-disabled');
                    getClass('.left')[0].removeAttribute('disabled');
                    getClass('.right')[0].classList.remove('arrow-disabled');
                    getClass('.right')[0].removeAttribute('disabled');
                    listing();
                    callProduct();
                    productDisabled();
                    setTimeout(function() {
                        getClass('.product-register')[0].classList.remove('open');
                        getClass('.card-position')[0].classList.add('open');
                        getId('register-button').classList.remove('register-button');
                        getId('register-button').classList.add('register-button-disabled');
                        getId('register-button').setAttribute('disabled', 'disabled');
                    }, 100);
                    setTimeout(function() {
                        getClass('.input-text')[0].classList.remove('label-blur');
                        getClass('.input-text')[1].classList.remove('label-blur');
                        getClass('.input-text')[2].classList.remove('label-blur');
                        getClass('.input-text-area')[0].classList.remove('text-area-blur');
                        getClass('.product-register')[0].reset();
                        getClass('.product-register')[0].classList.remove('display-pattern');
                        // getClass('.product-insert-photo')[0].src = null;
                    }, 280)
                } else {
                    console.log('nao pegou')
                }
            }
            ;
            request.send(data);
        }
    }
);



