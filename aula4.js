// 1

let numero = parseInt(prompt("Insira um número: "));

if (numero % 2 == 0) {
    console.log("O número é par!")
} else {
    console.log(" O número é impar!")
}

// 2
if (numero > 0) {
    console.log("O número é positivo");
} else if (numero < 0) {
    console.log("O numero é negativo");
} else {
    console.log("O numero é zero");
}

// 3
for (let i = 1; i < numero; i++) {
    var resultado = numero + i;
}

console.log("A soma dos algarismo ate o numero desejado é" + resultado);

// 4
function verificaPrimo() {
      if (numero < 2) {
        return false;
      }
    
      for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
          return false;
        }
      }
      return true;
}

console.log("é um numero primo?" + verificaPrimo());

// 5
let palavra = prompt("insira palavra: ");
let contagem = 0;

for (let j = 0; j < palavra.length; j++) {
    if (palavra[j] == "o") {
        contagem++;
    }
}

console.log("(5) A letra 'O' se repete " + contagem + " vezes");

// 6
let palavraInvertida = palavra.split("").reverse().join("");

console.log("palavra invertida: " + palavraInvertida);

