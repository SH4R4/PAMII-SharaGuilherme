function saudacao(nome) {
    return "Ol\u00E1, ".concat(nome, "!");
}
console.log(saudacao("Tribbios"));
function exibirUsuario(usuario) {
    console.log("Nome: ".concat(usuario.nome));
    console.log("Idade: ".concat(usuario.idade));
}
exibirUsuario({
    nome: "Hyacine", idade: 19
});
function listarNomes(nomes) {
    nomes.forEach(function (nome) {
        console.log("Nome: ".concat(nome));
    });
}
listarNomes(["Hyacine", "Tribbios", "Castorice"]);
