let nome: string = "Shara";
let idade: number = 17;
let estaAtivo: boolean = true;

let numeros: number[] = [7, 13, 23, 28, 6161];
let nomes: string[] = ["Aglaea", "Anaxagoras", "Mydeimos"];
let misto: (string | number)[] = ["Aglaea", 1027, "Anaxagoras", 23];
let mistos2: Array<string | number> = ["Aglaea", 1027, "Anaxagoras", 23];

let pessoa: [string, number] = ["Mydeimos", 30];

let id: number | string = 616102525;
id: '616102525';

interface Usuario {
    nome: string;
    idade: number;
    email?: string; 
}

let novoUsuario: Usuario = {
    nome: "Castorice",
    idade: 2025 
};