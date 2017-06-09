window.onload = function inicio() {
    document.getElementById("senha").addEventListener("blur", function () {
        var input = document.getElementById("senha").value;
        if (input){
            document.getElementsByTagName("label")[0].classList.add("uso");
        } else{
            document.getElementsByTagName("label")[0].classList.remove("uso");
        }
    });
}