window.addEventListener('load', callProduct);

function callProduct() {
    setTimeout(function () {
        function getClass(classe) {
            return document.querySelectorAll(classe);
        }

        function getId(id) {
            return document.getElementById(id);
        }

        for (var i = 0; i < getClass('.product').length; i++) {
            getClass('.edit')[i].onclick = function () {
                produtoPorId(this.parentNode.parentNode.getAttribute('data-id'));
            };
        }

        function produtoPorId(id) {

            var request = new XMLHttpRequest();
            request.open('GET', 'http://192.168.10.192:3500/product?id=' + id);
            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    getClass('.product-register')[1].classList.add('display-pattern');
                    setTimeout(function () {
                        getId('edit-button').classList.add('register-button');
                        getId('edit-button').classList.remove('register-button-disabled');
                        getId('edit-button').removeAttribute('disabled');
                        getClass('.product-register')[1].classList.add('open');
                        getClass('.card-position')[0].classList.remove('open');
                        getId('id').value = JSON.parse(request.response).result[0].id;
                        getId('name-edit').value = JSON.parse(request.response).result[0].nome;
                        getId('amount-edit').value = JSON.parse(request.response).result[0].quantidade;
                        getId('price-edit').value = JSON.parse(request.response).result[0].preco;
                        getId('observation-edit').value = JSON.parse(request.response).result[0].descricaoProduto;
                        if (getId('observation-edit').value.length > 0) {
                            getClass('.input-text-area')[1].classList.add('text-area-blur');
                        }

                        if (JSON.parse(request.response).result[0].imagem) {
                            getId('edit-photo').setAttribute('src', JSON.parse(request.response).result[0].imagem)
                        } else {
                            getId('edit-photo').setAttribute('src', './image/foto-default.png')
                        }
                    }, 50);
                    setTimeout(function () {
                        getClass('.card-position')[0].classList.remove('display-pattern');
                    }, 280);
                    for (var i = 3; i < 6; i++) {
                        getClass('.input-box')[i].classList.add('input-blur');
                        getClass('.input-text')[i].classList.add('label-blur');
                    }
                }
                else {
                    console.log('nao pegou');
                }
            };
            request.send();
        }
    }, 100)
}
