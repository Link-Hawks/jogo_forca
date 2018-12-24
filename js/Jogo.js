class Jogo{

    constructor(sprite){
        this._palavraChave,
        this._palavraChavePorLetra,
        this._lacunas;
        this._sprite = sprite;
    }

    set palavraChave(palavraChave){
        let palavraChaveMaiuscula = palavraChave.toUpperCase();
        let arrayPalavraSemEspaco = palavraChaveMaiuscula.trim().split(/\s+/);
        let palavraChaveSemEspaco = arrayPalavraSemEspaco.join(" ");
        this._palavraChave = palavraChaveSemEspaco;
        this._palavraChavePorLetra = palavraChaveSemEspaco.split("");
        this.criaLacunas(this._palavraChavePorLetra);
    }

    get palavraChave(){
        return this._palavraChave;
    }


    criaLacunas(arrayPalavra){
        this._lacunas = arrayPalavra.map(function(letra){
            let temEspacoEmBranco = /\s/.test(letra)
            if(temEspacoEmBranco || letra == "-"){
                return letra;
            }else{
                return "_";
            }
        });
    }

    ganhou(){
        this._lacunas = this._palavraChavePorLetra;
        setTimeout(() => {
            alert("que pena, você morreu")            
        }, 300);
        $("#botoes-chute button").attr("disabled",true);
        return true;
    }

    verificaAcertouLetra(chute){
        let acertouLetra = false, 
            errouPalavra = false;
        this._palavraChavePorLetra.forEach((letra,index) => {
            if(letra == chute){
                this._lacunas[index] = letra;
                acertouLetra = true;
            }

            //Verifica se pelo menos uma das letras são diferentes.
            if(letra != this._lacunas[index]){
                errouPalavra = true;
            }
        });

        if(!errouPalavra){
            this.ganhou();
            return true;
        }

        if(acertouLetra){
            this.acertouLetra();
            return true;
        }else{
            this.errouLetra();
            return false;
        }

    }

    errouLetra(){
        this._sprite.proximo();
        if(!this._sprite.temProximo()){
            this.perdeu();
        }
    }

    perdeu(){        
        setTimeout(() => {
            alert("que pena, você morreu")            
        }, 300);
        this._lacunas = this._palavraChavePorLetra;
        
        $("#botoes-chute button").attr("disabled",true);
    }

    acertouLetra(){
        console.log("acertou uma letra!")
    }

    processaChute(chute){
        let chuteMaiusculo = chute.toUpperCase();
        if (chute.length > 1){
            if(chuteMaiusculo == this._palavraChave)
                return this.acertou();
            else
                return false;
        }else{
            return this.verificaAcertouLetra(chuteMaiusculo)
        }
    }

    get palavraChavePorLetra(){
        return this._palavraChavePorLetra;
    }

    lacunasString(){ 
        console.log("teseeet");
               
        console.log(this._lacunas.join(""))
        return this._lacunas.join("");
    }

    get lacunas(){
        return this._lacunas;
    }

    set lacunas(lacunas){
        this._lacunas = lacunas;
    }
}