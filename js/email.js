window.onload = function inicio() {
    document.getElementById("email").addEventListener("blur", function () {
        var input = document.getElementById("email").value;
        if (input){
            document.getElementsByTagName("label")[0].classList.add("uso");
        } else{
            document.getElementsByTagName("label")[0].classList.remove("uso");
        }
    });
}