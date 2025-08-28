class Carro {
    marca: string;
    constructor(marca: string){
        this.marca = marca;
    }
}

const carro1 = new Carro('toyota');
const Carro2 = new Carro('Honta')

console.log(carro1.marca);
console.log(Carro2.marca);