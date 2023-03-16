class Animal {
    constructor(n, comp, np, cor, amb, vel) {
        this.n = n;
        this.comp = comp;
        this.np = np;
        this.cor = cor;
        this.amb = amb;
        this.vel = vel;
    }

    AlterarNome(nome) {
        this.n = nome;
    }

    AlterarComprimento(comprimento) {
        this.comp = comprimento;
    }

    AlterarPatas(patas) {
        this.np = patas;
    }

    AlterarCor(cor) {
        this.cor = cor;
    }

    AlterarAmbiente(ambiente) {
        this.amb = ambiente;
    }

    AlterarVelocidade(velocidade) {
        this.vel = velocidade;
    }

    Dados() {
        console.log(`\nDados:\n`);
        console.log(`Nome: ${this.n}`);
        console.log(`Comprimento: ${this.comp} cm`);
        console.log(`Número de patas: ${this.np}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Ambiente: ${this.amb}`);
        console.log(`Velocidade: ${this.vel} m/s\n`);
    }
}

class Peixe extends Animal {
    constructor(n, comp, np, cor, amb, vel, car) {
        super(n, comp, np, cor, amb, vel);
        this.car = car;
    }

    AlterarCaracteristica(car) {
        this.car = car;
    }

    Caracteristica() {
        console.log(this.car)
    }

    Dados() {
        console.log(`\nDados:\n`);
        console.log(`Nome: ${this.n}`);
        console.log(`Comprimento: ${this.comp} cm`);
        console.log(`Número de patas: ${this.np}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Ambiente: ${this.amb}`);
        console.log(`Velocidade: ${this.vel} m/s`);
        console.log(`Característica: ${this.car}\n`)
    }
}

class Mamifero extends Animal {
    constructor(n, comp, np, cor, amb, vel, alim) {
        super(n, comp, np, cor, amb, vel)
        this.alim = alim;
    }

    AlterarAlimento(alim) {
        this.alim = alim;
    }

    Alimento() {
        console.log(this.alim)
    }

    Dados() {
        console.log(`\nDados:\n`);
        console.log(`Nome: ${this.n}`);
        console.log(`Comprimento: ${this.comp} cm`);
        console.log(`Número de patas: ${this.np}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Ambiente: ${this.amb}`);
        console.log(`Velocidade: ${this.vel} m/s`);
        console.log(`Alimento: ${this.alim}\n`)
    }
}

let camelo = new Animal('Camelo', 150, 4, 'Amarelo', 'Terra', 2);
let tubarao = new Peixe('Tubarão', 300, 0, 'Cinzento', 'Mar', 1.5, 'Barbatanas');
let ursoDoCanada = new Mamifero('Urso-do-canadá', 180, 4, 'Vermelho', 'Terra', 0.5, 'Mel');

camelo.Dados()
tubarao.Dados()
ursoDoCanada.Dados()
