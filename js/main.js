$("#btn-palavra-chave").click(guardaPalavraChave);


function guardaPalavraChave(event){
    let impedirReloading = event.preventDefault();
    let $palavraChave = $("#palavra-chave").val();
    let arrayPalavraSemEspaco = $palavraChave.trim().split(/\s+/);
    let palavraPorLetra = arrayPalavraSemEspaco.join(" ").split("");
    delCampoPalavraChave(palavraPorLetra);
}

function delCampoPalavraChave(palavra){
    let tempoRemocao = 600;
    let $formulario = $("#form-palChave");
    $formulario.fadeOut(tempoRemocao);
    setTimeout(function(){
        $formulario.remove();
        mostraPalavras(palavra);
    },tempoRemocao);
}

function mostraPalavras(palavra){
    let  $divPalavras = $("#palavras");
    $(palavra).each(function(){
        let letra = this;
        let conteudo;
        let temEspacoEmBranco = /\s/.test(letra)
        if(temEspacoEmBranco)
            conteudo = " ";
        else if(letra == "-")
            conteudo = letra;
        else
            conteudo = "_";       

        let $letraChave = $("<span>").text(conteudo);
        $($divPalavras).append($letraChave);
    })
}
