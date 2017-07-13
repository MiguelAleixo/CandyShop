
window.onload = function inicio() {
    document.getElementsByClassName("material-icons")[0].addEventListener("click", function () {
        document.querySelector(".nav.close").classList.remove("close");
        // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.getElementsByClassName("material-icons")[1].addEventListener("click", function () {
            document.querySelector(".nav").classList.add("close");
            // document.body.style.backgroundColor = "#fff";
            // document.getElementsByTagName("div")[6].classList.toggle("show");
            // document.getElementsByTagName("div")[10].classList.toggle("show");
            // document.getElementsByTagName("div")[3].classList.toggle("active");
            // document.getElementsByTagName("div")[7].classList.toggle("active");
            //  document.getElementsByTagName("div")[5].classList.toggle("close");
            //   document.getElementsByTagName("div")[9].classList.toggle("close");

        })
    });
    document.getElementsByTagName("div")[3].addEventListener("click", function () {
        document.getElementsByTagName("div")[5].classList.toggle("close");
        document.getElementsByTagName("div")[6].classList.toggle("show");
        document.getElementsByTagName("div")[3].classList.toggle("active");
        document.getElementsByTagName("i")[2].classList.toggle("baixo");
    })
    document.getElementsByTagName("div")[7].addEventListener("click", function () {
        document.getElementsByTagName("div")[9].classList.toggle("close");
        document.getElementsByTagName("div")[10].classList.toggle("show");
        document.getElementsByTagName("div")[7].classList.toggle("active");
        document.getElementsByTagName("i")[3].classList.toggle("baixo");
    })
};
