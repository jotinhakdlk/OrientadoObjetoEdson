class Monstro{
    constructor(nome, hp){
        this.nome = nome;
        this.hp = Number(hp);
    };

    receberDano(quantidade){
        this.hp -= quantidade;
        if(hp <= 0){
            this.hp = 0;
            return `${this.nome}O monstro morreu`
        }
        return `${this.nome} sofreu ${quantidade} de dano!`
    };
};

let monstroBatalha;

function iniciarJogo(){

    const nome = document.getElementById('nomeMonstro').value;
    const hp = document.getElementById('hpMonstro').value;
    monstroBatalha = new Monstro(nome, hp)

    function atualizaTela(){
        
    }

};