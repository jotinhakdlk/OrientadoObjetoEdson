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
        document.getElementById('statusNome').innerHTML = `Nome do monstro: ${monstroBatalha.nome}`;
        document.getElementById('statusHp').innerHTML = `Vida atual: ${monstroBatalha.hp}`;
    };
    document.getElementById('painel-criacao').style.display = "none";
    document.getElementById('painel-combate').style.display = "block";
    atualizaTela();

};

function baterNoMonstro(){
    
}