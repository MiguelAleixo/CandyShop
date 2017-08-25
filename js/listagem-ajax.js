window.addEventListener('load', function () {
    function getClass(classe) {
        return document.querySelectorAll(classe);
    }

    var l = 10;
    var p = 1;
    var request = new XMLHttpRequest();
    request.open('GET', 'http://192.168.10.192:3500/product?l=' + l + '&' + 'p=' + p);
    request.onload = function () {

        if (request.status >= 200 && request.status < 400) {
            function montarLista(lista) {
                var table = document.getElementById('product-data');
                table.innerHTML = '';
                for (var i = 0; i < lista.length; i++) {
                    var newTr = document.createElement('tr');
                    var newTd = document.createElement('td');
                    var newTd2 = document.createElement('td');
                    var newTd3 = document.createElement('td');
                    var newTd4 = document.createElement('td');
                    var newTd5 = document.createElement('td');
                    var newImg = document.createElement('img');
                    var newIconEdit = document.createElement('i');
                    var newIconBlock = document.createElement('i');
                    table.appendChild(newTr).classList.add('product');
                    newTr.appendChild(newTd);
                    newTd.appendChild(newImg).classList.add('product-photo');
                    newTr.appendChild(newTd2).classList.add('product-name');
                    newTr.appendChild(newTd3).classList.add('product-amount');
                    newTr.appendChild(newTd4);
                    newTd4.appendChild(newIconEdit).classList.add('material-icons', 'list-icons', 'edit');
                    newTr.appendChild(newTd5);
                    newTd5.appendChild(newIconBlock).classList.add('material-icons', 'list-icons', 'flag');
                    newTr.setAttribute('data-id', lista[i].id);

                    getClass('.product-photo')[i].setAttribute('src', lista[i].imagem);
                    getClass('.edit')[i].setAttribute('tabindex', '1');
                    getClass('.flag')[i].setAttribute('tabindex', '1');
                    getClass('.edit')[i].innerText = 'create';
                    getClass('.flag')[i].innerText = 'flag';
                    getClass('.product-name')[i].innerText = lista[i].nome;
                    getClass('.product-amount')[i].innerText = lista[i].quantidade;

                    getClass('.flag')[i].onclick = function () {
                        var product = document.getElementsByClassName('product');
                        this.parentElement.parentElement.classList.toggle('desativado');
                        this.parentElement.parentElement.setAttribute('disabled', 'disabled');
                    };
                }
            }

            montarLista(JSON.parse(request.response).result);
        }
        else {
            alert('erro')
        }
    };

    request.send();
});



