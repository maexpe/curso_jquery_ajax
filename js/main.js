function consultacep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(cep);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#num_cep").html("CEP " + response.cep);
            $(".cep").show();
            $(".barra_progresso").show();    
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra_progresso").hide();
});