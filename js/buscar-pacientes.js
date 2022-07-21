var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    
    /* O objeto XMLHttpRequest é quem é responsável por fazer requisições HTTP assíncronas com Javascript.
    Apesar de ter o XML no nome hoje em dia este objeto pode trafegar diversos outros tipos de dados além do XML, 
    este nome só se manteve devido a um legado histórico.
    E para instanciar um novo Objeto XMLHttpRequest devemos utilizar a sintaxe com a palavrinha new */
    var xhr = new XMLHttpRequest();

    // abre a conexao para a requisicao do tipo GET no seguinte endereco
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    // quando a requisicao for feita, mostre 
    xhr.addEventListener("load", function() {

        var erroAjax = document.querySelector("#erro-ajax");

        // status 200 significa deu tudo certo
        if (xhr.status == 200) {
            // remove o erro
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;

            // vai ler todo o texto e devolver um js
            var pacientes = JSON.parse(resposta);

            // vai passar por todo o array e vai incluindo cada paciente na tabela
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            // se nao deu certo mostra o erro
            erroAjax.classList.remove("invisivel");
        }
    });

    // envia a requisicao
    xhr.send();
});
