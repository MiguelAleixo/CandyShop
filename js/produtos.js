window.addEventListener('load', function () {

    var listaProduto = [{
        nome: 'Ouro Branco',
        quant: 6,
    }, {
        nome: 'Sacole',
        quant: 5,
    }, {
        nome: 'Coca-Cola',
        quant: 4,
    }, {
        nome: 'Chamito',
        quant: 10,
    }, {
        nome: 'Salgadinho',
        quant: 10,
    }, {
        nome: 'Bolacha',
        quant: 5,
    }, {
        nome: 'Pastilha',
        quant: 80,
    }, {
        nome: 'Batom',
        quant: 45,
    }, {
        nome: 'Laka',
        quant: 20,
    }, {
        nome: 'Sensação',
        quant: 30,
    }];


    function montarLista(lista) {
        var table = document.getElementById('dadosProd');
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
            table.appendChild(newTr).classList.add('produto');
            newTr.appendChild(newTd);
            newTd.appendChild(newImg).classList.add('fotoProd');
            newTr.appendChild(newTd2).classList.add('nomeProd');
            newTr.appendChild(newTd3).classList.add('quantProd');
            newTr.appendChild(newTd4);
            newTd4.appendChild(newIconEdit).classList.add('material-icons', 'formIcons', 'edit');
            newTr.appendChild(newTd5);
            newTd5.appendChild(newIconBlock).classList.add('material-icons', 'formIcons', 'flag');

            document.getElementsByClassName('fotoProd')[i].setAttribute('src', 'image/dolim.jpg');
            document.getElementsByClassName('edit')[i].setAttribute('tabindex', '1');
            document.getElementsByClassName('flag')[i].setAttribute('tabindex', '1');

            document.getElementsByClassName('edit')[i].innerText = 'create';
            document.getElementsByClassName('flag')[i].innerText = 'flag';
            document.getElementsByClassName('nomeProd')[i].innerText = lista[i].nome;
            document.getElementsByClassName('quantProd')[i].innerText = lista[i].quant;

            document.getElementsByClassName('flag')[i].onclick = function(){
                var produto = document.getElementsByClassName('produto');
                    this.parentElement.parentElement.classList.toggle('desativado');
                this.parentElement.parentElement.setAttribute('disabled', 'disabled');
            }
        }
    }
    montarLista(listaProduto);



    document.getElementsByClassName('filter')[0].onclick = function () {
        document.getElementsByClassName('textProd')[0].style.display = 'none';
        document.getElementsByClassName('pesquisa')[0].style.display = 'block';
    };
    document.getElementsByClassName('exit')[0].onclick = function () {
        document.getElementsByClassName('textProd')[0].style.display = 'block';
        document.getElementsByClassName('pesquisa')[0].style.display = 'none';
    };
    document.getElementsByClassName('buttonText2')[0].onclick = function () {
        var icone = document.getElementsByTagName('i');
        document.getElementsByClassName('nav')[0].classList.add("close");
        document.getElementsByClassName('buttonText2')[0].classList.remove("show");
        document.getElementsByClassName('buttonText2')[1].classList.remove("show");
        document.getElementsByClassName('navInside')[0].classList.remove("activeB");
        document.getElementsByClassName('navInside')[1].classList.remove("activeB");
        icone[2].classList.remove("baixo");
        icone[3].classList.remove("baixo");
        document.getElementsByClassName('links')[0].classList.add("close");
        document.getElementsByClassName('links')[1].classList.add("close");
        document.getElementsByClassName('cardProdutos')[0].style.transform = 'scale(1)';
        document.getElementsByClassName('bar')[0].classList.add('barExtend');
    };



    // PESQUISA

    var pesquisa = document.getElementsByClassName('pesquisaProd')[0];
    // pesquisa.onkeydown = function () {
    //     setTimeout(function () {
    //         var listaFiltrada = listaProduto.filter(function (item) {
    //             return (item.nome.toLowerCase().indexOf(pesquisa.value.toLowerCase()) !== -1);
    //         });
    //         montarLista(listaFiltrada)
    //     })
    // };
});



