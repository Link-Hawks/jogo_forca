$("#btn-palavra-chave").click(guardaPalavraChave);


function guardaPalavraChave(event){
    event.preventDefault();
    let palavraChave = $("#palavra-chave").val();
    let arrayPalavraSemEspaco = palavraChave.trim().split(/\s+/);
    let palavraPorLetra = arrayPalavraSemEspaco.join(" ").split("");
    let tempoRemocao = 600;
    let formulario = $(this).parent().parent().parent();
    formulario.fadeOut(tempoRemocao);
    setTimeout(function(){
        formulario.remove();
        mostraPalavras(palavraPorLetra);
    },tempoRemocao);
}

function mostraPalavras(palavra){
    let divPalavras = $("#palavras");
    $(palavra).each(function(){
        let conteudo;
        if(/\s/.test(this)){
            conteudo = " ";
        }else if(this == "-"){
            conteudo = this;
        }else{
            conteudo = "_";
        }

        let letra = $("<span>").text(conteudo);
        $(divPalavras).append(letra);
    })
}