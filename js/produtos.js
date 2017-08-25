// window.addEventListener('load', function () {
//     function getClass(classe) {
//         return document.querySelectorAll(classe);
//     }
//
//     var listaProduto = [{
//         nome: 'Ouro Branco',
//         quant: 6,
//     }, {
//         nome: 'Sacole',
//         quant: 5,
//     }, {
//         nome: 'Brunao',
//         quant: 24,
//     }, {
//         nome: 'Muller',
//         quant: 1,
//     }, {
//         nome: 'Salgadinho',
//         quant: 10,
//     }, {
//         nome: 'Bolacha',
//         quant: 5,
//     }, {
//         nome: 'Pastilha',
//         quant: 80,
//     }, {
//         nome: 'Batom',
//         quant: 45,
//     }];
//
//     function montarLista(lista) {
//         var table = document.getElementById('product-data');
//         table.innerHTML = '';
//         for (var i = 0; i < lista.length; i++) {
//             var newTr = document.createElement('tr');
//             var newTd = document.createElement('td');
//             var newTd2 = document.createElement('td');
//             var newTd3 = document.createElement('td');
//             var newTd4 = document.createElement('td');
//             var newTd5 = document.createElement('td');
//             var newImg = document.createElement('img');
//             var newIconEdit = document.createElement('i');
//             var newIconBlock = document.createElement('i');
//             table.appendChild(newTr).classList.add('product');
//             newTr.appendChild(newTd);
//             newTd.appendChild(newImg).classList.add('product-photo');
//             newTr.appendChild(newTd2).classList.add('product-name');
//             newTr.appendChild(newTd3).classList.add('product-amount');
//             newTr.appendChild(newTd4);
//             newTd4.appendChild(newIconEdit).classList.add('material-icons', 'list-icons', 'edit');
//             newTr.appendChild(newTd5);
//             newTd5.appendChild(newIconBlock).classList.add('material-icons', 'list-icons', 'flag');
//
//             getClass('.product-photo')[i].setAttribute('src', 'image/dolim.jpg');
//             getClass('.edit')[i].setAttribute('tabindex', '1');
//             getClass('.flag')[i].setAttribute('tabindex', '1');
//
//             getClass('.edit')[i].innerText = 'create';
//             getClass('.flag')[i].innerText = 'flag';
//             getClass('.product-name')[i].innerText = lista[i].nome;
//             getClass('.product-amount')[i].innerText = lista[i].quant;
//
//             document.getElementsByClassName('flag')[i].onclick = function () {
//                 var product = document.getElementsByClassName('product');
//                 this.parentElement.parentElement.classList.toggle('desativado');
//                 this.parentElement.parentElement.setAttribute('disabled', 'disabled');
//             }
//         }
//     }
//     montarLista(listaProduto);











// PESQUISA

// var pesquisa = document.getElementsByClassName('pesquisaProd')[0];
// pesquisa.onkeydown = function () {
//     setTimeout(function () {
//         var listaFiltrada = listaProduto.filter(function (item) {
//             return (item.nome.toLowerCase().indexOf(pesquisa.value.toLowerCase()) !== -1);
//         });
//         montarLista(listaFiltrada)
//     })
// };











// });


