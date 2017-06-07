window.onload = function inicio() {
    document.getElementById("senha").addEventListener("blur", function () {
        var input = document.getElementById("senha").value;
        if (input){
            document.getElementsByTagName("label")[0].style.fontSize = "12px";
            document.getElementsByTagName("label")[0].style.top = "-20px";
            document.getElementsByTagName("label")[0].style.transition = "0.2s";
        } else{
            document.getElementsByTagName("label")[0].style.color = "rgba(0,0,0,0.42)";
            document.getElementsByTagName("label")[0].style.top = "3px";
            document.getElementsByTagName("label")[0].style.fontSize = "16px";
            document.getElementsByTagName("label")[0].style.transition = "0.2s";
         }


    });
}
