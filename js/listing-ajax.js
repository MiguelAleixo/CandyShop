window.addEventListener('load', function () {
    listing();
});

function listing(l, p) {
    function getClass(classe) {
        return document.querySelectorAll(classe);
    }
    function getId(id) {
        return document.getElementById(id);
    }

    var l = l || 10;
    var p = p || 1;
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
                    if (lista[i].imagem) {
                        getClass('.product-photo')[i].setAttribute('src', lista[i].imagem);
                    } else {
                        getClass('.product-photo')[i].setAttribute('src', './image/foto-default.png');
                    }
                    getClass('.edit')[i].setAttribute('tabindex', '1');
                    getClass('.flag')[i].setAttribute('tabindex', '1');
                    getClass('.edit')[i].innerText = 'create';
                    getClass('.flag')[i].innerText = 'flag';
                    getClass('.product-name')[i].innerText = lista[i].nome;
                    getClass('.product-amount')[i].innerText = lista[i].quantidade;
                    getClass('.pagination')[0].innerText = (JSON.parse(request.response).result.length*p)-9;
                    getClass('.pagination')[2].innerText = JSON.parse(request.response).result.length*p;
                    getClass('.pagination')[4].innerText = JSON.parse(request.response).result[0].totalLinhas;

                    if((JSON.parse(request.response).result[i].status) == false){
                        newTr.classList.add('desativado');
                        newTr.setAttribute('disabled', 'disabled');
                    }
                    else{
                        newTr.classList.remove('desativado');
                        newTr.removeAttribute('disabled', 'disabled');
                    }
                }
            }
            montarLista(JSON.parse(request.response).result);
        }else{
            console.log('nao pegou');
        }

        var pesquisa = document.getElementsByClassName('product-search')[0];
        pesquisa.onkeydown = function () {
            setTimeout(function () {
                var listaFiltrada = JSON.parse(request.response).result.filter(function (item) {
                    return (item.nome.toLowerCase().indexOf(pesquisa.value.toLowerCase()) !== -1);
                });
                montarLista(listaFiltrada);
                callProduct();
                productDisabled();

            })
        };
        getClass('.right')[0].onclick = function () {
            listing(l, p + 1);
            callProduct();
            productDisabled();
        };
        getClass('.left')[0].onclick = function () {
            listing(l, p - 1);
            callProduct();
            productDisabled();
        };

    };
    request.send();
}