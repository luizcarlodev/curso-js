// var horario = new Date().getHours();
var horario = parseInt(12);
var foto = window.document.getElementById("foto");
var texthora = window.document.getElementById("txthorario");
var body = window.document.body;

function informar_horario() {
    texthora.innerText = `Agora ${horario === 1 ? "é" : "são"} ${horario} ${horario === 1 ? "hora" : "horas"}`;
}

function implementar_foto() {
    if (horario >= 0 && horario < 12) {
        foto.innerHTML = "<img src='assets/manha.jpg' alt=''>";
        body.style.backgroundColor = "rgb(70, 142, 236)";
    } else if (horario >= 12 && horario < 18) {
        foto.innerHTML = "<img src='assets/tarde.jpg' alt=''>";
        body.style.backgroundColor = "rgb(240, 187, 90)";
    } else {
        foto.innerHTML = "<img src='assets/noite.jpg' alt=''>";
        body.style.backgroundColor = "rgb(6, 50, 107)";
    }
}

// foto.addEventListener("load", implementar_foto);
// texthora.addEventListener("load", implementar_foto);
// informar_horario();
// implementar_foto();

window.addEventListener("load", function () {
    informar_horario();
    implementar_foto();
});
