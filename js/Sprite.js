class Sprite{

    constructor(){
        this._sprites = ["hangman-0","hangman-1","hangman-2","hangman-3","hangman-4","hangman-5","hangman-6"]
        this.sprite_atual = 0;
        this.ultimo_sprite = this._sprites.length - 1;
        this._imgForca = $("#forca");
    }

    temProximo(){
        return this.sprite_atual +1 <= this.ultimo_sprite;
    }

    proximo(){
        if(this.temProximo()){
            let proximo_sprite = this._sprites[++this.sprite_atual];
            this._imgForca.attr("src","img/"+proximo_sprite+".png");
        }
    }

    reset(){
        this.sprite_atual = 0;
        this._imgForca.attr("src","img/"+this._sprites[0]+".png");
    }
}