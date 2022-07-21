var campoFiltro = document.querySelector("#filtrar-tabela");

// A tabela será filtrada a cada letra digitada no campo através do item "input"
campoFiltro.addEventListener("input", function() {
    
    // busca todos os pacientes da tabela
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) { 
        console.log("algo foi digitado");
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            /* expressão regular  (o que ela busca, como ela busca, neste caso o i deixa buscar maiusculas e minusculas juntas)
             i = insensitive case */
            var expressao = new RegExp(this.value, "i");
                        
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
