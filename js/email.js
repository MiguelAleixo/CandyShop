window.onload = function inicio() {
    document.getElementById("email").addEventListener("focus", function () {
        document.getElementsByTagName("label")[0].classList.add("sobelabel");
        document.getElementsByTagName("label")[0].classList.remove("cinza");
    });
    document.getElementById("email").addEventListener("blur", function (){
        document.getElementsByTagName("label")[0].classList.remove("sobelabel");
        var input = document.getElementById("email").value;
        if (input) {
            document.getElementsByTagName("label")[0].classList.add("cinza");
            document.getElementsByTagName("label")[0].classList.add("sobelabel");
        }
        else if (!input){
            document.getElementsByTagName("label")[0].classList.remove("cor");
            document.getElementsByTagName("label")[0].classList.remove("foco");
        }

    });
};