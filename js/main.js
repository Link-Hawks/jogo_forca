class Interface{

    delCampoPalavraChave(palavra){
        let tempoRemocao = 600;
        let $formulario = $("#form-palChave");
        $formulario.fadeOut(tempoRemocao);
        setTimeout(function(){
            $formulario.remove();
        },tempoRemocao);
    }

    criaPalavras(palavra){
        let $divPalavras = $("#palavras");
        let $paragrafoSecreto = $("<p>").attr("id","fraseSecreta");
        let $fraseSecreta = "";
        $divPalavras.append($paragrafoSecreto);            
            $(palavra).each(function(index){
               $fraseSecreta += this;
            })
        $paragrafoSecreto.text($fraseSecreta);
        $("#botoes-chute").toggle();
    }

    atualizaPalavras(palavras){ 
        $(".espaco").remove();
        $("#fraseSecreta").remove();
        console.log(palavras)
        palavras.split(" ").forEach(palavra => {
            let palavraIsolada = $("<span>").text(palavra).addClass("espaco");
            $("#palavras").append(palavraIsolada);
        });
    }

}