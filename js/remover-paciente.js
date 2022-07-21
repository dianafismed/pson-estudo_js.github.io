var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    // o sistema vai esperar os 500 ms para efetuar o ato de remover
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
