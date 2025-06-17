interface Livro {
    titulo: string;
    autor: string;
    anoPub: number;
}

let meuLivro: Livro = {
    titulo: "As Crônicas de Mydeimos",
    autor: "Nikador",
    anoPub: 4931
};

function exibirLivro(livro: Livro): void {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPub}`);
}

exibirLivro(meuLivro);
