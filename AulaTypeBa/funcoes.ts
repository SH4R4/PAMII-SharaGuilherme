function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}

console.log(saudacao("Tribbios"));

interface Usuario {
    nome: string;
    idade: number;
    email?: string; 
}

function exibirUsuario(usuario: Usuario): void {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
}

exibirUsuario ({
    nome: "Hyacine", idade: 19 });

    function listarNomes(nomes: string[]) : void {
        nomes.forEach(nome => {
            console.log(`Nome: ${nome}`);
        });
    }

    listarNomes(["Hyacine", "Tribbios", "Castorice"]);