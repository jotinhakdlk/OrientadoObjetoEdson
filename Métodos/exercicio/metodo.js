class Monstro{
    constructor(nome, hp){
        this.nome = nome;
        this.hp = Number(hp);
    };

    receberDano(quantidade){
        this.hp -= quantidade;
        if(hp <= 0){
            this.hp = 0;
            return `O monstro ${this.nome} morreu`
        }
        return `${this.nome} sofreu ${quantidade} de dano!`
    };
};

let monstroDaBatalha;


function atualizaTela(){
    const nome = document.getElementById('nomeMonstro').value;
    const hp = document.getElementById('hpMonstro').value;
    document.getElementById('statusNome').innerHTML = `Nome do monstro: ${monstroDaBatalha.nome}`;
    document.getElementById('statusHp').innerHTML = `Vida atual: ${monstroDaBatalha.hp}`;
};

function iniciarJogo(){
    const nome = document.getElementById('nomeMonstro').value;
    const hp = document.getElementById('hpMonstro').value;
    monstroDaBatalha = new Monstro(nome, hp)
    document.getElementById('painel-criacao').style.display = "none";
    document.getElementById('painel-combate').style.display = "block";
    atualizaTela();
};



function baterNoMonstro(){
    const valorDano = Number(document.getElementById('danoInput').value);
    const msg = monstroDaBatalha.receberDano(valorDano);
    document.getElementById('log').innerHTML = msg;
    atualizaTela();
}