window.addEventListener('load', function () {
        function getClass(classe) {
            return document.querySelectorAll(classe);
        }

        function getId(id) {
            return document.getElementById(id);
        }

        getId('edit-button').onclick = function () {
            var name = getId('name-edit').value;
            var price = getId('price-edit').value;
            var amount = getId('amount-edit').value;
            var observation = getId('observation-edit').value;
            var id = getId('id').value;
            var image = getId('new-img').value;
            var data = JSON.stringify({
                id: id,
                nome: name,
                preco: price,
                quantidade: amount,
                imagem: image ? image : null,
                descricao: observation,
                status: true
            });
            var request = new XMLHttpRequest();
            request.open('PUT', 'http://192.168.10.192:3500/product/' + id);
            request.setRequestHeader('Content-Type', 'application/json');
            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
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
                        getClass('.card-position')[0].classList.add('open');
                    }, 100);
                    setTimeout(function() {
                        getClass('.product-register')[1].classList.remove('display-pattern');
                        getClass('.product-insert-photo')[1].src = '';
                    }, 280)
                } else
                {
                    console.log('nao pegou');

                }
            }
            ;
            request.send(data);
        }
    }
);



