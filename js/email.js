window.onload = function inicio() {
    document.getElementById("email").addEventListener("blur", function () {
        var input = document.getElementsByTagName("input").value;
        if (input !== null ) {
            document.getElementsByTagName("label")[0].style.fontSize = "12px";
            document.getElementsByTagName("label")[0].style.top = "-20px";
            document.getElementsByTagName("label")[0].style.transition = "0.2s";
        } else if(input === null) {
            document.getElementsByTagName("label")[0].style.fontSize = "8pt";
            document.getElementsByTagName("label")[0].style.top = "-10px";
            document.getElementsByTagName("label")[0].style.transition = "0.2s";
            document.getElementsByTagName("label")[0].style.color = "#e91e63";
        }
        ;
    });
}