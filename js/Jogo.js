class Jogo{

    constructor(){
        this._palavraChave,
        this._palavraChavePorLetra,
        this._lacunas,
        this._etapa = 1;
    }

    set palavraChave(palavraChave){
        let palavraChaveMaiuscula = palavraChave.toUpperCase();
        let arrayPalavraSemEspaco = palavraChaveMaiuscula.trim().split(/\s+/);
        let palavraChaveSemEspaco = arrayPalavraSemEspaco.join(" ");
        this._palavraChave = palavraChaveSemEspaco;
        this._palavraChavePorLetra = palavraChaveSemEspaco.split("");
        this.criaLacunas(this._palavraChavePorLetra);
        this.proximaEtapa();
    }

    get palavraChave(){
        return this._palavraChave;
    }

    proximaEtapa(){
        this._etapa++;
    }

    criaLacunas(arrayPalavra){
        this._lacunas = arrayPalavra.map(function(letra){
            console.log(letra)
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
        console.log("Ganhou o jogo!")
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

        if(acertouLetra){
            this.acertouLetra();
        }

        if(!errouPalavra){
            this.ganhou();
        }
    }

    acertouLetra(){
        console.log("acertou uma letra!")
    }

    processaChute(chute){
        let chuteMaiusculo = chute.toUpperCase();
        if (chute.length > 1){
            if(chuteMaiusculo == this._palavraChave)
                this.acertou();
        }else{
            this.verificaAcertouLetra(chuteMaiusculo)
        }
        this.proximaEtapa();
    }

    get etapa(){
        return this._etapa;
    }

    get lacunas(){
        return this._lacunas;
    }

    set lacunas(lacunas){
        this._lacunas = lacunas;
    }
}