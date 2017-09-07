window.addEventListener('load', productDisabled);

function productDisabled() {
    setTimeout(function () {
        function getClass(classe) {
            return document.querySelectorAll(classe);
        }

        var product = getClass('.product');
        var i;
        for (i = 0; i < product.length; i++) {
            getClass('.flag')[i].onclick = function () {
                var that = this;
                var id = this.parentNode.parentNode.getAttribute('data-id');
                var request = new XMLHttpRequest();
                request.open('PUT', 'http://192.168.10.192:3500/product?id=' + id);
                request.onload = function () {
                    if (request.status >= 200 && request.status < 400) {
                        if((JSON.parse(request.response).result[0].atualizarstatus.statusAtual) == false){
                            console.log(false);
                            that.parentElement.parentElement.classList.add('desativado');
                            that.parentElement.parentElement.setAttribute('disabled', 'disabled');

                        }else{
                            console.log(true);
                            that.parentElement.parentElement.classList.remove('desativado');
                            that.parentElement.parentElement.removeAttribute('disabled');
                        }

                    }
                    else {
                        console.log('erro')
                    }
                };
                request.send();
            }

        };
    }, 100);

}

